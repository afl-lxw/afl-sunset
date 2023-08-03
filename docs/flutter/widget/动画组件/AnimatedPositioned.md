# AnimatedPositioned

AnimatedPositioned 是 Flutter 中的一个小部件，用于在不同位置之间平滑地过渡部件的位置。它允许您在不同位置之间创建动画过渡，从而实现部件的平移效果。以下是关于 AnimatedPositioned 的详细介绍，包括其属性、功能、用法、使用场景、示例和注意事项。

```dart
  const AnimatedPositioned({
    super.key,
    required this.child,
    this.left,
    this.top,
    this.right,
    this.bottom,
    this.width,
    this.height,
    super.curve,
    required super.duration,
    super.onEnd,
  }) 
```

## 属性及功能

以下是 AnimatedPositioned 的主要属性及其功能：

- key：用于标识 AnimatedPositioned 的键，通常使用 GlobalKey 创建。
- left、top、right、bottom：部件在父容器中的位置。
- width、height：部件的宽度和高度。
- duration：动画的持续时间。
- curve：动画的曲线。
- child：要过渡的子部件。

## 用法

```dart
Stack(
  children: [
    AnimatedPositioned(
      left: _isLeft ? 0 : 100,
      top:_isTop ? 0 : 100,
      duration: Duration(seconds: 1),
      child: Container(width: 100, height: 100, color: Colors.blue),
    ),
  ],
)
```

## 使用场景

AnimatedPositioned 适用于以下场景：

- 当需要在部件的位置之间创建平滑的平移过渡时，如移动部件。

## 注意事项

- 使用 duration 和 curve 属性来控制位置的过渡动画。
- 确保父容器中有足够的空间来显示部件在不同位置的变化。

## 示例

以下是一个示例，展示了如何使用 AnimatedPositioned 来创建部件位置变化时的平滑过渡：

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: AnimatedPositionedExample(),
    );
  }
}

class AnimatedPositionedExample extends StatefulWidget {
  @override
  _AnimatedPositionedExampleState createState() =>_AnimatedPositionedExampleState();
}

class _AnimatedPositionedExampleState extends State<AnimatedPositionedExample> {
bool_isLeft = true;
  bool _isTop = true;

  void _togglePosition() {
    setState(() {
      _isLeft = !_isLeft;
      _isTop = !_isTop;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('AnimatedPositioned Example')),
      body: Center(
        child: Stack(
          children: [
            AnimatedPositioned(
              left: _isLeft ? 0 : 100,
              top:_isTop ? 0 : 100,
              duration: Duration(seconds: 1),
              child: Container(width: 100, height: 100, color: Colors.blue),
            ),
            ElevatedButton(
              onPressed: _togglePosition,
              child: Text('Toggle Position'),
            ),
          ],
        ),
      ),
    );
  }
}
```

在这个示例中，我们使用 AnimatedPositioned 来创建部件位置变化时的平滑过渡。通过按钮来切换部件的位置。
