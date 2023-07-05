# Partial

> *将传入的 T 类型所有属性置为可选*

- 源码

```jsx
/**
 * Make all properties in T optional
 */
type Partial<T> = {
  [P in keyof T]?: T[P]
}
```

- 源码解析

Partial 仅接收一个泛型参数 T，

`keyof` 理解起来较为简单，索引类型查询操作符，就是将一个 索引类型 的 key 提取为联合类型，如

```jsx
interface Dogs {
  dogName: string
  dogAge: number
  dogKind: string
}
type DogsKey = keyof Dogs // 等同于 type DogsKey = "dogName" | "dogAge" | "dogKind"
```

`in` 关键字是理解这段源码的关键，TS 的官方文档中，给出了[定义](https://link.juejin.cn/?target=typescriptlang.org%2Fdocs%2Fhandbook%2Frelease-notes%2Ftypescript-4-1.html%23key-remapping-in-mapped-types)：`key remapping in mapped types`，也就是[映射类型](https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2F2%2Fmapped-types.html)

它的语法往往是如下形式：

```jsx
// OldType 为一个联合类型
type NewType = { [K in OldType]: NewResultType }
```

<https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/854ff33d222548be825e2e9cd657e54c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp>

它大致包含 5 个部分

1.红色区域：用于承载它的类型别名

2.白色区域：类型别名 `K` (或者其他别名)，它会被依次绑定到联合类型的每个属性

3.蓝色区域：`in` 关键字

4.橙色区域：由 number、symbol 或 string 的字面量组成的 `联合类型`，它包含了要迭代的属性名的集合，也可能直接是 number、symbol 或 string 三种类型，当然这种写法与 `{ [key: string]: ResultType }` 的写法相同

5.粉色区域：属性的结果类型

> TS 4.1 以上可以在橙色区域后使用 as 操作符重新映射映射类型中的键，它的作用目标是白色区域的键；除了这 5 个部分，下文中还会提到属性修饰符 readonly 和 ?
>

假如在上述代码中，OldType 为 `type OldType = "key1" | "key2"`，那么 NewType 等同于

```tsx
type NewType = {
  key1: NewResultType
  key2: NewResultType
}
```

你可以在 TS 官网中看到类似的例子。

在索引类型中，这样的写法([属性修饰符](https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2F2%2Fobjects.html%23property-modifiers)：`?`)是不行的

```tsx
type IndexType = {
    [key: string]?: string // 错误的写法
}
```

但在映射类型中，`?` 的写法是可以的

```tsx
type MappingType = {
  [key in OldType]?: NewResultType // 正确的写法
}
```

上面的代码会得到一个这样的类型

```tsx
type NewType = {
  key1?: NewResultType | undefined
  key2?: NewResultType | undefined
}
```

对于属性的结果类型，源码中是这样处理的：`T[P]`，也就是[索引访问](https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2F2%2Findexed-access-types.html)

`索引访问` 能通过 `索引` 访问到其对应的具体类型，举例：

```tsx
interface Dogs {
  dogName: string
  dogAge: number
  dogKind: string
}

type DogName = Dogs["dogName"] // 得到 string 类型

```

如果字符串 `"dogName"` 代表一个[字面量类型](https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2F2%2Feveryday-types.html%23literal-types)，那么下面的这种写法就与 `T[P]` 是相似的

```tsx
type DogNameKey = "dogName"
type DogName = Dogs[DogNameKey]

```

对于源码的 `[P in keyof T]` 部分中的 `P`，在 `in` 操作符的作用下会是联合类型中的某一个具体的字面量类型

而 `T` 是原始的（被传入的）索引类型，`T[P]` 也就访问到了 `P` 索引对应的具体的类型了

- 使用场景举例

    1.对象的扩展运算符，比如我们实现基于 `useReducer` 实现一个简单的 `setState`

```tsx
type State = {
  loading: boolean
  list: Array<any>
  page: number
}
const [state, setState] = useReducer(
  (state: State, nextState: Partial<State>) => {
    return { ...state, ...nextState }
  },
  {
    loading: false,
    list: [],
    page: 0,
  }
)
// 使用
setState({ page: 1 })
```

上面的代码中 nextState 被传入后，会与原 state 做合并操作，nextState 并不需要含有 State 类型的所有键，故使用 Partial 进行类型的定义

1. 都是非必传参但使用参数时如果没有传则会初始化参数

```tsx
interface Params {
  param1: string
  param2: number
  param3: Array<string>
}
function testFunction(params: Partial<Params>) {
  const requiredParams: Params = {
    param1: params.param1 ?? "",
    param2: params.param2 ?? 0,
    param3: params.param3 ?? [],
  }
  return requiredParams
}
```
