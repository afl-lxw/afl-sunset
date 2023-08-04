# ButtonBar

ButtonBar 是一个小部件，用于在水平方向上排列一组按钮。它有助于在 Flutter 中更方便地创建按钮组，使得按钮的排列和布局变得更加统一和美观。

## 概述

```dart
  const ButtonBar({
    super.key,
    this.alignment,
    this.mainAxisSize,
    this.buttonTextTheme,
    this.buttonMinWidth,
    this.buttonHeight,
    this.buttonPadding,
    this.buttonAlignedDropdown,
    this.layoutBehavior,
    this.overflowDirection,
    this.overflowButtonSpacing,
    this.children = const <Widget>[],
  })
```

## 属性和功能

ButtonBar 有以下常用属性和功能：

- alignment：设置按钮的对齐方式，可以是 MainAxisAlignment.start、MainAxisAlignment.center 或 MainAxisAlignment.end。
- mainAxisSize：指定 ButtonBar 的主轴尺寸，可以是 MainAxisSize.max（占据父容器的全部宽度）或 MainAxisSize.min（根据按钮宽度自适应）。
- buttonAlignedDropdown：指定是否将按钮对齐为下拉菜单的样式，以在按钮组末尾显示一个下拉箭头。
- buttonPadding：设置按钮之间的间距。
- buttonMinWidth：设置按钮的最小宽度。
- buttonHeight：设置按钮的高度。
- layoutBehavior：指定 ButtonBar 的布局行为，可以是 ButtonBarLayoutBehavior.padded（按钮之间有填充）或 ButtonBarLayoutBehavior.constrained（按钮之间没有填充）。

## 用法和使用场景

- ButtonBar 主要用于在同一行内排列多个按钮，通常用于对话框、工具栏、表单等需要多个操作按钮的场景。它可以使按钮在水平方向上均匀分布，提供更好的用户体验。

## 示例和注意事项

以下是一个使用 ButtonBar 的示例：

```dart
ButtonBar(
  alignment: MainAxisAlignment.spaceEvenly,
  mainAxisSize: MainAxisSize.max,
  children: [
    ElevatedButton(onPressed: () {}, child: Text('Button 1')),
    OutlinedButton(onPressed: () {}, child: Text('Button 2')),
    TextButton(onPressed: () {}, child: Text('Button 3')),
  ],
)
```

注意事项：

- 不要过度使用 ButtonBar，适用于少量按钮的场景，过多的按钮可能导致排列不美观。
- 根据具体的设计要求，可以通过设置不同的属性来调整按钮的排列和样式。
- 考虑在不同尺寸的屏幕上测试 ButtonBar 的布局和排列，以确保适应不同的设备。
- 总之，ButtonBar 是一个方便的小部件，适用于在 Flutter 中创建水平排列的按钮组。根据具体的需求和设计，可以调整其属性来实现所需的按钮布局和样式。
