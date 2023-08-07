# FlexibleSpaceBar

FlexibleSpaceBar 是一个用于 SliverAppBar 的小部件，它提供了在 SliverAppBar 中可折叠的空间。它通常用作应用程序的顶部导航栏，在用户向下滚动时可以以不同的方式进行伸缩和变化。

## 属性

以下是 FlexibleSpaceBar 的一些常用属性

- title: 在伸缩区域顶部显示的标题小部件。
- background: 背景小部件，在伸缩区域下方显示。
- centerTitle: 标题是否在伸缩区域的中心。
- titlePadding: 标题的内边距。
- collapseMode: 定义伸缩区域的折叠模式。
- background: 伸缩区域的背景，通常是一个图片。

## 功能

- 提供了一个可折叠的空间，用于在 SliverAppBar 中显示标题、背景等内容。
- 允许定义伸缩区域的不同折叠模式，以实现不同的效果。

## 用法

- FlexibleSpaceBar 通常作为 SliverAppBar 的 flexibleSpace 属性的子部件，用于创建一个伸缩的标题栏。

## 使用场景

- 用于创建带有可伸缩标题和背景的 SliverAppBar，通常在应用程序的顶部。
- 适用于需要在用户向下滚动时保持标题和背景可见的情况。

## 注意事项

- FlexibleSpaceBar 通常用在 SliverAppBar 中，如果在其他地方使用可能会导致布局问题。
- 注意在使用 background 属性时，背景的高度和宽度应该适合伸缩区域的高度和宽度。

## 示例

以下示例展示了如何在 SliverAppBar 中使用 FlexibleSpaceBar

```dart
SliverAppBar(
  expandedHeight: 200,
  flexibleSpace: FlexibleSpaceBar(
    title: Text('FlexibleSpaceBar Example'),
    background: Image.network(
      '<https://example.com/image.jpg>',
      fit: BoxFit.cover,
    ),
  ),
)
```

在上面的示例中，SliverAppBar 有一个可伸缩的标题栏，其中的 FlexibleSpaceBar 包含一个标题和一张图片作为背景。当用户向下滚动时，标题栏会收缩，标题保持在中心位置，背景图片也会随之变化。
