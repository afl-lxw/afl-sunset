# Required

> *让所有属性都变成必选的*

- 源码

```tsx
/**
 * Make all properties in T required
 */
type Required<T> = {
  [P in keyof T]-?: T[P]
}
```

- 源码解析

TS 在 2.8 版本改进了对[映射类型修饰符的控制](https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2Frelease-notes%2Ftypescript-2-8.html%23improved-control-over-mapped-type-modifiers)，[映射修饰符-文档](https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2F2%2Fmapped-types.html%23mapping-modifiers)

在这个版本以后，可以通过在映射类型的属性修饰符（`readonly` 或 `?`）前面增加 `-` 或 `+` 前缀，表示应删除或添加该修饰符，也就是上一章节中的 `Partial` 也的实现也可以长这样

```tsx
type Partial<T> = {
  [P in keyof T]+?: T[P]
}
```

也就是说 `-?` 的写法会去除可选属性这一属性修饰符，达到让每个属性都变为必选的目的

同时依据文档描述，`--strictNullChecks` 模式下，如果属性是包含了 undefined 的联合类型，那么 `Required` 也会将 undefined 移除

```tsx
interface TestNullCheck {
  // 如果没有 number 类型，仅有 undefined 类型，则会保留 undefined
  testParam?: number | undefined
}

type Test = Required<TestNullCheck> // 得到 { testParam: number }
复制代码
```

- 使用场景举例

与 `Partial` 相反的场景
