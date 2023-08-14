# SliverFillRemaining

SliverFillRemaining 是一个用于填充可滚动视图剩余空间的Sliver。它可以将一个或多个子项放置在剩余空间中，使得剩余空间完全填充。

## 属性和功能

以下是SliverFillRemaining的主要属性和功能：

- child： 要填充剩余空间的子项。
- hasScrollBody： 是否将child放置在滚动主体中。如果为true，则child可以滚动；如果为false，则child不能滚动。

## 用法和使用场景

SliverFillRemaining通常用于以下情况：

- 填充空间： 当您想要在CustomScrollView的Sliver中填充可用的剩余空间时，可以使用SliverFillRemaining。
- 底部布局： 用于在CustomScrollView的Sliver列表的末尾添加一个布局，以填充剩余空间。
- Footer： 通常用于创建页脚，可以将内容放置在CustomScrollView的最底部，填充剩余空间。

## 属性示例和注意事项

以下是SliverFillRemaining的一些属性示例和注意事项：

```dart
CustomScrollView(
  slivers: [
    SliverAppBar(
      // ...其他SliverAppBar属性
    ),
    SliverList(
      delegate: SliverChildBuilderDelegate(
        (BuildContext context, int index) {
          return ListTile(title: Text('Item $index'));
        },
        childCount: 10,
      ),
    ),
    SliverFillRemaining(
      hasScrollBody: false,
      child: Container(
        color: Colors.grey,
        child: Center(child: Text('End of List')),
      ),
    ),
  ],
)
```

注意事项：

- 使用SliverFillRemaining时，可以设置hasScrollBody属性，以确定是否将child放置在滚动主体中。如果设置为true，则子项可以滚动，否则不可以。
- 如果child不会占用所有剩余空间，则SliverFillRemaining将child放置在剩余空间中。如果child已经占用了所有剩余空间，则SliverFillRemaining不会有任何效果。
- 通常，SliverFillRemaining用于创建页脚、底部布局或填充整个CustomScrollView的剩余空间。
- 总之，SliverFillRemaining是一个用于填充可滚动视图剩余空间的强大Sliver。要使用它，您需要理解其属性和用法，并根据需要进行适当的配置。
