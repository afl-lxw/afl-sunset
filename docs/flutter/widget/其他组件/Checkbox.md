# Checkbox

在 Flutter 中，Checkbox 是一个小部件，用于表示一个复选框，用户可以通过点击来切换选中状态。Checkbox 可以用于在界面中显示是否选择某个选项。

## 属性

以下是 Checkbox 的一些常用属性

- value: 一个布尔值，表示当前复选框是否选中。
- onChanged: 当复选框的选中状态发生改变时触发的回调函数。
- activeColor: 复选框选中时的颜色。
- checkColor: 复选框中勾选图标的颜色。
- fillColor: 复选框背景填充颜色。
- hoverColor: 当鼠标悬停在复选框上时的颜色。
- focusColor: 复选框获取焦点时的颜色。

## 功能

- 显示一个可点击的复选框，用户可以通过点击来切换选中状态。
- 支持自定义选中时的颜色、勾选图标的颜色以及背景颜色。

## 用法

- Checkbox 可以用于在应用中实现复选框选项，例如用户可以选择多个选项来进行筛选或操作。

## 使用场景

- 用户需要从多个选项中选择一个或多个选项时。
- 需要在界面上展示某个选项是否已选中。

## 注意事项

- 当使用 onChanged 回调函数时，需要更新外部状态，以便在复选框的选中状态发生变化时更新 UI。
- 如果需要创建多个复选框组成的组，可以使用 CheckboxListTile。

## 示例

以下示例演示了如何使用 Checkbox 创建一个简单的复选框

```dart
bool isChecked = false;

Checkbox(
  value: isChecked, // 是否选中
  onChanged: (newValue) {
    setState(() {
      isChecked = newValue;
    });
  },
  activeColor: Colors.blue, // 选中时的颜色
  checkColor: Colors.white, // 勾选图标的颜色
)
```

在上面的示例中，当用户点击复选框时，isChecked 状态会发生改变，从而更新复选框的选中状态。选中状态时，复选框的背景颜色将变为蓝色。
