# CheckboxListTile

CheckboxListTile 是 Flutter 中的一个部件，用于在列表中显示带有复选框的列表项。它结合了 Checkbox 和 ListTile，可以在列表项中显示标题、副标题、图标以及复选框，非常适合用于显示列表中的多个选项。让我详细介绍一下 CheckboxListTile 的属性、功能、用法、使用场景和注意事项。

## 属性和功能

CheckboxListTile 具有以下一些重要的属性：

- value：复选框的选中状态，通常使用 bool 类型来表示。
- onChanged：复选框状态发生改变时的回调函数。
- title：列表项的标题部分，通常使用 Text 部件表示。
- subtitle：列表项的副标题部分，可以是一个字符串或 Text 部件。
- secondary：复选框前显示的小图标，通常用于显示用户头像。
- isThreeLine：是否将列表项显示为三行布局，如果为 true，subtitle 将显示在标题下面。
- dense：是否使用紧凑模式来显示列表项。
- controlAffinity：控制复选框的位置，可以是 leading（在标题前）或 trailing（在标题后）。
- contentPadding：内容的内边距。
- activeColor：选中状态下复选框的颜色。
- tileColor：列表项的背景颜色。

## 用法和使用场景

CheckboxListTile 适用于以下一些场景：

- 多选列表：用于在列表中显示多个选项，用户可以选择其中的多个项。
- 设置页面：可以用于设置页面中的多个选项，让用户选择适当的设置。
- 任务清单：在任务清单应用中，可以用于勾选完成的任务。

## 举例

以下是一个简单的示例，展示如何使用 CheckboxListTile：

```dart
CheckboxListTile(
  title: Text('Item 1'),
  subtitle: Text('Subtitle for Item 1'),
  secondary: Icon(Icons.star),
  value: _isChecked,
  onChanged: (value) {
    setState(() {
      _isChecked = value;
    });
  },
)
```

## 注意事项

- 使用 CheckboxListTile 时，请确保提供适当的标题和副标题。
- 使用 value 属性来控制复选框的选中状态。
- 使用 onChanged 属性来处理复选框状态变化的回调。
- 可以使用 secondary 属性来在复选框前显示小图标。
- 可以通过设置 isThreeLine 来显示三行布局，将 subtitle 放在标题下面。
- 使用 controlAffinity 来控制复选框的位置，可以是 leading 或 trailing。
- 使用 activeColor 属性可以改变选中状态下复选框的颜色。
- 使用 tileColor 属性可以改变列表项的背景颜色。
- CheckboxListTile 结合了 Checkbox 和 ListTile，适用于在列表中显示带有复选框的选项。
- 总之，CheckboxListTile 是一个非常实用的部件，适用于在列表中显示带有复选框的选项，同时还可以显示标题、副标题和小图标，非常适合在多选列表、设置页面和任务清单中使用。
