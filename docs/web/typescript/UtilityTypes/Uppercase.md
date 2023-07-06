# Uppercase

> *将字符串的字面量类型转为大写*

`Uppercase` 的实现为编译器内置，[TS 4.1 新增](https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2Frelease-notes%2Ftypescript-4-1.html%23template-literal-types)，可以模板字符串类型配合使用，文档见：[内置字符串操作类型 Intrinsic String Manipulation Types](https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2F2%2Ftemplate-literal-types.html%23intrinsic-string-manipulation-types)，参考 [commit](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fmicrosoft%2FTypeScript%2Fcommit%2Ffbce4f6c989e4296ab43873ffc78e9c17809cac9)，下同

- 源码

```tsx
/**
 * Convert string literal type to uppercase
 */
type Uppercase<S extends string> = intrinsic;
```

- 用法

```tsx
type DogName = "LinLin"
type UppercaseDogName = Uppercase<DogName> // 得到 "LINLIN"
```

如果传入的类型为联合类型，则会得到一个新类型，其每个成员都会转为大写（二十六个字母）

如果传入的类型为 `any` 或者是 `string`，则会得到它们本身

### Lowercase

*将字符串的字面量类型转换为小写*

`Lowercase` 的实现为编译器内置

- 源码

```tsx
/**
 * Convert string literal type to lowercase
 */
type Lowercase<S extends string> = intrinsic;
```

- 用法

```tsx
type DogName = "LinLin"
type LowercaseDogName = Lowercase<DogName> // 得到 "linlin"
```

