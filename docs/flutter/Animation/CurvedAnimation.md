# CurvedAnimation

CurvedAnimation 是 Flutter 中用于创建动画过渡曲线的类，它可以用于在动画过程中应用不同的曲线效果，从而实现更加丰富的动画效果。以下是关于 CurvedAnimation 的详细介绍，包括其属性、功能、用法、使用场景、示例和注意事项。

```dart
  CurvedAnimation({
    required this.parent,
    required this.curve,
    this.reverseCurve,
  })
```

## 属性及功能

CurvedAnimation 的主要属性及其功能：

- parent：父级动画，通常是一个 `Animation<double>`。
- curve：指定的动画曲线，可以是预定义的 Curve 类，也可以是自定义的 Curve。

## 用法

以下是如何使用 CurvedAnimation 的示例：

```dart
AnimationController controller = AnimationController(
  duration: Duration(seconds: 2),
  vsync: this,
);

Animation<double> animation = CurvedAnimation(
  parent: controller,
  curve: Curves.easeInOut,
);
```

## 使用场景

CurvedAnimation 适用于以下场景：

- 当需要为动画过程应用不同的曲线效果时，可以使用 CurvedAnimation。
- 可以用于实现动画的渐入渐出、弹性、快速开始或结束等效果。

## 注意事项

- 在使用 CurvedAnimation 时，需要注意选择合适的曲线效果，以达到期望的动画效果。
- 可以使用 Curves 类中提供的预定义曲线，也可以使用自定义的 Curve。

## 示例

以下是一个示例，展示了如何使用 CurvedAnimation 来实现一个渐入渐出的动画效果：

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: AnimationExample(),
    );
  }
}

class AnimationExample extends StatefulWidget {
  @override
  _AnimationExampleState createState() =>_AnimationExampleState();
}

class _AnimationExampleState extends State<AnimationExample> with SingleTickerProviderStateMixin {
late AnimationController_controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: Duration(seconds: 2),
      vsync: this,
    );

    _animation = CurvedAnimation(
      parent: _controller,
      curve: Curves.easeInOut,
    );

    _controller.forward();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('CurvedAnimation Example')),
      body: Center(
        child: AnimatedBuilder(
          animation: _animation,
          builder: (context, child) {
            return Opacity(
              opacity:_animation.value,
              child: Container(
                width: 200,
                height: 200,
                color: Colors.blue,
              ),
            );
          },
        ),
      ),
    );
  }
}
```

在这个示例中，我们使用 CurvedAnimation 实现了一个渐入渐出的动画效果，将容器的不透明度从 0 渐变到 1。
