# Uncapitalize

> *将字符串的字面量类型首字母转换为小写*

`Uncapitalize` 的实现为编译器内置

- 源码

```tsx
/**
 * Convert first character of string literal type to lowercase
 */
type Uncapitalize<S extends string> = intrinsic;
```

- 用法

```tsx
type DogName = "LinLin"
type UncapitalizeDogName = Uncapitalize<DogName> // 得到 "linlin"
```

- 使用场景
    1. 上述四个字符串操作类型，可与模板字符串类型配合使用，实现高级的类型定义
