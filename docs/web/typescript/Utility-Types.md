# Utility Types

# Partial—*将传入的 T 类型所有属性置为可选*

### Partial

*将传入的 T 类型所有属性置为可选*

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

[**Required—***让所有属性都变成必选的*](https://www.notion.so/Required-0849e41d64874507aec81ca5f3a7bb69?pvs=21)

[**Readonly—***将所有属性变为只读*](https://www.notion.so/Readonly-3bd706b66a9b4c6bae6a48d04cb4720d?pvs=21)

[Pick-*从 T 类型选择一组属性构造新的类型*](https://www.notion.so/Pick-T-5066ccbe19174019aaca04c723b0959d?pvs=21)

[Record—*基于一个联合类型构造一个新类型，其属性键为 K，属性值为 T*](https://www.notion.so/Record-K-T-b038e85f4e554cf5ac0fd3c6d15e40c5?pvs=21)

[Exclude—*从 T 的联合类型成员中排除可分配给类型 U 的所有联合成员来构造类型*](https://www.notion.so/Exclude-T-U-4af63a08512444a58fd2894a62700460?pvs=21)

[**Extract—***从 T 的联合类型成员中提取可分配给类型 U 的所有联合成员来构造类型*](https://www.notion.so/Extract-T-U-750828840c264f5f9cc86d83045fd4ba?pvs=21)

[Omit—*删除 T 类型中与 K 的所有联合类型成员有交集的键构造一个新类型*](https://www.notion.so/Omit-T-K-89969cd8e5ec4ca194b952eafdcb13d2?pvs=21)

[NonNullable—*新类型不可为空*](https://www.notion.so/NonNullable-c8e130349e2a4b748a7ab87f935603be?pvs=21)

[Parameters—*基于函数类型 T 的参数类型构造一个元组类型*](https://www.notion.so/Parameters-T-8670cf1229f44097a55bc8966e457cec?pvs=21)

[ConstructorParameters—*从构造函数类型 T 的参数类型构造元组或数组类型（如果 T 不是函数，则为 never）*](https://www.notion.so/ConstructorParameters-T-T-never-cd0627df79504e458b8a24a0cc64ba4c?pvs=21)

[ReturnType—*基于函数类型 T 的返回值类型构造一个新类型*](https://www.notion.so/ReturnType-T-ebcefbccc6094eeea7732be6447511a6?pvs=21)

[InstanceType—*基于一个构造函数类型 T 的返回值构造一个新类型*](https://www.notion.so/InstanceType-T-4163f80964d548c5a40666f4d6f09e2b?pvs=21)

[Uppercase—*将字符串的字面量类型转为大写*](https://www.notion.so/Uppercase-0b61dabc591342f4aa1e578ca22df1b6?pvs=21)

[**Capitalize—***将字符串的字面量类型首字母转换为大写*](https://www.notion.so/Capitalize-0343c1fd96cf42faaf48ec580242e9a6?pvs=21)

[Uncapitalize—*将字符串的字面量类型首字母转换为小写*](https://www.notion.so/Uncapitalize-93627039c7984cd898e37fe08acc42d6?pvs=21)

[ThisType—*增强对象字面量类型中 this 的类型*](https://www.notion.so/ThisType-this-b2bed83840db472d90279b60297fed9b?pvs=21)

[ThisParameterType—*提取函数声明的 this 类型*](https://www.notion.so/ThisParameterType-this-e0681cdd0fa046328319590d1aefc1b3?pvs=21)

[OmitThisParameter—*基于一个函数类型构造一个没有 this 声明的函数类型*](https://www.notion.so/OmitThisParameter-this-340845bbbcdb424b956e550c3afe2f3b?pvs=21)

[**非内置可自行实现的 Utility Types**](https://www.notion.so/Utility-Types-ed92150a4a904663a80e51b680dab4ce?pvs=21)
