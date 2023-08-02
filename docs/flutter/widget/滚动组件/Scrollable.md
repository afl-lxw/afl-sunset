# Scrollable

Scrollable 是 Flutter 中一个抽象的滚动容器小部件，它用于将其他小部件包装成可滚动的组件。它本身通常不会直接使用，而是作为其他滚动容器（如 ListView、GridView、CustomScrollView 等）的基础, 用于创建自定义的滚动效果。

## 注意事项

- Scrollable 通常作为其他滚动容器的基础，用于实现更复杂的滚动效果。
- 在使用 Scrollable 创建自定义的滚动效果时，需要注意处理滚动冲突和滚动事件的监听。

## 示例

由于 Scrollable 通常作为其他滚动容器的基础，因此很少直接使用它来创建滚动效果。以下是一个示例，展示如何使用 Scrollable 和 CustomScrollView 创建一个自定义的滚动视图：

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: MyScrollPage(),
    );
  }
}

class MyScrollPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Scrollable Example'),
      ),
      body: Scrollable(
        axisDirection: AxisDirection.down,
        viewportBuilder: (BuildContext context, ViewportOffset offset) {
          return CustomScrollView(
            slivers: <Widget>[
              SliverList(
                delegate: SliverChildBuilderDelegate(
                  (BuildContext context, int index) {
                    return ListTile(
                      title: Text('Item $index'),
                    );
                  },
                  childCount: 20,
                ),
              ),
            ],
            physics: AlwaysScrollableScrollPhysics(),
            controller: ScrollController(),
          );
        },
      ),
    );
  }
}
```

在这个示例中，我们使用 Scrollable 和 CustomScrollView 来创建一个自定义的滚动视图。注意，在实际开发中，通常会直接使用其他滚动容器，而不是直接使用 Scrollable。
