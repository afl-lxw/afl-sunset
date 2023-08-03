# AnimatedContainer(动画容器)

AnimatedContainer 是 Flutter 中的一个小部件，用于在动画过渡期间平滑地更改其容器属性，如颜色、大小、边框等。它可以使容器属性的过渡变得平滑且具有动画效果。以下是关于 AnimatedContainer 的详细介绍，包括其属性、功能、用法、使用场景、示例和注意事项。

```dart
  AnimatedContainer({
    super.key,
    this.alignment,
    this.padding,
    Color? color,
    Decoration? decoration,
    this.foregroundDecoration,
    double? width,
    double? height,
    BoxConstraints? constraints,
    this.margin,
    this.transform,
    this.transformAlignment,
    this.child,
    this.clipBehavior = Clip.none,
    super.curve,
    required super.duration,
    super.onEnd,
  })
```

## 属性及功能

以下是 AnimatedContainer 的主要属性及其功能：

- key：用于标识 AnimatedContainer 的键，通常使用 GlobalKey 创建。
- alignment：容器内容的对齐方式。
- padding：容器内边距。
- color：容器的背景颜色。
- decoration：容器的装饰，可以包括背景颜色、边框等。
- foregroundDecoration：容器的前景装饰。
- width：容器的宽度。
- height：容器的高度。
- constraints：容器的约束条件。
- margin：容器的外边距。
- transform：容器的变换矩阵。
- child：容器内部的子部件。
- duration：动画的持续时间。
- curve：动画的曲线。

## 用法

```dart
AnimatedContainer(
  duration: Duration(seconds: 1),
  color: _isSelected ? Colors.blue : Colors.red,
  width:_isSelected ? 200 : 100,
  height: _isSelected ? 200 : 100,
  child: FlutterLogo(size: 100),
)
```

## 使用场景

AnimatedContainer 适用于以下场景：

- 当需要在容器属性之间创建平滑的过渡效果时，如改变颜色、大小等。
- 当希望使用动画来更新容器的属性，以增强用户体验。

## 注意事项

- 使用 duration 和 curve 属性来控制过渡的动画效果。
- 避免在一个小部件树中多次使用 AnimatedContainer，因为它可能会导致性能问题。

## 示例

以下是一个示例，展示了如何使用 AnimatedContainer 来创建一个在颜色和大小之间平滑过渡的容器：

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: AnimatedContainerExample(),
    );
  }
}

class AnimatedContainerExample extends StatefulWidget {
  @override
  _AnimatedContainerExampleState createState() =>_AnimatedContainerExampleState();
}

class _AnimatedContainerExampleState extends State<AnimatedContainerExample> {
bool_isSelected = false;

  void _toggleSelection() {
    setState(() {
      _isSelected = !_isSelected;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('AnimatedContainer Example')),
      body: Center(
        child: GestureDetector(
          onTap: _toggleSelection,
          child: AnimatedContainer(
            duration: Duration(seconds: 1),
            color:_isSelected ? Colors.blue : Colors.red,
            width: _isSelected ? 200 : 100,
            height:_isSelected ? 200 : 100,
            child: FlutterLogo(size: 100),
          ),
        ),
      ),
    );
  }
}
```

在这个示例中，我们使用 AnimatedContainer 来创建一个在颜色和大小之间平滑过渡的容器。通过点击容器来切换颜色和大小。
