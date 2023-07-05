# Record

> *基于一个联合类型构造一个新类型，其属性键为 K，属性值为 T*

```tsx
/**
 * Construct a type with a set of properties K of type T
 */
type Record<K extends keyof any, T> = {
  [P in K]: T
}
```

- 源码解析

`Record` 源码的含义较为容易理解，即将 K 中的每个属性，都转为 T 类型

使用起来就是

```tsx
interface Dogs {
  dogName: string
  dogAge: number
  dogKind: string
}

type KeyofDogs = keyof Dogs // "dogName" | "dogAge" | "dogKind"

type StringDogs = Record<KeyofDogs, string>
// StringDogs 与下面的类型相同
type StringDogs = {
  dogName: string
  dogAge: string
  dogKind: string
}
```

但你可能对于 `keyof any` 不太理解

```tsx
type KeyofAny = keyof any
// 等同于
type KeyofAny = string | number | symbol
```

被上述代码中 `KeyofAny` 约束的类型可以是如下类型

```tsx
type A = "a"
type B = "a" | "b"
type C = "a" | "b" | string
type D = "a" | 1
type E = "a" | symbol
type F = 1
type G = string
type H = number
type I = symbol
type J = symbol | 1
```

也就是 由 `symbol` 、`number` 或 `string` 排列组合形成的联合类型、或字面量类型、或字面量类型组成的联合类型

至于 `keyof unknown`、`keyof never`，它们得到的结果都是 `never`

- 使用场景举例

    1.通过 Record 构造索引类型 `Record<string, string>` 得到 `{ [key: string]: string }`

    2.在策略模式中使用


```typescript
type DogsRecord = Record<
  "dogKind1" | "dogKind2",
  (currentAge: number) => number
>
function getRestAgeByCurrentAgeAndKinds(
  kind: "dogKind1" | "dogKind2",
  currentAge: number
) {
  // 计算不同类型的狗的可能的剩余年龄
  const dogsRestAge: DogsRecord = {
    dogKind1: function (currentAge: number) {
      return 20 - currentAge
    },
    dogKind2: function (currentAge: number) {
      return 15 - currentAge
    },
  }
  return dogsRestAge[kind](currentAge)
}
getRestAgeByCurrentAgeAndKinds("dogKind1", 1)
```