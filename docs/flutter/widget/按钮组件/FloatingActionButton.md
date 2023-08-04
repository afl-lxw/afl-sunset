# FloatingActionButton

FloatingActionButton 是一个浮动操作按钮小部件，它通常用于界面中的主要操作，如添加、分享等。它是一个圆形的按钮，位于界面的底部或者角落，具有显眼的样式。

```dart
  const FloatingActionButton({
    super.key,
    this.child,
    this.tooltip,
    this.foregroundColor,
    this.backgroundColor,
    this.focusColor,
    this.hoverColor,
    this.splashColor,
    this.heroTag = const _DefaultHeroTag(),
    this.elevation,
    this.focusElevation,
    this.hoverElevation,
    this.highlightElevation,
    this.disabledElevation,
    required this.onPressed,
    this.mouseCursor,
    this.mini = false,
    this.shape,
    this.clipBehavior = Clip.none,
    this.focusNode,
    this.autofocus = false,
    this.materialTapTargetSize,
    this.isExtended = false,
    this.enableFeedback,
  })
```

## 属性和功能

FloatingActionButton 有以下常用属性和功能：

- onPressed：设置按钮点击事件的回调函数。
- tooltip：设置当用户长按按钮时显示的文本提示。
- child：设置按钮内部的子部件，通常为 Icon。
- backgroundColor：设置按钮的背景颜色。
- foregroundColor：设置按钮内部图标的颜色。
- heroTag：设置按钮的唯一标识，用于区分多个 FloatingActionButton。
- elevation：设置按钮的阴影高度。
- mini：设置按钮的大小是否为 mini 模式（小尺寸）。
- shape：设置按钮的形状。

## 用法和使用场景

FloatingActionButton 主要用于界面中的主要操作，通常是一个常用且显眼的按钮。常见的使用场景包括添加、分享、发布等操作。它通常位于屏幕的底部或者角落，为用户提供快速的操作入口。

## 示例和注意事项

以下是一个使用 FloatingActionButton 的示例：

```dart
FloatingActionButton(
  onPressed: () {
    // 按钮点击事件的处理代码
  },
  child: Icon(Icons.add),
  backgroundColor: Colors.blue,
)
```

## 注意事项

- FloatingActionButton 应当放在用户操作频繁的地方，以提高用户体验。
- 考虑使用 tooltip 属性来为按钮提供额外的提示信息，以帮助用户了解按钮的作用。
- 使用 mini 模式时，按钮会变得更小，适合放置在界面的角落。
- FloatingActionButton 可以和其他小部件结合使用，例如 BottomAppBar，形成更复杂的界面。
- 总之，FloatingActionButton 是一个常用的浮动操作按钮小部件，适用于主要操作，可以提供用户友好的交互方式。
