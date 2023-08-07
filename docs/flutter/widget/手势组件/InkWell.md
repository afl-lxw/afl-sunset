# InkWell

> 在 Flutter 中，InkWell 是一个常用的小部件，用于在用户点击时产生一个“水波纹”效果，并提供了与点击相关的回调函数。InkWell 可以用来处理点击事件，并提供了一种可视的反馈，让用户知道他们已经点击了该区域。

## 属性

以下是 InkWell 的一些常用属性

- child: 放置在 InkWell 中的小部件。
- onTap: 点击手势回调。
- onDoubleTap: 双击手势回调。
- onLongPress: 长按手势回调。
- onTapCancel: 点击取消时回调。
- onTapDown: 点击按下时回调。
- highlightColor: 水波纹高亮颜色。
- splashColor: 水波纹扩散颜色。
- radius: 水波纹半径。
- borderRadius: 圆角矩形边界的圆角半径。

## 功能

- 在用户点击时产生“水波纹”效果，提供视觉反馈。
- 处理点击事件和手势操作。

## 用法

- InkWell 可以包裹其他小部件，以实现点击交互效果。

## 使用场景

- 在按钮、图片等小部件上添加点击效果和交互。
- 提供可视的点击反馈。

## 注意事项

- InkWell 只有在有子部件时才能响应点击，因此请确保为它设置了一个子部件。
- 使用较大的 radius 值可以增加水波纹的扩散范围。

## 示例

以下示例演示了如何使用 InkWell 创建一个带有水波纹效果的点击按钮

```dart
InkWell(
  onTap: () {
    print('Tapped');
  },
  splashColor: Colors.red, // 水波纹扩散颜色
  borderRadius: BorderRadius.circular(8), // 圆角矩形边界的圆角半径
  child: Container(
    width: 150,
    height: 50,
    alignment: Alignment.center,
    color: Colors.blue,
    child: Text(
      'Click Me',
      style: TextStyle(color: Colors.white),
    ),
  ),
)
```

在上面的示例中，当用户点击按钮时，会显示一个带有红色水波纹效果的视觉反馈，并且调用了相应的点击回调函数。
