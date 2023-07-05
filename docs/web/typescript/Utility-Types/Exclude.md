# Exclude

> *从 T 的联合类型成员中排除可分配给类型 U 的所有联合成员来构造类型*

- 源码

```tsx
/**
 * Exclude from T those types that are assignable to U
 */
type Exclude<T, U> = T extends U ? never : T
```

- 源码解析

使用 Exclude 的例子

```tsx
interface Dogs {
  dogName: string
  dogAge: number
  dogKind: string
}

type KeyofDogs = keyof Dogs // "dogName" | "dogAge" | "dogKind"

type KeysWithoutKind = Exclude<KeyofDogs, "dogKind"> // "dogName" | "dogAge"
```

在 `Exclude` 的源码中，引入了新的语法，[条件类型 Conditional Types](https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2F2%2Fconditional-types.html)

条件类型的 extends 与在 泛型中的 extends 含义不同，后者代表的是约束，而前者是判断（可分配），判断 extends 左侧类型是否可分配给右侧类型（判断方法大概就是右侧要的左侧有就可以，没有就不行，满足结构性兼容即可），如果可以则是冒号左边的类型，否则为右边的类型（与 js 的 `true ? 1 : 2` 用法类似）

在上面的例子中，你可能会想，`KeyofDogs` 并不能分配给 `"dogKind"` 类型，会得到 `T` 类型，也就是 `KeyofDogs` 类型本身，但实际的结果是 `"dogName" | "dogAge"`，从 `KeyofDogs` 中移除了 `"dogKind"` 类型

从已有的条件我们并不能看出 Exclude 的原理是什么，TS 对条件类型有一种特殊情况，也就是[分布条件类型 Distributive Conditional Types](https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2F2%2Fconditional-types.html%23distributive-conditional-types)，其定义是**当条件类型作用于泛型类型时，并且这个泛型类型是联合类型，那么它就是分布式条件类型**

泛型类型很好理解，即 `type Example<T> = T` 中的 `T` 就是一个泛型类型

源码中的 `T extends U ? never : T`， `T` 是一个泛型类型，同时这也是一个条件类型，满足分布条件类型的定义，会由联合类型 `T` 中的每个联合类型成员依次与 `extends` 右侧类型进行比对，上面代码中的 `KeyofDogs` 是一个联合类型，传入 `Exclude` 后，变为了一个泛型类型 `T`，`"dogName" | "dogAge" | "dogKind"` 会依次与 `"dogKind"` 进行比对，只有 `"dogKind"` 可以分配给 `"dogKind"`，但得到的类型为 `never`，其他两个无法分配给 `"dogKind"`，得到它们本身的字面量类型 `"dogName"` 和 `"dogAge"`，它们组成的联合类型 `"dogName" | "dogAge"` 就是最终的结果

**其他场景：**

如果 Exclude 第一个参数不是联合类型会怎么样？

```tsx
type ExampleA = Exclude<1, 2> // 会走正常的条件类型，1 不能分配给 2，会得到第一个泛型参数的类型，也就是字面量类型 1

type ExampleB = Exclude<{ 2: string }, 2> // 原理同上方注释，也是传入的第一个泛型参数的类型 { 2: string }
复制代码
```

- 使用场景举例

    1.与映射类型配合使用，参考 `Omit` 的实现
