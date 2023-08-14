# SliverPrototypeExtentList

SliverPrototypeExtentList 是一个Sliver列表，其子项的大小由一个原型子项的大小指定，适用于固定大小的列表项。它可以在CustomScrollView中使用，适合在多个页面中使用相同大小的子项。

## 属性和功能

以下是SliverPrototypeExtentList的主要属性：

- delegate： 一个SliverChildBuilderDelegate类型的代理对象，用于构建子项。
- prototypeItem： 用于确定子项大小的原型子项。

## 用法和使用场景

SliverPrototypeExtentList通常用于以下情况：

- 固定大小的子项： 当您有一个固定大小的子项列表，但它们的内容不同，您可以使用SliverPrototypeExtentList来避免测量每个子项的大小。
- 多页共享样式： 如果多个页面中都有相同大小的子项列表，您可以使用SliverPrototypeExtentList来提高性能。

## 属性示例和注意事项

以下是SliverPrototypeExtentList的一些属性示例和注意事项：

```dart
CustomScrollView(
  slivers: [
    SliverPrototypeExtentList(
      delegate: SliverChildBuilderDelegate(
        (context, index) => ListTile(title: Text('Item $index')),
        childCount: 10,
      ),
      prototypeItem: ListTile(title: Text('Prototype Item')),
    ),
  ],
)
```

## 注意事项

- 使用SliverPrototypeExtentList时，需要提供一个SliverChildBuilderDelegate代理来构建子项，并且提供一个原型子项来确定子项的大小。
- 原型子项的大小将被用于确定所有子项的大小，因此需要确保原型子项与实际子项的大小相匹配。
- SliverPrototypeExtentList适用于那些在大小上相同，但内容可能不同的列表项。
