# AnimatedBuilder

AnimatedBuilder 是 Flutter 中的一个小部件，它用于通过传递给它的动画来构建小部件树。它允许您将动画的值映射到部件属性，只有在动画值发生变化时才会重建，从而避免不必要的重建。以下是关于 AnimatedBuilder 的详细介绍，包括其属性、功能、用法、使用场景、示例和注意事项。

```dart
  const AnimatedBuilder({
    super.key,
    required Listenable animation,
    required this.builder,
    this.child,
  })
```

## 属性及功能

以下是 AnimatedBuilder 的主要属性及其功能：

- key：用于标识 AnimatedBuilder 的键，通常使用 GlobalKey 创建。
-animation：必需属性，指定要用于构建小部件树的动画。
- builder：一个构建器函数，接受当前上下文和动画值，并返回一个小部件。

## 用法

```dart
AnimatedBuilder(
  animation: _controller,
  builder: (context, child) {
    return Transform.rotate(
angle:_controller.value *2* pi,
      child: FlutterLogo(size: 100),
    );
  },
)
```

## 使用场景

AnimatedBuilder 适用于以下场景：

- 当只想在动画值发生变化时才重新构建部件时，使用 AnimatedBuilder 可以避免不必要的重建。
- 当需要构建的小部件与动画的值有关时，可以使用 builder 函数来根据动画值来构建部件。

## 注意事项

- 确保 animation 是您要用于构建的小部件树的动画。
- 使用 builder 函数来构建部件，确保您的构建逻辑是轻量级的，以避免性能问题。

## 示例

以下是一个示例，展示了如何使用 AnimatedBuilder 来根据动画值旋转 FlutterLogo：

```dart
import 'package:flutter/material.dart';
import 'dart:math';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: AnimatedBuilderExample(),
    );
  }
}

class AnimatedBuilderExample extends StatefulWidget {
  @override
  _AnimatedBuilderExampleState createState() =>_AnimatedBuilderExampleState();
}

class _AnimatedBuilderExampleState extends State<AnimatedBuilderExample>
    with SingleTickerProviderStateMixin {
late AnimationController_controller;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: Duration(seconds: 2),
    )..repeat();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('AnimatedBuilder Example')),
      body: Center(
        child: AnimatedBuilder(
          animation: _controller,
          builder: (context, child) {
            return Transform.rotate(
              angle:_controller.value *2* pi,
              child: FlutterLogo(size: 100),
            );
          },
        ),
      ),
    );
  }
}
```

在这个示例中，我们使用 AnimatedBuilder 来创建一个可以根据动画值旋转的 FlutterLogo。使用 AnimationController 控制动画。
