# AnimatedDefaultTextStyle

AnimatedDefaultTextStyle 是 Flutter 中的一个小部件，用于在不同的文本样式之间创建平滑的过渡动画。它可以让文本的样式（如字体大小、颜色、字体粗细等）在改变时具有动画效果，从而使 UI 变化更加平滑和吸引人。

```dart
  const AnimatedDefaultTextStyle({
    super.key,
    required this.child,
    required this.style,
    this.textAlign,
    this.softWrap = true,
    this.overflow = TextOverflow.clip,
    this.maxLines,
    this.textWidthBasis = TextWidthBasis.parent,
    this.textHeightBehavior,
    super.curve,
    required super.duration,
    super.onEnd,
  })
```

## 属性和功能

- style: 定义动画的起始文本样式。
- targetStyle: 定义动画的目标文本样式。
- duration: 定义动画的持续时间。
- curve: 定义动画的插值曲线。
- child: 要应用文本样式的子小部件。

## 用法

AnimatedDefaultTextStyle 在状态变化时会自动过渡起始文本样式到目标文本样式，从而创建出平滑的文本样式变化效果。

```dart
AnimatedDefaultTextStyle(
  style: _isBold ? TextStyle(fontWeight: FontWeight.bold) : TextStyle(fontWeight: FontWeight.normal),
  duration: Duration(milliseconds: 300),
  child: Text('Animated Text'),
)
```

## 使用场景

- 当你希望在文本样式发生变化时添加过渡动画效果时，可以使用 AnimatedDefaultTextStyle。
- 在用户交互时，根据不同状态改变文本样式时，可以增加动画效果以提高用户体验。

## 属性示例

```dart
AnimatedDefaultTextStyle(
  style: _isBold ? TextStyle(fontWeight: FontWeight.bold) : TextStyle(fontWeight: FontWeight.normal),
  targetStyle:_isBold ? TextStyle(color: Colors.blue) : TextStyle(color: Colors.red),
  duration: Duration(milliseconds: 300),
  curve: Curves.easeInOut,
  child: Text('Animated Text'),
)
```

## 注意事项

- AnimatedDefaultTextStyle 的子小部件（child）不会自动继承动画样式，所以它只在动画发生变化时重新构建子小部件。
- 注意在改变文本样式时，确保 style 和 targetStyle 中的属性名和值对应正确，以获得预期的动画效果。

总之，AnimatedDefaultTextStyle 是一个非常有用的小部件，它能够为文本样式的变化添加平滑的动画效果，增强用户界面的交互和可视体验。
