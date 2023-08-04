# PopupMenuButton

PopupMenuButton 是一个弹出菜单按钮小部件，用于在点击时显示一个弹出式菜单，其中包含用户可以选择的选项列表。

## 概述

```dart
  const PopupMenuButton({
    super.key,
    required this.itemBuilder,
    this.initialValue,
    this.onSelected,
    this.onCanceled,
    this.tooltip,
    this.elevation,
    this.padding = const EdgeInsets.all(8.0),
    this.child,
    this.splashRadius,
    this.icon,
    this.iconSize,
    this.offset = Offset.zero,
    this.enabled = true,
    this.shape,
    this.color,
    this.enableFeedback,
    this.constraints,
    this.position = PopupMenuPosition.over,
  }) 
```

## 属性和功能

PopupMenuButton 有以下常用属性和功能：

- itemBuilder：一个回调函数，用于构建弹出式菜单中的选项列表。
- onSelected：一个回调函数，用于处理用户选择菜单选项后的事件。
- icon：设置按钮内部显示的图标。
- offset：设置弹出式菜单相对于按钮的偏移量。
- enabled：设置按钮是否可用。
- tooltip：设置长按按钮时显示的文本提示。

## 用法和使用场景

PopupMenuButton 主要用于在按钮点击时显示一个弹出式菜单，用户可以从菜单中选择不同的选项。它通常在 AppBar、OverflowMenu、ContextMenu 等场景中使用。

## 示例和注意事项

以下是一个使用 PopupMenuButton 的示例：

```dart
PopupMenuButton<String>(
  itemBuilder: (BuildContext context) => <PopupMenuEntry<String>>[
    PopupMenuItem<String>(
      value: 'option1',
      child: Text('Option 1'),
    ),
    PopupMenuItem<String>(
      value: 'option2',
      child: Text('Option 2'),
    ),
    PopupMenuItem<String>(
      value: 'option3',
      child: Text('Option 3'),
    ),
  ],
  onSelected: (String value) {
    // 处理选择菜单选项后的事件
  },
  icon: Icon(Icons.more_vert),
)
```

## 注意事项

- 使用 itemBuilder 回调函数来构建弹出式菜单的选项列表。
- 使用 onSelected 回调函数来处理用户选择菜单选项后的事件。
- 可以使用 icon 属性设置按钮内部的图标。
- 考虑为按钮设置 tooltip 来提供额外的提示信息。
- 弹出式菜单的选项通常是 PopupMenuItem 或 PopupMenuDivider。
- PopupMenuButton 通常与其他小部件结合使用，如 AppBar、OverflowMenu、ContextMenu 等。
- 总之，PopupMenuButton 是一个用于显示弹出式菜单的按钮小部件，适用于提供多个选项供用户选择的场景。
