# AnimatedWidgetBaseState

在 Flutter 中，AnimatedWidgetBaseState 并不是一个直接可用的小部件类，它是用于实现自定义动画小部件的基础类，用于创建一个响应动画状态变化的自定义小部件。它用于继承和扩展，以创建可以自动处理动画状态的小部件。

## 属性和功能

AnimatedWidgetBaseState 并没有独立的属性和功能，它是一个抽象类，需要继承和实现，以便自定义动画小部件可以响应动画状态的变化。

## 用法

AnimatedWidgetBaseState 用于创建自定义的动画小部件，这些小部件可以自动处理动画状态的变化，并通过调用 setState 来触发重建，从而更新动画。

## 使用场景

- 当现有的动画小部件（如 AnimatedContainer、AnimatedOpacity 等）无法满足需求时，可以使用 AnimatedWidgetBaseState 创建自定义的动画小部件。
- 创建更复杂的动画效果，或需要结合多个属性进行动画的情况。

## 示例

展示如何使用 AnimatedWidgetBaseState 创建一个简单的自定义动画小部件：

```dart
import 'package:flutter/material.dart';

class CustomAnimatedWidget extends StatefulWidget {
  @override
  _CustomAnimatedWidgetState createState() =>_CustomAnimatedWidgetState();
}

class _CustomAnimatedWidgetState extends State<CustomAnimatedWidget>
    with SingleTickerProviderStateMixin {
late AnimationController_controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: Duration(seconds: 2),
    );
    _animation = CurvedAnimation(
      parent: _controller,
      curve: Curves.easeInOut,
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
    return Center(
      child: CustomAnimatedWidgetBuilder(
        animation: _animation,
      ),
    );
  }
}

class CustomAnimatedWidgetBuilder extends AnimatedWidget {
  const CustomAnimatedWidgetBuilder({
    Key? key,
    required Animation<double> animation,
  }) : super(key: key, listenable: animation);

  @override
  Widget build(BuildContext context) {
    final Animation<double> animation = listenable as Animation<double>;
    return Container(
      width: animation.value *100,
      height: animation.value* 100,
      color: Colors.blue,
    );
  }
}

void main() {
  runApp(MaterialApp(
    home: Scaffold(
      body: CustomAnimatedWidget(),
    ),
  ));
}
```

在上面的示例中，我们创建了一个自定义的动画小部件 CustomAnimatedWidgetBuilder，继承自 AnimatedWidget，并在 build 方法中根据动画值来构建小部件的效果。然后，我们使用 CustomAnimatedWidget 将其放置在屏幕中心进行显示。注意在使用 AnimatedWidgetBaseState 时，需要继承自 SingleTickerProviderStateMixin 并手动管理动画控制器的生命周期。
