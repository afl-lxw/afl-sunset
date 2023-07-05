# ConstructorParameters

> *从构造函数类型 T 的参数类型构造元组或数组类型（如果 T 不是函数，则为 never）*

- 源码

```tsx
/**
 * Obtain the parameters of a constructor function type in a tuple
 */
type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;
```

- 源码解析

`ConstructorParameters` 的源码与 `Parameters` 的源码极其相似，只是在函数类型前多了一个 `new`

在函数类型前面写一个 `new` 关键字的语法在 TS 中被称为[构造签名 Construct Signatures](https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2F2%2Ffunctions.html%23construct-signatures)

构造签名一般用在 JS 运行环境中自带的构造函数的声明（现有 API），或在 `.d.ts` 声明文件中使用

如果你写了一个构造函数，请不要使用构造签名进行类型定义，因为你很难定义出来

其他情况，你可以将它作为一个约束类型来使用（比如定义函数参数的类型必须为一个构造函数），而不是直接用于函数或类的类型声明

`ConstructorParameters` 的使用也与 `Parameters` 相似

```tsx
class Dog {
  private dogAge: number
  private isMale: boolean
  private dogKind: string
  constructor(isMale: boolean, dogKind: string) {
    this.dogAge = 0
    this.isMale = isMale
    this.dogKind = dogKind
  }
}
type DogGaveBirthNeedInfo = ConstructorParameters<typeof Dog> // 得到 [boolean, string] 类型
```
