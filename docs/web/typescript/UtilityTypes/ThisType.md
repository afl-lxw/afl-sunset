# ThisType

> *增强对象字面量类型中 this 的类型*

- 源码

```tsx
/**
 * Marker for contextual 'this' type
 */
interface ThisType<T> { }
```

除了在对象字面量类型中使用（需要启用 `--noImplicitThis`），其余位置使用都仅是一个空接口，具体可参考[文档 ThisType](https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2Futility-types.html%23thistypetype)中的例子
