# CustomScrollView

CustomScrollView 是 Flutter 中的一个强大的滚动容器，它可以包含多种滚动视图（sliver）组件，例如 SliverAppBar、SliverList、SliverGrid 等，以实现更复杂的滚动效果和布局。CustomScrollView 在需要定制滚动效果、嵌套滚动视图等情况下非常有用。

## 用法

```dart
CustomScrollView(
  slivers: <Widget>[],
)
```

## 属性及功能

1. slivers`（List<Widget>）`：滚动视图列表。
功能：设置包含在 CustomScrollView 中的滚动视图组件，如 SliverAppBar、SliverList、SliverGrid 等。

## 使用场景

- 构建复杂的滚动界面，例如嵌套多个滚动视图。
- 实现带有可伸缩头部的滚动页面，例如随滚动展开/折叠的 AppBar。
- 在同一个页面中同时展示多种滚动效果，如列表和网格布局。

## 注意事项

- CustomScrollView 本身不会滚动，它依赖于内部的滚动视图组件实现滚动效果。
- 在使用 CustomScrollView 时，需要在 slivers 列表中添加适当的滚动视图组件，如 SliverAppBar、SliverList、SliverGrid 等，以实现所需的布局和滚动效果。
- 由于嵌套了多个滚动视图，可能需要处理滚动冲突问题，确保每个滚动视图能够正常滚动和交互。

## 示例

下面是一个简单的示例，展示如何使用 CustomScrollView 来创建一个带有可伸缩 AppBar 的滚动页面：

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
      body: CustomScrollView(
        slivers: <Widget>[
          SliverAppBar(
            expandedHeight: 200,
            flexibleSpace: FlexibleSpaceBar(
              title: Text('CustomScrollView Example'),
              background: Image.network(
                'https://via.placeholder.com/350x150',
                fit: BoxFit.cover,
              ),
            ),
          ),
          SliverList(
            delegate: SliverChildBuilderDelegate(
              (context, index) {
                return ListTile(
                  title: Text('Item $index'),
                );
              },
              childCount: 20,
            ),
          ),
        ],
      ),
    );
  }
}
```

如图所示

![CustomScrollViewWidget](./imgs/CustomScrollViewWidget.gif)

在这个示例中，我们创建了一个带有可伸缩 AppBar 的滚动页面。CustomScrollView 中嵌套了两个滚动视图组件：SliverAppBar 和 SliverList。SliverAppBar 实现了可伸缩的头部，而 SliverList 展示了一个包含多个列表项的滚动列表。
