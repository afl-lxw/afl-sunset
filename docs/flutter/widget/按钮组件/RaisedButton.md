# RaisedButton

RaisedButton 是一个凸起的按钮小部件，通常用于表示主要操作。

## 属性和功能

RaisedButton 有以下常用属性和功能：

- onPressed：一个回调函数，用于处理按钮被点击后的事件。
- child：设置按钮内部显示的小部件，通常是 Text 或 Icon。
- color：设置按钮的背景颜色。
- textColor：设置按钮内部文本的颜色。
- padding：设置按钮内部内容与按钮边缘的间距。
- shape：设置按钮的形状，如圆角矩形、圆形等。
- disabledColor：设置按钮在禁用状态下的背景颜色。
- disabledTextColor：设置按钮在禁用状态下的文本颜色。

## 用法和使用场景

RaisedButton 通常用于表示主要操作，例如提交表单、保存数据等。它适用于各种交互场景，如登录页、注册页、表单页面等。

## 示例和注意事项

以下是一个使用 RaisedButton 的示例：

```dart
RaisedButton(
  onPressed: () {
    // 处理按钮点击事件
  },
  child: Text('Submit'),
  color: Colors.blue,
  textColor: Colors.white,
)
```

## 注意事项

- 使用 onPressed 回调函数来处理按钮被点击后的事件。
- 使用 child 属性设置按钮内部的文本或图标。
- 可以使用 color 设置按钮的背景颜色。
- textColor 属性用于设置按钮内部文本的颜色。
- padding 属性可以用来调整按钮内部内容与按钮边缘的间距。
- shape 属性可以设置按钮的形状，如 RoundedRectangleBorder、CircleBorder 等。
- 考虑在按钮不可点击时使用 disabledColor 和 disabledTextColor 属性来提供视觉反馈。
- 总之，RaisedButton 是一个用于表示主要操作的凸起按钮，适用于各种需要用户主动交互的场景。
