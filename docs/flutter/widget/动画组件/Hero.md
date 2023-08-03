# Hero

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

- tag：标识 Hero 的唯一标签，用于在不同页面之间识别相同标签的 Hero。
- child：要过渡的子组件，通常是一个 Widget。
- createRectTween：用于在过渡期间计算矩形差异的函数，可以自定义过渡效果。
- flightShuttleBuilder：用于自定义过渡时的航班舱构建器，可以在飞行期间创建另一个 Hero 的 Widget。

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

在这个示例中，我们在首页和详情页之间使用 Hero 实现了一个图片的平滑过渡效果。用户点击首页的图片时，会过渡到详情页，并应用动画效果。注意确保标签 tag 在两个页面中具有相同的值。
