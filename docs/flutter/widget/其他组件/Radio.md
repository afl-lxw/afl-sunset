# Radio

Radio 是 Flutter 中用于创建单选按钮的小部件，它用于在多个选项中选择一个选项。通常与 RadioListTile 结合使用，可以轻松地构建单选列表。

## 属性

以下是 Radio 的一些常用属性

- value: 与 groupValue 对应的值，当该 Radio 被选中时，groupValue 将被设置为此值。
- groupValue: 一组 Radio 中的当前选中值。
- onChanged: 当选中状态发生变化时的回调函数。
- activeColor: 选中状态的颜色。
- focusColor: 获取焦点时的颜色。
- hoverColor: 悬停时的颜色。
- materialTapTargetSize: 指定按钮的大小，可以是 padded 或 shrinkWrap。

## 功能

- 提供了单选按钮的功能，允许用户在多个选项中选择一个。
- 通过与 RadioListTile 结合使用，可以方便地创建单选列表。

## 用法

- Radio 通常用于与一组选项一起使用，让用户从中选择一个选项。

## 使用场景

- 在需要用户从多个选项中选择一个的场景，例如性别选择、喜好选择等。
- 适用于表单中的单选项。

## 注意事项

- Radio 必须与一组选项一起使用，因此需要设置 groupValue 和 value，并通过 onChanged 来处理选中状态的变化。
- 如果需要创建单选列表，最好使用 RadioListTile，它包含了更多的布局和样式。

## 示例

以下示例展示了如何使用 Radio 和 RadioListTile 来创建一个单选列表

```dart
class GenderSelection extends StatefulWidget {
  @override
  _GenderSelectionState createState() =>_GenderSelectionState();
}

class _GenderSelectionState extends State<GenderSelection> {
String_selectedGender = '';

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        RadioListTile<String>(
          title: Text('Male'),
          value: 'male',
          groupValue: _selectedGender,
          onChanged: (value) {
            setState(() {
              _selectedGender = value!;
            });
          },
        ),
        RadioListTile<String>(
          title: Text('Female'),
          value: 'female',
          groupValue: _selectedGender,
          onChanged: (value) {
            setState(() {
              _selectedGender = value!;
            });
          },
        ),
      ],
    );
  }
}
```

在上面的示例中，使用了两个 RadioListTile 来构建一个性别选择列表。根据选中的性别，_selectedGender 的值会发生变化。
