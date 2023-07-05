# InstanceType

> *基于一个构造函数类型 T 的返回值构造一个新类型*

- 源码

```tsx
/**
 * Obtain the return type of a constructor function type
 */
type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;
```

- 源码解析

`InstanceType` 与 `ReturnType` 的区别是它多了构造签名，与 `ConstructorParameters` 的区别是它推断的不是参数类型，而是返回值类型

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
type DogGaveBirthNeedInfo = InstanceType<typeof Dog> // 得到 Dog 类型
```

也许你会疑问，为什么还得到 Dog 本身了？

请看下图

<https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3185ef0f937246999cec8feb30e3c429~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp>

`class` 定义的类本身也是一种类型，它的实例的类型可以用它本身来进行描述

如 `Dog['dogAge']` 能得到实例的私有属性 `dogAge` 的类型 `number`

