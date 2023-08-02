# GridView

GridView是Flutter中用于展示网格布局的小部件，它可以在垂直或水平方向上展示一组子项，并支持滚动。GridView常用于展示图像列表、商品展示、瀑布流布局等，是构建网格布局的重要组件。

## 用法

```dart
GridView(
  gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
    crossAxisCount: 2, // 每行的子项数量
    mainAxisSpacing: 10, // 主轴方向的间隔
    crossAxisSpacing: 10, // 交叉轴方向的间隔
    childAspectRatio: 1.0, // 子项的宽高比
  ),
  children: <Widget>[], // 子项列表
)
```

## 属性及功能

1. gridDelegate（SliverGridDelegate）：网格布局代理。
功能：用于配置网格布局的一些参数，如子项数量、间隔等。

2. `children（List<Widget>）`：子项列表。
功能：设置网格中的子项内容。

## 使用场景

- 展示图像列表，如相册中的照片。
- 构建商品展示页面，展示不同类型的商品。
- 实现瀑布流布局，展示不同高度的子项。

## 注意事项

- 根据设计需求，选择适当的gridDelegate进行布局配置，包括子项数量、间隔、宽高比等。
- GridView可以是垂直或水平滚动的，可以根据实际需要进行设置。
- 当子项数量较多时，使用GridView.builder进行懒加载以避免一次性创建所有子项。
- 考虑性能，避免在单个GridView中包含大量的子项，可使用分页加载等技术进行优化。

## 每项属性举例

- crossAxisCount：每行的子项数量。
示例：

```dart
SliverGridDelegateWithFixedCrossAxisCount(
  crossAxisCount: 3,
  // ...
)
```

- mainAxisSpacing：主轴方向的间隔。
示例：

```dart
SliverGridDelegateWithFixedCrossAxisCount(
  mainAxisSpacing: 20,
  // ...
)
```

- crossAxisSpacing：交叉轴方向的间隔。
示例：

```dart
SliverGridDelegateWithFixedCrossAxisCount(
  crossAxisSpacing: 10,
  // ...
)
```

- childAspectRatio：子项的宽高比。
示例：

```dart
SliverGridDelegateWithFixedCrossAxisCount(
  childAspectRatio: 0.75, // 宽高比为3:4
  // ...
)
```

## 示例

下面是一个完整的使用事例，展示如何使用GridView来构建一个简单的图像列表：

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('GridView Example')),
        body: GridView.builder(
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2,
            mainAxisSpacing: 10,
            crossAxisSpacing: 10,
            childAspectRatio: 1.0,
          ),
          itemCount: 10,
          itemBuilder: (context, index) {
            return Container(
              color: Colors.blue,
              child: Center(
                child: Text('Item $index'),
              ),
            );
          },
        ),
      ),
    );
  }
}
```

在这个示例中，我们创建了一个简单的GridView，其中包含10个带有颜色和文本的子项。我们使用了GridView.builder来进行懒加载，以优化性能。通过调整gridDelegate的参数，我们可以实现不同样式的网格布局。

## gridDelegate 详解

> gridDelegate 是 GridView 中用于配置网格布局的代理，它的类型是 SliverGridDelegate。在 SliverGridDelegate 下有几个具体的子类，每个子类提供了不同的布局配置选项。以下是常用的几个 SliverGridDelegate 的子类及其可选属性：

1. SliverGridDelegateWithFixedCrossAxisCount：指定每行的子项数量，它有以下可选属性：

- crossAxisCount：每行的子项数量。
- mainAxisSpacing：主轴方向的间隔。
- crossAxisSpacing：交叉轴方向的间隔。
- childAspectRatio：子项的宽高比。

示例：

```dart
SliverGridDelegateWithFixedCrossAxisCount(
  crossAxisCount: 3,
  mainAxisSpacing: 10,
  crossAxisSpacing: 10,
  childAspectRatio: 1.0,
)
```

2.SliverGridDelegateWithMaxCrossAxisExtent：指定每行的最大宽度，它有以下可选属性：

- maxCrossAxisExtent：每行的最大宽度。
- mainAxisSpacing：主轴方向的间隔。
- crossAxisSpacing：交叉轴方向的间隔。
- childAspectRatio：子项的宽高比。

示例：

```dart
SliverGridDelegateWithMaxCrossAxisExtent(
  maxCrossAxisExtent: 200,
  mainAxisSpacing: 10,
  crossAxisSpacing: 10,
  childAspectRatio: 0.75,
)
```

3.SliverGridDelegateWithFixedCrossAxisCountAndFixedHeight：指定每行的子项数量和固定高度，它有以下可选属性：

- crossAxisCount：每行的子项数量。
- mainAxisSpacing：主轴方向的间隔。
- crossAxisSpacing：交叉轴方向的间隔。
- childAspectRatio：子项的宽高比。
- mainAxisExtent：子项的固定高度。

示例：

```dart
SliverGridDelegateWithFixedCrossAxisCountAndFixedHeight(
  crossAxisCount: 2,
  mainAxisSpacing: 10,
  crossAxisSpacing: 10,
  childAspectRatio: 0.75,
  mainAxisExtent: 150,
)
```

注意：gridDelegate 只能在 GridView 中使用，不能直接应用于其他小部件。根据实际需求选择合适的 SliverGridDelegate 子类以及相应的属性来实现不同的网格布局效果。
