# PositionedTransition(位置过渡)

PositionedTransition 是 Flutter 中的一个动画组件，用于在两个不同的位置之间进行动画过渡。它可以在两种不同的位置状态之间平滑地过渡，创建动态的位置变化效果。

```dart
  const PositionedTransition({
    super.key,
    required Animation<RelativeRect> rect,
    required this.child,
  })
```

## 属性及功能

PositionedTransition 的主要属性及功能：

- rect：用于定义动画过渡的矩形区域。矩形的左上角和右下角位置将在动画过渡中发生变化。
- child：要在矩形区域中进行动画的子组件。
- sizeFactor：一个动画对象，用于控制子组件的尺寸大小。
- axisAlignment：对齐轴，决定了矩形如何与子组件对齐。
- transformHitTests：设置为 true 时，会在矩形区域之外的地方仍然响应触摸事件。
- animation：指定用于动画过渡的动画控制器。

## 用法

以下是使用 PositionedTransition 的示例：

```dart
PositionedTransition(
  rect: _animation.drive(Tween<Rect>(
    begin: Rect.fromLTWH(0, 0, 100, 100),
    end: Rect.fromLTWH(100, 100, 200, 200),
  )),
  child: Container(
    width: 100,
    height: 100,
    color: Colors.blue,
  ),
)
```

在这个示例中，_animation 是一个控制矩形位置的动画控制器。容器将在两个不同的位置之间平滑地过渡，同时保持其尺寸不变。

## 使用场景

PositionedTransition 适用于以下场景：

- 当您希望在两种不同的位置之间进行平滑过渡时，可以使用 PositionedTransition。
- 可以用于创建动态的位置变化效果，如从一个位置平滑地滑动到另一个位置。

## 注意事项

- 使用 PositionedTransition 时，注意控制位置和尺寸的属性以及动画的持续时间，确保动画过渡看起来自然流畅。
- 由于 PositionedTransition 依赖于父容器的大小，确保父容器的大小足够以容纳子组件的变化。
- 可以使用 axisAlignment 属性来调整矩形的对齐方式，以获得不同的过渡效果。
- PositionedTransition 只能在有限的属性变化情况下使用，主要用于处理位置和尺寸的过渡动画。

## 示例

以下示例演示了如何在 Flutter 中使用 PositionedTransition 创建一个简单的位置动画：

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: PositionedExample(),
    );
  }
}

class PositionedExample extends StatefulWidget {
  @override
  _PositionedExampleState createState() =>_PositionedExampleState();
}

class _PositionedExampleState extends State<PositionedExample> {
late AnimationController_controller;
  late Animation<Rect> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: Duration(seconds: 2),
    );

    _animation = _controller.drive(
      Tween<Rect>(
        begin: Rect.fromLTWH(0, 0, 100, 100),
        end: Rect.fromLTWH(100, 100, 200, 200),
      ),
    );

    _controller.repeat(reverse: true);
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('PositionedTransition Example')),
      body: Center(
        child: PositionedTransition(
          rect: _animation,
          child: Container(
            width: 100,
            height: 100,
            color: Colors.blue,
          ),
        ),
      ),
    );
  }
}
```

在这个示例中，矩形区域将在两个不同的位置之间平滑地过渡，同时容器的尺寸保持不变。通过动画控制器和 Tween 来实现矩形的位置变化。
