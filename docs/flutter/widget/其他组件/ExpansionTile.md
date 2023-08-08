# ExpansionTile

ExpansionTile 是 Flutter 中的一个小部件，用于实现可展开的列表项。它可以在列表中显示一个标题和一个展开/折叠的内容部分。用户点击标题时，内容部分可以展开或折叠，提供更多的信息。

## 功能和属性

ExpansionTile 具有以下重要的属性：

- leading：在标题前显示的小部件，通常是一个图标或其他小部件。
- title：列表项的标题，通常是一个文本小部件。
- backgroundColor：展开内容的背景颜色。
- children：要在展开内容中显示的小部件列表。
- onExpansionChanged：当列表项的展开状态发生变化时调用的回调函数。
- initiallyExpanded：初始时是否展开。
- trailing：在标题后显示的小部件，通常是一个图标或其他小部件。
- tilePadding：列表项的内边距。

## 用法和使用场景

- 折叠展开列表：ExpansionTile 适用于在列表中显示一些可折叠展开的内容，例如带有详细信息的列表项。
- 常见详情页：可以将 ExpansionTile 用于显示主要信息和详细信息之间的切换。

## 举例

以下是一个简单的例子，展示如何使用 ExpansionTile 创建一个可折叠的列表项：

```dart
ExpansionTile(
  leading: Icon(Icons.folder),
  title: Text('Documents'),
  backgroundColor: Colors.grey[200],
  children: [
    ListTile(title: Text('Document 1')),
    ListTile(title: Text('Document 2')),
  ],
)
```

## 注意事项

- ExpansionTile 必须提供一个标题（title）和至少一个展开内容小部件（children）。
- leading 和 trailing 可以用于在标题前后显示图标或其他小部件，以提供更丰富的列表项。
- 使用 onExpansionChanged 回调可以在列表项的展开状态发生变化时执行自定义操作。
- 注意在列表中使用 ExpansionTile 时，要注意展开项的数量，避免在大量展开项时造成界面过于拥挤。
