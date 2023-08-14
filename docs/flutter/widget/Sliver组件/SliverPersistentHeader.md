# SliverPersistentHeader

SliverPersistentHeader 是一个用于创建持久的Sliver头部的Widget，可以在CustomScrollView中固定在顶部或底部，实现可滚动的头部或底部。

## 属性和功能

以下是SliverPersistentHeader的主要属性和功能：

- delegate： 一个继承自SliverPersistentHeaderDelegate的对象，用于定义头部的外观和行为。

## 用法和使用场景

SliverPersistentHeader通常用于以下情况：

- 自定义头部： 当您需要在CustomScrollView中创建一个自定义的头部，可能包含图像、标签、搜索框等内容时，可以使用SliverPersistentHeader。
- 固定头部： 如果您希望头部在滚动时保持固定，可以使用SliverPersistentHeader来实现。

## 属性示例和注意事项

以下是SliverPersistentHeader的一些属性示例和注意事项：

```dart
CustomScrollView(
  slivers: [
    SliverPersistentHeader(
      delegate: MyPersistentHeaderDelegate(), // 自定义的代理
    ),
    SliverList(
      delegate: SliverChildBuilderDelegate(
        (context, index) => ListTile(title: Text('Item $index')),
        childCount: 10,
      ),
    ),
  ],
)
```

自定义PersistentHeaderDelegate：

```dart
class MyPersistentHeaderDelegate extends SliverPersistentHeaderDelegate {
  @override
  Widget build(
      BuildContext context, double shrinkOffset, bool overlapsContent) {
    return Container(
      color: Colors.blue,
      alignment: Alignment.center,
      child: Text('Custom Header'),
    );
  }

  @override
  double get maxExtent => 100.0; // 最大高度

  @override
  double get minExtent => 60.0; // 最小高度

  @override
  bool shouldRebuild(SliverPersistentHeaderDelegate oldDelegate) {
    return false;
  }
}
```

注意事项：

使用SliverPersistentHeader时，必须提供一个继承自SliverPersistentHeaderDelegate的自定义代理。
在自定义的代理中，通过build方法构建头部的内容，通过maxExtent和minExtent属性指定头部的最大和最小高度。
注意头部的内容和高度需要根据实际需要进行调整，以实现预期的UI效果。
