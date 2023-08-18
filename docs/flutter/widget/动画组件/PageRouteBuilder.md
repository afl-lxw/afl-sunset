---
pageClass: custom-page-imgs-class
---
# PageRouteBuilder(页面切换动画)

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

- settings: 路由的设置，用于传递一些路由的元数据，通常是 RouteSettings 类型的对象。
- pageBuilder: 一个必需的回调函数，用于构建要过渡到的新页面的内容。该回调应返回一个 Widget，通常是你要显示的页面的主体内容。
- transitionsBuilder: 一个回调函数，用于构建页面过渡动画。默认情况下，transitionsBuilder 使用 _defaultTransitionsBuilder 函数来创建过渡效果，但你可以自定义该回调来创建你自己的过渡效果。
- transitionDuration: 指定页面过渡动画的持续时间，即新页面进入屏幕的时间。通常使用 Duration 类型来表示，单位是毫秒。
- reverseTransitionDuration: 指定反向页面过渡动画的持续时间，即新页面退出屏幕的时间。通常与 transitionDuration 相同。
- opaque: 布尔值，表示过渡期间的页面是否是不透明的。如果设置为 true，则页面会在过渡期间完全覆盖底部的页面，否则会透出底部的页面。
- barrierDismissible: 布尔值，表示是否允许用户通过点击屏幕以外的区域来取消该路由。默认为 false。
- barrierColor: 设置背景色，用于实现一些半透明的效果，通常用于遮罩效果。
- barrierLabel: 用于描述页面过渡的标签，通常用于调试和分析。
- maintainState: 布尔值，表示当页面切换时是否保留状态。如果设置为 true，则在切换页面时保留页面的状态，否则不保留。
- fullscreenDialog: 布尔值，表示该路由是否是一个全屏的对话框。默认为 false，如果设置为 true，则路由会覆盖整个屏幕，并且具有对话框的样式。

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

![PageRouteBuilderWidget](./imgs/PageRouteBuilderWidget.gif)

在这个示例中，我们使用 PageRouteBuilder 和 ScaleTransition 实现了一个自定义的页面切换缩放动画。用户点击首页的按钮时，页面会通过缩放效果过渡到详情页。
