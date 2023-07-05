# OmitThisParameter

> *基于一个函数类型构造一个没有 this 声明的函数类型*

- 源码

```tsx
/**
 * Removes the 'this' parameter from a function type.
 */
type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T;
```

- 源码解析

这就类似于把可选属性的属性修饰符 `?` 给去掉，为了去掉这个修饰符，TS 专门提供了一种方式，而 `OmitThisParameter` 是用 TS 已有的其他方式来对 `this` 进行剔除

`OmitThisParameter` 可以接受一个函数类型 `T`，如果 `ThisParameterType<T>` 得到 `unknown` 类型（未显示指定 this 或 不是函数类型），则直接返回类型 `T`，否则将类型 `T` 与类型 `(...args: infer A) => infer R` 做比较并提取参数类型 `A` 和 返回值类型 `R`，如果前者（`T`）是后者的子类型，则得到一个新的函数类型，它的参数类型为 `A`，返回值类型为 `R`，否则得到 `T` 类型本身

注意，带有 this 类型的函数类型是不带 this 的但参数类型与前者一致的函数类型的子类型
