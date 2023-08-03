# Switch、Checkbox

## 单选开关（Switch）

Switch 是 Flutter 中的一个小部件，用于创建一个单选开关，允许用户在两个状态之间切换。以下是关于 Switch 的详细介绍，包括其属性、功能、用法、使用场景、示例和注意事项。

### Switch属性及功能

以下是 Switch 的主要属性及其功能：

- key：用于标识 Switch 的键，通常用 GlobalKey 创建。
- value：表示开关的当前状态，true 表示打开，false 表示关闭。
- onChanged：当开关的状态发生改变时调用的回调函数。此函数接收一个布尔值参数，表示开关的新状态。
- activeColor：定义开关打开状态时的颜色。
- inactiveThumbColor：定义开关关闭状态时滑块的颜色。
- inactiveTrackColor：定义开关关闭状态时轨道的颜色。

### Switch用法

```dart
bool _isSwitched = false;

Switch(
  value: _isSwitched,
  onChanged: (value) {
    setState(() {
      _isSwitched = value;
    });
  },
)
```

### Switch使用场景

Switch 适用于以下场景：

- 在用户界面中实现开关功能，如打开/关闭通知、切换设置等。
- 用于开关某些功能的状态，例如在夜间模式和白天模式之间切换。

### Switch注意事项

- 当使用 Switch 时，确保提供一个合适的 onChanged 回调函数来处理状态变化。
- 请确保在需要使用 Switch 的地方向用户提供足够的上下文，以便他们理解开关的作用。

## 复选框（Checkbox）

Checkbox 是 Flutter 中的一个小部件，用于创建一个复选框，允许用户从多个选项中选择一个或多个。以下是关于 Checkbox 的详细介绍，包括其属性、功能、用法、使用场景、示例和注意事项。

### Checkbox属性及功能

以下是 Checkbox 的主要属性及其功能：

- key：用于标识 Checkbox 的键，通常用 GlobalKey 创建。
- value：表示复选框的当前状态，true 表示选中，false 表示未选中。
- onChanged：当复选框的状态发生改变时调用的回调函数。此函数接收一个布尔值参数，表示复选框的新状态。
- activeColor：定义复选框选中状态时的颜色。
- checkColor：定义复选框图标的颜色。

### Checkbox用法

```dart
bool _isChecked = false;

Checkbox(
  value: _isChecked,
  onChanged: (value) {
    setState(() {
      _isChecked = value;
    });
  },
)
```

### Checkbox使用场景

Checkbox 适用于以下场景：

- 在用户界面中实现多选功能，如选择多个项目、确认多个操作等。
- 用于开启/关闭一些特定选项。

### Checkbox注意事项

- 当使用 Checkbox 时，请确保提供一个合适的 onChanged 回调函数来处理状态变化。
- 请确保在需要使用 Checkbox 的地方向用户提供足够的上下文，以便他们理解复选框的作用。
