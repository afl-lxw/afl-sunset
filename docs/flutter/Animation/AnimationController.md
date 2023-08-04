# AnimationController

## 概述

AnimationController 是 Flutter 中用于控制动画的一个重要类。它用于创建和管理动画的控制器，可以控制动画的持续时间、速度、反向等。以下是关于 AnimationController 的详细介绍，包括其属性、功能、用法、使用场景、示例和注意事项。

- Tween动画控制器，能够根据区间值，执行时间执行相应的动画效果
- 控制动画的启动、停止，还可以获取动画的运行状态
- 创建AnimationController时，需要传入duration(动画时长)，lowerBound(区间左值)，upperBound(区间右值)

```dart
  AnimationController({
    double? value,
    this.duration,
    this.reverseDuration,
    this.debugLabel,
    this.lowerBound = 0.0,
    this.upperBound = 1.0,
    this.animationBehavior = AnimationBehavior.normal,
    required TickerProvider vsync,
  })
```

## 属性及功能

以下是 AnimationController 的主要属性及其功能：

- value：当前动画的值，通常在 0.0 到 1.0 之间。  double
- duration：动画的持续时间。  Duration
- reverseDuration：动画反向播放的持续时间。
- upperBound、lowerBound：动画值的上下限，默认分别为 1.0 和 0.0。
- vsync：一个 TickerProvider 对象，通常使用 SingleTickerProviderStateMixin 或 TickerProviderStateMixin。
- forward：开始正向播放动画。
- reverse：开始反向播放动画。
- repeat：重复播放动画。
- addListener：添加动画值监听器。
- removeListener：移除动画值监听器。
- dispose：释放动画控制器。

## 用法

以下是如何使用 AnimationController 的示例：

```dart
AnimationController _controller = AnimationController(
  duration: Duration(seconds: 2),
  vsync: this, // 使用 SingleTickerProviderStateMixin
);
_controller.forward(); // 正向播放动画
```

## 常用方法

| 方法 | 说明 |
| --- | --- |
| forward | 动画开始执行，类似于start |
| reverse | 动画反向执行 |
| unbounded | 创建没有上下限的AnimationController |
| reset | value = lowerBound |
| animateTo | 正向动画 |
| animateBack | 反向动画 |
| repeat | 周期性执行 |
| fling | 弹性动画 |
| stop | 停止动画 |
| dispose | 释放资源 |

### ****动画的状态(AnimationStatus)****

| 取值 | 说明 |
| --- | --- |
| dismissed | 动画停止在开始处 |
| forward | 正向运行动画 |
| reverse | 反向运行动画 |
| completed | 动画停止 |

## 使用场景

AnimationController 适用于以下场景：

- 当需要控制动画的播放、暂停、停止等行为时，可以使用 AnimationController。
- 当需要在动画过程中监听动画值的变化时，可以使用 addListener。

## 注意事项

- 使用 AnimationController 时，需要注意适当地管理动画控制器的生命周期，避免内存泄漏。
- vsync 参数通常使用当前部件的状态类（如 SingleTickerProviderStateMixin）作为参数。

## 示例

以下是一个示例，展示了如何使用 AnimationController 来控制一个简单的颜色变化动画：

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: AnimationControllerExample(),
    );
  }
}

class AnimationControllerExample extends StatefulWidget {
  @override
  _AnimationControllerExampleState createState() =>_AnimationControllerExampleState();
}

class _AnimationControllerExampleState extends State<AnimationControllerExample>
    with SingleTickerProviderStateMixin {
late AnimationController_controller;
  late Animation<Color?> _colorAnimation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: Duration(seconds: 2),
      vsync: this,
    );

    _colorAnimation = ColorTween(begin: Colors.blue, end: Colors.red).animate(_controller);
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  void _startAnimation() {
    _controller.forward();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('AnimationController Example')),
      body: Center(
        child: AnimatedBuilder(
          animation: _colorAnimation,
          builder: (context, child) {
            return Container(
              width: 200,
              height: 200,
              color:_colorAnimation.value,
            );
          },
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _startAnimation,
        child: Icon(Icons.play_arrow),
      ),
    );
  }
}
```

在这个示例中，我们使用 AnimationController 控制颜色变化的动画，点击悬浮按钮可以启动动画。使用 AnimatedBuilder 来构建动画部件。
