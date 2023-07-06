# NonNullable

> *新类型不可为空*

- 源码

```tsx
/**
 * Exclude null and undefined from T
 */
type NonNullable<T> = T extends null | undefined ? never : T
```

- 源码解析

`NonNullable` 中也用到了分布条件类型，如果泛型类型 `T` 为联合类型，则其每个联合类型成员中可被分配给 `null | undefined` 的类型也就是（`never、null 和undefined`）会被剔除

如下所示：

```tsx
// 狗狗名字的实际情况，流浪狗可能没人起名字即为 null，刚出生的狗可能还没来的及起名字即为 undefined
type DogsName = 'husky' | 'corgi' | null | undefined

// 到商店洗狗时，不允许没有名字的狗
type NonNullableDogsName = NonNullable<DogsName> // 得到 type NonNullableDogsName = "husky" | "corgi"
```

另外，当传入的参数不为联合类型时，除 `null` 和 `undefined`，都会得到传入类型本身

```tsx
// any
type NonNullableAny = NonNullable<any> // any，any 的条件类型比较特殊，会得到两个分支类型的联合类型
// unknown
type NonNullableUnknown = NonNullable<unknown> // unknown
// never
type NonNullableNever = NonNullable<never> // never
// null
type NonNullableNull = NonNullable<null> // never
```

- 使用场景举例
    1. 过滤掉 null 类型和 undefined 类型

```tsx
// strictNullChecks 模式
// 函数类型的定义见 Parameters 章节
// 洗动物的方法，记载了需要提供的信息，虽然有方法，但可能没有工作人员，这时候是未定义
interface WashFunctions {
  washDogs?: (params: { dogName: string; dogAge: number }) => void
  washCats?: (params: { catName: string; catAge: number }) => void
}
// 假设要从洗动物的方法中自动生成表单信息给顾客填写
// 需求，提取出参数类型
// Parameters 用于提取函数类型的参数列表类型，详见下一章节
// Parameters 仅能传入函数类型
type ParamsByCallbackMap = {
  [Key in keyof WashFunctions]-?:
      Parameters<NonNullable<WashFunctions[Key]>>[0]
}
// 得到
/**
  *type ParamsByCallbackMap = {
  *   washDogs: {
  *       dogName: string;
  *       dogAge: number;
  *   };
  *   washCats: {
  *       catName: string;
  *       catAge: number;
  *   };
  *}
  */
```

