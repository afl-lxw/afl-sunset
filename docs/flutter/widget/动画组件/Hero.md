---
pageClass: custom-page-imgs-class
---
# Hero(页面切换时实现元素的平滑过渡动画)

Hero 是 Flutter 中的一个动画效果组件，用于在页面切换时实现元素的平滑过渡动画。通过 Hero，可以将一个 Widget 从一个页面转换到另一个页面，并在两个页面之间应用动画过渡。以下是关于 Hero 的详细介绍，包括其属性、功能、用法、使用场景、示例和注意事项。

```dart
  const Hero({
    super.key,
    required this.tag,
    this.createRectTween,
    this.flightShuttleBuilder,
    this.placeholderBuilder,
    this.transitionOnUserGestures = false,
    required this.child,
  }) 
```

## 属性及功能

Hero 的主要属性及其功能：

- tag (required): 标识Hero的唯一字符串标签，用于匹配起始页和目标页的对应Hero。必需属性，确保在两个页面的Hero之间使用相同的tag。
- createRectTween: 一个函数，用于在两个页面之间创建矩形的过渡。默认情况下，Hero将使用默认的过渡效果。如果您想要自定义过渡效果，可以通过指定此函数来实现。
- flightShuttleBuilder: 一个函数，用于构建在飞行过程中显示的Hero小部件。通常，在飞行过程中，原始Hero小部件在起始页中消失，然后在目标页中重新出现。这个函数允许您自定义过渡期间显示的Hero小部件。
- placeholderBuilder: 一个函数，用于构建在过渡期间显示的占位符小部件。在过渡开始时，Hero会在起始页中消失，并在目标页中重新出现。在这个过程中，可以通过指定此函数来构建一个占位符，以保持页面的布局稳定。
- transitionOnUserGestures: 一个布尔值，指定是否应该在用户手势期间执行过渡动画。默认为false，这意味着过渡动画不会在用户手势期间触发。如果设置为true，则可以在用户手势期间触发过渡动画，例如用户点击Hero小部件。
- child (required): Hero中要传递的子小部件。这个小部件将在起始页和目标页之间执行过渡动画。

## 用法

以下是如何使用 Hero 的示例：

```dart
Hero(
  tag: 'avatar',
  child: Image.asset('assets/avatar.png'),
);
```

## 使用场景

Hero 适用于以下场景：

- 当需要在页面之间平滑过渡某个 Widget 时，可以使用 Hero。
- 可以用于在列表和详情页之间展示过渡效果，例如列表中的缩略图过渡到详情页的大图。

## 注意事项

- 在使用 Hero 时，需要保证在不同页面中的相同 Hero 具有相同的标签。
- Hero 的过渡效果可以通过自定义 createRectTween 和 flightShuttleBuilder 来实现。
- 需要注意 Hero 过渡的性能问题，如果过渡的内容较复杂，可能会影响页面的性能。

## 示例

以下是一个示例，展示了如何使用 Hero 来实现页面切换时的平滑过渡动画：

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
        child: GestureDetector(
          onTap: () {
            Navigator.pushNamed(context, '/detail');
          },
          child: Hero(
            tag: 'avatar',
            child: Image.asset('assets/avatar.png'),
          ),
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
        child: Hero(
          tag: 'avatar',
          child: Image.asset('assets/avatar.png'),
        ),
      ),
    );
  }
}
```

![Hero](./imgs/Hero.gif)

在这个示例中，我们在首页和详情页之间使用 Hero 实现了一个图片的平滑过渡效果。用户点击首页的图片时，会过渡到详情页，并应用动画效果。注意确保标签 tag 在两个页面中具有相同的值。
