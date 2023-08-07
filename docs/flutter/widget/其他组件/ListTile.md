# ListTile

```dart
  const ListTile({
    super.key,
    this.leading,
    this.title,
    this.subtitle,
    this.trailing,
    this.isThreeLine = false,
    this.dense,
    this.visualDensity,
    this.shape,
    this.style,
    this.selectedColor,
    this.iconColor,
    this.textColor,
    this.contentPadding,
    this.enabled = true,
    this.onTap,
    this.onLongPress,
    this.mouseCursor,
    this.selected = false,
    this.focusColor,
    this.hoverColor,
    this.focusNode,
    this.autofocus = false,
    this.tileColor,
    this.selectedTileColor,
    this.enableFeedback,
    this.horizontalTitleGap,
    this.minVerticalPadding,
    this.minLeadingWidth,
  })
```

## 属性

- leading：显示在列表项之前的组件，通常用来放置图标、头像等。
- title：主要标题，用于展示主要信息。
- subtitle：副标题，显示次要信息。
- trailing：显示在列表项之后的组件，通常用来放置图标、按钮等。
- isThreeLine：当为 true 时，ListTile 可以显示额外的一行文本，即 subtitle 下面的一行。
- dense：当为 true 时，ListTile 会使用更小的间距来显示内容，适合在紧凑的列表中使用。
- visualDensity：设置列表项的密度，影响元素的间距和大小。
- shape：设置列表项的形状，可以用于裁剪边角。
- style：用于定制主要标题和副标题的样式，例如颜色、字体大小等。
- selectedColor：设置选中状态下的背景颜色。
- iconColor：设置图标的颜色。
- textColor：设置文本的颜色。
- contentPadding：设置列表项内部内容的内边距。
- enabled：设置列表项是否可以响应用户的点击事件。
- onTap：点击列表项时触发的回调函数。
- onLongPress：长按列表项时触发的回调函数。
- mouseCursor：设置鼠标指针的样式。
- selected：设置列表项是否被选中，用于控制选中状态下的样式。
- focusColor：设置列表项获得焦点时的背景颜色。
- hoverColor：设置鼠标悬停在列表项上时的背景颜色。
- focusNode：用于控制列表项的焦点状态。
- autofocus：当为 true 时，列表项将自动获取焦点。
- tileColor：设置未选中状态下的背景颜色。
- selectedTileColor：设置选中状态下的背景颜色。
- enableFeedback：当为 true 时，列表项点击时会有触觉反馈。
- horizontalTitleGap：设置主要标题与图标之间的水平间距。
- minVerticalPadding：设置列表项的最小垂直内边距。
- minLeadingWidth：设置 leading 组件的最小宽度。

## 功能

- 提供了创建简单列表项的简便方法，可以包含图标、标题、子标题等内容。
- 可以响应点击和长按事件，执行相应的回调操作。
- 支持显示选中状态和设置不同的背景颜色。

## 用法

- ListTile 通常用于构建包含标题、图标等信息的列表项，适用于各种不同类型的列表视图。

## 使用场景

- 适用于构建各种类型的列表，如设置菜单、通知列表、消息列表等。
- 在需要显示简单的列表项内容时，可以方便地使用 ListTile 来快速创建。

## 注意事项

- 在包含多个 ListTile 的列表中，确保使用适当的分隔线或间距来区分各个列表项。
- 如果需要更复杂的布局，可能需要使用自定义的小部件来构建列表项。

## 示例

以下示例展示了如何使用 ListTile 来创建一个简单的列表项

```dart
ListView(
  children: <Widget>[
    ListTile(
      leading: Icon(Icons.star),
      title: Text('Item 1'),
      subtitle: Text('Subtitle for Item 1'),
      trailing: Icon(Icons.arrow_forward),
      onTap: () {
        // Do something when item is tapped
      },
    ),
    ListTile(
      leading: Icon(Icons.star),
      title: Text('Item 2'),
      subtitle: Text('Subtitle for Item 2'),
      trailing: Icon(Icons.arrow_forward),
      onTap: () {
        // Do something when item is tapped
      },
    ),
    // Add more ListTiles...
  ],
)
```

在上面的示例中，每个 ListTile 包含一个图标、主要标题、子标题和尾部图标，点击列表项时执行相应的操作。
