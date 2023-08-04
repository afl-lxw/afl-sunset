# IconButton

## 概述

IconButton 是一个图标按钮小部件，它通常用于执行简单的操作，如切换状态、打开菜单等。它是一个包含图标的按钮，可以方便地响应用户的点击事件。

- 继承关系
  - Object > Diagnosticable > DiagnosticableTree > Widget > StatelessWidget > IconButton

```dart
  const IconButton({
    super.key,
    this.iconSize,
    this.visualDensity,
    this.padding = const EdgeInsets.all(8.0),
    this.alignment = Alignment.center,
    this.splashRadius,
    this.color,
    this.focusColor,
    this.hoverColor,
    this.highlightColor,
    this.splashColor,
    this.disabledColor,
    required this.onPressed,
    this.mouseCursor,
    this.focusNode,
    this.autofocus = false,
    this.tooltip,
    this.enableFeedback = true,
    this.constraints,
    this.style,
    this.isSelected,
    this.selectedIcon,
    required this.icon,
  })
```

## 属性和功能

IconButton 有以下常用属性和功能：

- icon：设置按钮内部显示的图标。
- onPressed：设置按钮点击事件的回调函数。
- tooltip：设置当用户长按按钮时显示的文本提示。
- alignment：设置按钮内部图标的对齐方式。
- padding：设置按钮内部图标的内边距。
- color：设置图标的颜色。
- splashColor：设置点击按钮时的水波纹颜色。
- highlightColor：设置按钮被按下时的高亮颜色。
- disabledColor：设置按钮被禁用时的颜色。

## 用法和使用场景

IconButton 主要用于执行简单的操作，通常是一个小的图标按钮。常见的使用场景包括切换状态、触发某些功能、打开菜单等。它通常放置在界面的某个位置，方便用户点击。

## 示例和注意事项

以下是一个使用 IconButton 的示例：

```dart
IconButton(
  icon: Icon(Icons.favorite),
  onPressed: () {
    // 按钮点击事件的处理代码
  },
)
```

## 注意事项

- IconButton 应当用于执行简单的操作，不适合包含复杂的逻辑。
- 使用 tooltip 属性为按钮提供额外的提示信息，以帮助用户了解按钮的作用。
- 可以使用 alignment 和 padding 属性来调整图标在按钮内的位置和间距。
- 考虑为按钮设置合适的颜色，以便与主题风格保持一致。
- IconButton 通常与其他小部件结合使用，如 AppBar、BottomAppBar 等。
- 总之，IconButton 是一个简单的图标按钮小部件，适用于执行简单的操作，提供了方便的点击交互方式。
