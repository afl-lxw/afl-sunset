# Readonly

> *将所有属性变为只读*

- 源码

```tsx
/**
 * Make all properties in T readonly
 */
type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}
```

- 源码解析

与 `Partial` 和 `Required` 的实现基本相同，不同的是它的属性修饰符为 [readonly](https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2F2%2Fobjects.html%23readonly-properties)，无修饰符前缀

`readonly` 修饰符会让被修饰的属性变为只读的（不能重写 re-written），但不能作用于该属性的子属性

- 使用场景举例

    1.参考 Object.freeze 的声明

    2.某些项目中定义的常量，防止在后续维护中，不小心在其他位置做了修改，可以使用 `Readonly`
