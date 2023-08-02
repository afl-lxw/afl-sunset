# NestedScrollView

NestedScrollView 是 Flutter 中用于创建嵌套滚动视图的小部件，它可以在一个滚动视图内部嵌套另一个滚动视图，从而实现更复杂的滚动效果和布局。常用于同时展示多种滚动视图，例如可伸缩的头部、折叠的导航栏等情况。

## 用法

```dart
NestedScrollView(
  headerSliverBuilder: (BuildContext context, bool innerBoxIsScrolled) {
    return <Widget>[
      // 嵌套滚动视图的头部部分，如 SliverAppBar
    ];
  },
  body: <Widget>[
    // 嵌套滚动视图的主体部分，如 ListView、GridView 等
  ],
)
```

## 属性及功能

1. headerSliverBuilder（NestedScrollViewHeaderSliversBuilder）：嵌套滚动视图的头部部分。
功能：用于构建头部的滚动视图组件，如 SliverAppBar。

2.body（Widget）：嵌套滚动视图的主体部分。
功能：设置滚动视图的主体部分，可以是 ListView、GridView 等。

## 使用场景

- 构建同时包含多种滚动效果的页面，如可伸缩的头部、折叠的导航栏等。
- 在一个页面内部实现垂直滚动和水平滚动的嵌套效果。

## 注意事项

- 在 headerSliverBuilder 中应添加滚动视图的头部组件，如 SliverAppBar，以实现可伸缩的头部效果。
- body 中设置嵌套滚动视图的主体部分，可以是 ListView、GridView 等滚动视图。
- 嵌套的滚动视图应根据实际需求进行滚动冲突处理，确保每个滚动视图能够正常滚动和交互。

## 示例

下面是一个示例，展示如何使用 NestedScrollView 来创建一个同时包含可伸缩头部和滚动列表的页面：

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: MyNestedScrollPage(),
    );
  }
}

class MyNestedScrollPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: NestedScrollView(
        headerSliverBuilder: (BuildContext context, bool innerBoxIsScrolled) {
          return <Widget>[
            SliverAppBar(
              expandedHeight: 200,
              floating: false,
              pinned: true,
              flexibleSpace: FlexibleSpaceBar(
                title: Text('NestedScrollView Example'),
                background: Image.network(
                  'https://via.placeholder.com/350x150',
                  fit: BoxFit.cover,
                ),
              ),
            ),
          ];
        },
        body: ListView.builder(
          itemCount: 20,
          itemBuilder: (context, index) {
            return ListTile(
              title: Text('Item $index'),
            );
          },
        ),
      ),
    );
  }
}
```

在这个示例中，我们使用 NestedScrollView 创建了一个包含可伸缩头部和滚动列表的页面。在 headerSliverBuilder 中添加了 SliverAppBar 作为头部，而在 body 中使用了 ListView.builder 作为主体滚动视图。这个示例演示了如何使用 NestedScrollView 创建一个同时包含多种滚动效果的页面。
