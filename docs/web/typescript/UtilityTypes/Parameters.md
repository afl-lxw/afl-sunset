# Parameters

> *基于函数类型 T 的参数类型构造一个元组类型*

- 源码

```tsx
/**
 * Obtain the parameters of a function type in a tuple
 */
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
```

- 源码解析

了解 `Parameters` 的原理之前，首先得知道，函数的类型如何进行定义

1. 最常见且简单的方式，使用类型别名（[函数类型表达式 function-type-expressions](https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2F2%2Ffunctions.html%23function-type-expressions)）

```tsx
type Func1 = (...args: string[]) => string
type Func2 = (arg1: string, arg2: number) => string
type Func3 = (arg1: string, arg2: number, ...args: Array<number>) => string
const arrowFunc: Func3 = (
  arg1: string,
  arg2: number,
  ...args: Array<number>
) => arg1 + [arg2, ...args].reduce((preTotal, current) => preTotal + current, 0)
```

1. 使用接口进行定义（下面代码中的 `Func3` 语法为 [调用签名 call-signatures](https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2F2%2Ffunctions.html%23call-signatures)）

```tsx
// Func['func1'] 和 Func['func2'] 为函数类型
interface Func {
  func1(arg: number): number
  func2(arg: string): number
}
const func: Func = {
  func1(arg: number) {
    return arg
  },
  func2: (arg: string) => Number(arg)
}
// Func3 即为函数类型
interface Func3 {
  (arg: number): string
}
const func3: Func3 = (arg: number) => {
  return arg.toString()
}
```

1. 使用接口进行重载（实际上是接口的合并）

```tsx
interface Func {
  (arg: number): string
  (arg: string): string
}
const func: Func = (arg: number | string) => {
  return arg.toString()
}
```

1. 使用 declare 进行类型定义（[contextual-typing](https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2Ftypescript-in-5-minutes-func.html%23contextual-typing)）

```tsx
declare function Func(...args: string[]): string
const func: typeof Func = (...args: string[]) => {
  return args.join('')
}
```

1. 使用函数声明进行重载（[函数重载 function-overloads](https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2F2%2Ffunctions.html%23function-overloads)）

```tsx
function func4(...args: string[]): string
function func4(...args: number[]): string
function func4(...args: (string | number)[]) {
  return args.join('')
}
```

> 摘自文档：从具有多个调用签名的类型（例如重载函数的类型）进行推断时，将从最后一个签名进行推断。无法基于参数类型列表执行重载解析
>
1. 其他方式（见下文，或参考[官方文档](https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2F2%2Ffunctions.html)）

`Parameters` 泛型 `T` 的约束为 `(...args: any) => any`（注：`Function` 类型没有内容和签名，不能分配给它），上述5种定义函数类型的方式，都可以分配到该类型

因此都可以作为参数传给 `Parameters`，`Parameters` 的实现也使用了条件类型，如果泛型 `T` 可以分配给 `(...args: infer P) => any`，则为 `P` 类型

`infer` 关键字见[在条件类型中推断](https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2F2%2Fconditional-types.html%23inferring-within-conditional-types)，`infer` 的作用是让 TS 自己推断，并将推断的结果存储到一个类型变量中，`infer` 只能用于 `extends` 语句中

几个用它进行推导的例子

```tsx
type Example1 = Array<number> extends Array<infer T> ? T : never // number
type Example2 = { a: string } extends { a: infer T } ? T : never // string
```

看到上面两个例子，可能 Parameters 源码你已经能看懂了

但是问题来了，TS 的子类型是基于 `结构子类型` 的，只要结构可以兼容，就是子类型，一般来讲，在条件类型中，`extends` 左侧类型可分配给右侧类型，那么左侧类型就是右侧类型的子类型

如果左侧类型是一个对象类型，在下面的例子中，只有 Example3 中，左侧是不可分配给右侧的，因为它缺少了 b 属性

对象类型中，子类型中必须包含源类型所有的属性和方法（可多但是不能少）

```tsx
type Example1 = { a: string } extends { a: string } ? true : false // true
type Example2 = { a: string; b: number } extends { a: string } ? true : false // true
type Example3 = { a: string; } extends { a: string; b: number } ? true : false // false
```

如果左侧类型是一个联合类型，在下面的例子中，只有 Example2 中，左侧是不可分配给右侧的，因为 `'b'` 不能分配给 `'a'`

联合类型中，子类型必须仅有源类型中的部分或全部成员（可以少但是不能多）

```tsx
type Example1 = 'a' extends 'a' ? true : false // true
type Example2 = 'a' | 'b' extends 'a' ? true : false // false
type Example3 = 'a' extends 'a' | 'b' ? true : false // true
```

那么，某个函数类型的子类型是什么样的呢？

了解这一点之前，你需要知道[协变](https://link.juejin.cn/?target=https%3A%2F%2Fbaike.baidu.com%2Fitem%2F%25E5%258D%258F%25E5%258F%2598)和逆变这样的概念在 TS 中也存在

对于函数类型来说，函数参数的类型兼容是反向的，称之为 逆变 ，返回值的类型兼容是正向的，称之为 协变

> 参考 你可能不知道的 TypeScript 高级技巧
>

**函数参数：我可以仅使用你传给我的一部分（或全部）属性或方法**

还是洗狗的例子，带狗来店里进行清洗的客户需要向我们店的员工说明狗的信息，但是不管你说多少信息，店员只使用年龄和品种

```tsx
// 店员获取狗的信息
function staffGetDogInfo(params: { dogAge: number; dosKind: string }): void {
    document.write(params.dogAge + params.dosKind) // 登记信息，写在纸上
}
// 客户说狗的信息，要有个人做“听他说”这件事，也就是参数 receiveAction 方法
function customerSayDogInfo(receiveAction: (params: { dogAge: number; dosKind: string; dogName: string }) => any) {
    const dogInfo = {
        dogAge: 1,
        dosKind: "husky",
        dogName: "狗蛋",
    }
    receiveAction(dogInfo)
}
// ts 类型校验通过，staffGetDogInfo 可以分配给 customerSayDogInfo 的参数类型 receiveAction
customerSayDogInfo(staffGetDogInfo)
```

示例中仅展示单一参数的情况，对于参数个数，这个规则也是类似的，你可以多给我几个参数，但我可以不用

总结起来就是，两个函数类型做比较，函数参数少（或参数数量相等）的且对应位置参数需要的属性/方法少的（不超过另一个类型对应位置参数需要的属性/方法数量，但注意联合类型和对象类型是反着的，联合类型的成员要比对应位置参数类型的联合类型成员多），在不考虑函数返回值的情况下，是函数子类型

**函数返回值：我要的你必须给我，可以多但是一个都不能少**

继续使用上面的例子，我们把场景改造下，但还是让参数的类型仍然满足函数子类型的规则，除了店员需要的信息，客户还会说一些不需要的，店员记录完以后，会给一个回执

客户要从回执中知道的就是，什么时候开始洗，什么时候洗完，谁来给我的狗洗

```tsx
// 店员获取狗的信息，登记后给回执
function staffGetDogInfo(params: { dogAge: number; dosKind: string }): {
  washPersonName: string,
  washStartTime: string,
  washEndTime: string,
  payedMoney: number,
  isVip: boolean
} {
    document.write(params.dogAge + params.dosKind) // 登记信息，写在纸上
    // 返回回执
    return {
      washPersonName: 'staff Alice',
      washStartTime: '2021/5/25 20:00:00',
      washEndTime: '2021/5/25 20:30:00',
      payedMoney: 100,
      isVip: true
    }
}
// 客户说狗的信息，要有个人做“听他说”这件事，也就是参数 receiveAction 方法
// 得到回执后，看回执上面的结束时间，过多久再回来
function customerSayDogInfo(
  receiveAction: (
    params: { dogAge: number; dosKind: string; dogName: string }
  ) => { washEndTime: string }
) {
    const dogInfo = {
        dogAge: 1,
        dosKind: "husky",
        dogName: "狗蛋",
    }
    const receipt = receiveAction(dogInfo)
    setTimeout(() => {
      // 回来取狗
    }, Number(new Date(receipt.washEndTime)) - Number(new Date()))
}
// ts 类型校验通过，staffGetDogInfo 可以分配给 customerSayDogInfo 的参数类型 receiveAction
customerSayDogInfo(staffGetDogInfo)
```

结合上面两个例子，容易得到：**两个函数类型做比较，函数参数少（或参数数量相等）的且对应位置参数需要的属性/方法少的（不超过另一个类型对应位置参数需要的属性/方法数量，但注意联合类型和对象类型是反着的，联合类型的成员要比对应位置参数类型的联合类型成员多），且函数返回值类型中含有的属性或方法要多于另一个函数类型的时候（注意联合类型是成员更少的），该类型是函数子类型**

`extends` 左右两侧为函数类型时，会得到哪个分支的类型，就显而易见了

- 使用场景
    1. 高阶函数，不使用泛型的情况下，某些场景可以用 Parameters 提取出传入的函数的参数类型

