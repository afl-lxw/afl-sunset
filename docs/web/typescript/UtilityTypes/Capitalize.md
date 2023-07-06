# Capitalize

> *将字符串的字面量类型首字母转换为大写*

`Capitalize` 的实现为编译器内置

- 源码

```tsx
/**
 * Convert first character of string literal type to uppercase
 */
type Capitalize<S extends string> = intrinsic;
```

- 用法

```tsx
type DogName = "linlin"
type CapitalizeDogName = Capitalize<DogName> // 得到 "LinLin"
```
