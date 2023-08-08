# ExpansionPanel

ExpansionPanel 是 Flutter 中的一个小部件，用于创建可折叠的面板，通常用于在列表或容器中显示更多的详细信息。每个面板由一个标题和一个可展开的内容部分组成。

## 功能和属性

ExpansionPanel 具有以下重要的属性：

- headerBuilder：用于构建面板标题部分的回调函数。
- body：面板的内容部分，通常是一个小部件。
- isExpanded：控制面板是否初始展开。
- canTapOnHeader：是否允许通过点击标题部分来切换展开状态。
- backgroundColor：展开内容的背景颜色。

## 用法和使用场景

- 可折叠的列表：ExpansionPanel 适用于在列表中显示详细信息的可折叠面板。
- 展示详细信息：可以将 ExpansionPanel 用于显示主要信息和详细信息之间的切换。

## 举例

以下是一个简单的例子，展示如何使用 ExpansionPanel 创建一个可折叠的面板列表：

```dart
List<ExpansionPanelItem> _data = generateItems(5);

List<ExpansionPanel> _expansionPanelItems() {
return_data.map<ExpansionPanel>((ExpansionPanelItem item) {
    return ExpansionPanel(
      headerBuilder: (BuildContext context, bool isExpanded) {
        return ListTile(
          title: Text(item.headerValue),
        );
      },
      body: ListTile(
        title: Text(item.expandedValue),
      ),
      isExpanded: item.isExpanded,
    );
  }).toList();
}
```

## 注意事项

- ExpansionPanel 必须提供一个标题部分的构建器函数（headerBuilder）和一个内容部分（body）。
- isExpanded 控制面板的展开状态，可以使用它来控制默认是否展开。
- canTapOnHeader 属性决定是否可以通过点击标题来切换展开状态，默认为 true。
- 注意在列表中使用 ExpansionPanel 时，要注意展开项的数量，避免在大量展开项时造成界面过于拥挤。
