# Pick

> *从 T 类型选择一组属性构造新的类型*

- 源码

```tsx
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}
```

- 源码解析

使用 `Pick` 时，需传递两个泛型参数，第一个参数为一个[对象类型](https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2F2%2Fobjects.html)（或映射类型），第二个参数为第一个参数的键（属性）组成的联合类型（或单个字面量类型），`Pick` 构造的新类型中，属性为第二个参数中的联合类型的所有联合类型成员

示例：

```tsx
interface Dogs {
  dogName: string
  dogAge: number
  dogKind: string
}
// 联合类型
type NameAndAge = Pick<Dogs, "dogName" | "dogAge"> // { dogName: string; dogAge: number }

// 单个字符串类型
type DogKind = Pick<Dogs, "dogKind"> // { dogKind: string; }
```

在 `Pick` 的实现中，引入了新的语法，[泛型](https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2F2%2Fgenerics.html)、[extends](https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2F2%2Fgenerics.html%23generic-constraints)

`extends` 在 TS 中，不同的位置使用有不同的含义，在这里是约束（Generic Constraints）的含义，extends 左侧类型一定要满足可分配给右侧类型

`keyof T` 的写法在前文中已经讲到（另外泛型参数中，靠后的参数的 extends 子句能使用靠前参数的类型别名），T 是一个对象类型，那么 `keyof T` 是一个由 string 或 number （没有 symbol）组成的联合类型，因此 `K` 是 `T` 的所有属性名构成的联合类型的子类型

`in` 映射类型可参考 `Partial` 章节，在 `Pick` 中，`K` 会被迭代，`P` 是在每次迭代中都是某个字面量类型，也是 `T` 的某一个属性名，通过索引访问 `T[P]` 能得到该属性名对应的属性值的具体类型，最后 `Pick` 得到一个新的对象类型

- 使用场景举例

    1.某个位置需要全部的属性，其他位置仅需要部分属性的情况，如上文的 `Dogs` 例子

    2.参考 [lodash](https://link.juejin.cn/?target=https%3A%2F%2Flodash.com.cn%2Fdocs%2Fchunk).pick 的声明和实现

    3.二次封装第三方组件，仅向外暴露部分参数的情况
