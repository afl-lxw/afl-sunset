# Extract

> *从 T 的联合类型成员中提取可分配给类型 U 的所有联合成员来构造类型*

- 源码

```tsx
/**
 * Extract from T those types that are assignable to U
 */
type Extract<T, U> = T extends U ? T : never
```

- 源码解析

在 `Exclude` 章节我们讲到了分布条件类型，`Extract` 的作用和 `Exclude` 正好相反，在 `Exclude` 中，会依次将 `T` 中的联合类型成员与类型 `U` 对比，如果其可以分配给类型 `U`，则得到该类型

```tsx
interface Dogs {
  dogName: string
  dogAge: number
  dogKind: string
}

type KeyofDogs = keyof Dogs // "dogName" | "dogAge" | "dogKind"

type KeysOnlyKind = Extract<KeyofDogs, "dogKind"> // "dogKind"
```

- 使用场景举例

    1.与映射类型配合使用，参考 `Omit` 的实现

```typescript
// 提取 T 类型的部分（或全部）键构造一个新类型
type Include<T extends object, U extends keyof any> = {
  [Key in Extract<keyof T, U>]: T[Key]
}
// 或
type Include<T, K extends keyof any> = Pick<T, Extract<keyof T, K>>
复制代码
```