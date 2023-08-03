# SizeTransition(大小变化组件)

SizeTransition 是 Flutter 中用于实现大小变化动画的一个组件。它可以在一个子部件上应用大小变化动画，并根据提供的动画进行大小变化。

```dart
  const SizeTransition({
    super.key,
    this.axis = Axis.vertical,
    required Animation<double> sizeFactor,
    this.axisAlignment = 0.0,
    this.child,
  })
```

## 属性和功能

- axis: 一个 Axis 类型的属性，表示大小变化的轴向，默认为 Axis.vertical，表示垂直方向的大小变化。你也可以设置为 Axis.horizontal，表示水平方向的大小变化。
- axisAlignment: 一个 double 类型的属性，表示大小变化轴线上的对齐位置。默认为0.0，表示在轴线的起始位置；设置为1.0表示在轴线的结束位置。
- sizeFactor: 一个 `Animation<double>` 类型的属性，表示大小变化的因子。当 sizeFactor 的值为1时，子部件大小不变；小于1时，子部件会缩小；大于1时，子部件会放大。
- axis: 用于指定变化的轴向，默认为 Axis.vertical，表示垂直方向的大小变化。
- child: 要应用大小变化动画的子部件。
- 用法：
- SizeTransition 可以用于为一个部件添加大小变化动画效果。通常配合 AnimationController 和 Tween 使用，可以实现在一段时间内大小变化部件。

## 使用场景

- 当你想要为一个部件添加大小变化动画时，比如在用户交互、状态变化等情况下。
- 在设计动态和生动的用户界面时，可以使用大小变化动画来增强交互体验。

## 属性示例

```dart
AnimationController _controller;
Animation<double>_animation;

@override
void initState() {
  super.initState();
  _controller = AnimationController(
    vsync: this,
    duration: Duration(seconds: 2),
  )..repeat(reverse: true);

  _animation =_controller.drive(
    Tween<double>(
      begin: 1,
      end: 0.5,
    ),
  );
}

@override
Widget build(BuildContext context) {
  return Scaffold(
    appBar: AppBar(title: Text('SizeTransition Example')),
    body: Center(
      child: SizeTransition(
        sizeFactor: _animation,
        child: Container(
          width: 100,
          height: 100,
          color: Colors.blue,
        ),
      ),
    ),
  );
}
```

## 注意事项

- SizeTransition 中的 sizeFactor 属性的值是一个 `Animation<double>`，所以需要配合 AnimationController 和 Tween 使用。
- 当使用 SizeTransition 时，要确保给定的动画范围在 0 到正无穷之间，否则可能导致部件大小变为负值，影响动画效果。
