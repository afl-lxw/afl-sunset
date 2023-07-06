# ThisParameterType

> *提取函数声明的 this 类型*

- 源码

```tsx
/**
 * Extracts the type of the 'this' parameter of a function type, or 'unknown' if the function type has no 'this' parameter.
 */
type ThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any ? U : unknown;
```

- 源码解析

如果你需要[在函数的实现中使用 this](https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2F2%2Ffunctions.html%23declaring-this-in-a-function)，那么你可以在第一个参数位置显示的声明它（函数参数类型依次顺延，第二位为函数的第一个参数），如下所示

```tsx
interface Dog {
  voice: {
    bark(): void
  }
}
function dogBark(this: Dog) {
  this.voice.bark()
}
// 如果不显示的声明 this，则 this 会根据函数声明所在的环境进行推导
// 声明 this 后，在函数调用时，TS 会校验当前上下文中的 this 是否与所需的 this 相匹配
// dogBark 的调用方式如下
declare const dog: Dog
dogBark.call(dog)
// 或
declare const dog: Dog & { dogBark: typeof dogBark }
dog.dogBark()
```

不要在箭头函数里面显示的定义 this，箭头函数的 this 不可改变

`ThisParameterType` 和 `Parameters` 的实现类似，都是基于 `infer`，`ThisParameterType` 推导的是 `this` 的类型，如果没有显示的声明 `this`，则为 `unknown`

