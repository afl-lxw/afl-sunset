# ReturnType

> *基于函数类型 T 的返回值类型构造一个新类型*

- 源码

```tsx
/**
 * Obtain the return type of a function type
 */
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
```

- 源码解析

与 `Parameters` 源码不同的是，其 `infer` 的 `R` 在函数类型的返回值位置

```tsx
function washDog() {
  return {
    dogName: 'linlin',
    dogAge: 20,
    dogKind: 'husky'
  }
}
type WashTicket = ReturnType<typeof washDog>
/*
 * 会的到这样的类型，也就是函数 washDog 返回值的类型
 *type WashTicket = {
 *  dogName: string
 *  dogAge: number
 *  dogKind: string
 *}
*/
```

- 使用场景举例
    1. 高阶函数，不使用泛型的情况下，某些场景可以用 ReturnType 提取出传入的函数的返回值类型

