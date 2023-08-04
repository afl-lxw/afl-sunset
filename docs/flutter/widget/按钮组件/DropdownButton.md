# DropdownButton

DropdownButton 是一个用于创建下拉菜单（选择框）的小部件，允许用户从一组选项中选择一个值。它在用户界面中常用于显示多个选项，用户可以点击下拉按钮选择一个选项。

- 继承关系
  - Object > Diagnosticable > DiagnosticableTree > Widget > StatefulWidget > DropdownButton

```dart
 DropdownButton({
    super.key,
    required this.items,
    this.selectedItemBuilder,
    this.value,
    this.hint,
    this.disabledHint,
    required this.onChanged,
    this.onTap,
    this.elevation = 8,
    this.style,
    this.underline,
    this.icon,
    this.iconDisabledColor,
    this.iconEnabledColor,
    this.iconSize = 24.0,
    this.isDense = false,
    this.isExpanded = false,
    this.itemHeight = kMinInteractiveDimension,
    this.focusColor,
    this.focusNode,
    this.autofocus = false,
    this.dropdownColor,
    this.menuMaxHeight,
    this.enableFeedback,
    this.alignment = AlignmentDirectional.centerStart,
    this.borderRadius,
    // When adding new arguments, consider adding similar arguments to
    // DropdownButtonFormField.
  })
```

## 属性和功能

DropdownButton 有以下常用属性和功能：

- items：设置下拉菜单中的选项，通常使用 DropdownMenuItem 构建。
- value：设置当前选中的值。
- hint：设置未选择任何选项时显示的提示文本。
- disabledHint：设置下拉菜单禁用时显示的提示文本。
- onChanged：设置选中某个选项时的回调函数。
- elevation：设置下拉菜单的阴影高度。
- style：设置下拉菜单的样式。
- icon：设置下拉按钮上的图标。
- isExpanded：设置下拉菜单是否占据父容器的宽度。
- itemHeight：设置下拉菜单中每个选项的高度。

## 用法和使用场景

- DropdownButton 主要用于显示多个选项供用户选择，常见的使用场景包括设置页面、表单、筛选条件等。它可以提供用户友好的界面，使得选择某个选项变得更加方便。

## 示例和注意事项

以下是一个使用 DropdownButton 的示例：

```dart
String selectedValue = 'Option 1';

DropdownButton<String>(
  value: selectedValue,
  onChanged: (newValue) {
    setState(() {
      selectedValue = newValue!;
    });
  },
  items: [
    DropdownMenuItem(value: 'Option 1', child: Text('Option 1')),
    DropdownMenuItem(value: 'Option 2', child: Text('Option 2')),
    DropdownMenuItem(value: 'Option 3', child: Text('Option 3')),
  ],
)
```

## 注意事项

- 选项的数量和长度不宜过多，过多的选项可能导致下拉菜单过长，影响用户体验。
- DropdownButton 的样式可以通过 style 属性进行调整，以适应不同的设计要求。
- 通过设置 value 和 onChanged 属性，可以实现选中某个选项时的回调和状态更新。
- DropdownButton 不支持自定义子部件作为选项，通常使用 DropdownMenuItem 来创建选项。
- 总之，DropdownButton 是一个方便的小部件，用于在 Flutter 中创建下拉菜单供用户选择。通过设置不同的属性，可以实现不同样式和功能的下拉菜单。
