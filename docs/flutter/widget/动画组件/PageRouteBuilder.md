# PageRouteBuilder

PageRouteBuilder 是 Flutter 中用于自定义页面切换动画的组件。通过 PageRouteBuilder，您可以创建自定义的页面切换效果，包括淡入淡出、滑动、缩放等过渡动画。以下是关于 PageRouteBuilder 的详细介绍，包括其属性、功能、用法、使用场景、示例和注意事项。

```dart
  PageRouteBuilder({
    super.settings,
    required this.pageBuilder,
    this.transitionsBuilder = _defaultTransitionsBuilder,
    this.transitionDuration = const Duration(milliseconds: 300),
    this.reverseTransitionDuration = const Duration(milliseconds: 300),
    this.opaque = true,
    this.barrierDismissible = false,
    this.barrierColor,
    this.barrierLabel,
    this.maintainState = true,
    super.fullscreenDialog,
  })
```

## 属性及功能

PageRouteBuilder 的主要属性及其功能：

- pageBuilder：构建页面内容的函数，通常返回一个 Widget。
- transitionDuration：过渡动画的持续时间。
- reverseTransitionDuration：反向过渡动画的持续时间。
- transitionsBuilder：自定义过渡动画的函数，通常返回一个 Widget，可以使用 BuildContext、Animation<double> 等参数。

## 用法

以下是如何使用 PageRouteBuilder 的示例：

```dart
PageRouteBuilder(
  pageBuilder: (context, animation, secondaryAnimation) {
    return MyPage();
  },
  transitionDuration: Duration(seconds: 1),
  transitionsBuilder: (context, animation, secondaryAnimation, child) {
    return FadeTransition(
      opacity: animation,
      child: child,
    );
  },
);
```

## 使用场景

PageRouteBuilder 适用于以下场景：

- 当需要自定义页面切换动画时，可以使用 PageRouteBuilder。
- 可以用于实现各种页面切换效果，如淡入淡出、滑动、缩放等。

## 注意事项

- 在使用 PageRouteBuilder 时，需要构建页面内容的 pageBuilder 函数，并根据需要实现过渡动画。
- 过渡动画可以在 transitionsBuilder 函数中自定义，使用 animation 参数来控制动画效果。
- 需要注意自定义过渡动画的性能问题，复杂的动画效果可能会影响页面的性能。

## 示例

以下是一个示例，展示了如何使用 PageRouteBuilder 来实现自定义的页面切换动画：

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: HomePage(),
      routes: {
        '/detail': (context) => DetailPage(),
      },
    );
  }
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Home')),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            Navigator.push(
              context,
              PageRouteBuilder(
                pageBuilder: (context, animation, secondaryAnimation) {
                  return DetailPage();
                },
                transitionDuration: Duration(seconds: 1),
                transitionsBuilder: (context, animation, secondaryAnimation, child) {
                  return ScaleTransition(
                    scale: animation,
                    child: child,
                  );
                },
              ),
            );
          },
          child: Text('Go to Detail'),
        ),
      ),
    );
  }
}

class DetailPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Detail')),
      body: Center(
        child: Text('Detail Page'),
      ),
    );
  }
}
```

在这个示例中，我们使用 PageRouteBuilder 和 ScaleTransition 实现了一个自定义的页面切换缩放动画。用户点击首页的按钮时，页面会通过缩放效果过渡到详情页。
