# Omit

> *删除 T 类型中与 K 的所有联合类型成员有交集的键构造一个新类型*

- 源码

```tsx
/**
 * Construct a type with the properties of T except for those in type K.
 */
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
```

`Omit` 源码借助了 `Pick` 和 `Exclude`，`Pick` 会构造一个基于第一个参数，且属性为第二个参数（联合类型）的联合类型成员的类型

第一个参数为 `T`，其第二个参数是 `Exclude<keyof T, K>`，`Exclude` 第一个参数为 `keyof T`，即 `T` 的所有键构成的联合类型

`K` 是外部传入 `Omit` 的泛型类型，也会作为第二个参数传给 `Exclude`，由 `Exclude` 得到一个 `keyof T` 剔除掉与 `K` 交集的部分形成的联合类型

这样 `Pick` 生成的新类型的键就会仅包含由 `Exclude` 得到的联合类型中的联合类型成员

最终 `Omit` 会**删除 `T` 类型中与 `K` 的所有联合类型成员有交集的键构造一个新类型**

```tsx
interface Dogs {
  dogName: string
  dogAge: number
  dogKind: string
}

type DogsWithoutKind = Omit<Dogs, "dogKind"> // { dogName: string; dogAge: number; }
```

- 使用场景举例

    1.对 HTML 元素进行组件封装时，用它替换默认的属性类型

```tsx
import _ from "lodash"
import React from "react"

type InputSize = "large" | "middle" | "small"
type InputName = "first-name-input" | "last-name-input" | "address-input"
type CoverAttr = "size" | "name"
interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, CoverAttr> {
  size?: InputSize
  name?: InputName
}

const Input: React.FC<InputProps> = (props) => {
  const classNames = `${props.className} ${props.size}`
  const omitProps = _.omit(props, ["size", "name"])

  return <input {...omitProps} className={classNames} />
}

Input.defaultProps = {
  size: "middle",
}
```

1. 对第三方 UI 组件二次封装时，替换其参数
2. 其他（组件，函数，对象等）向使用者提供时，省略一些已处理的参数

```tsx
interface Dogs {
  dogName: string
  dogAge: number
  dogKind: string
}
/*
 * 狗狗清洗登记，登记狗狗名字（假设狗狗名字独一无二）后返回一张凭证
 * 凭借凭证和狗狗的种类、年龄（设年龄不变大）到清洗处清洗
 */
const wash = (dog: Dogs) => {
  /** 洗狗 */
}
// 登记的狗
const queue = new Set<string>([])

function dogsCleanRegister(dog: Dogs) {
  queue.add(dog.dogName)

  return function washTicket(dogNeedCheckInfo: Omit<Dogs, "dogName">) {
    if (
      dogNeedCheckInfo.dogAge === dog.dogAge &&
      dogNeedCheckInfo.dogKind === dog.dogKind
    ) {
      wash(dog)
      queue.delete(dog.dogName)
    } else {
      throw new Error("凭证和狗狗不对应")
    }
  }
}
// 我用自己的狗登记
const myDog = {
  dogName: "小明",
  dogAge: 5,
  dogKind: "柯基",
}

const goToWash = dogsCleanRegister(myDog)

// 我拿别人的狗去洗
const myBrothersDog = {
  dogName: "大明",
  dogAge: 6,
  dogKind: "哈士奇",
}

// 校验失败
goToWash(myBrothersDog) // '凭证和狗狗不对应'
```
