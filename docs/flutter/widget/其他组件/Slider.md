# Slider

Slider 是 Flutter 中用于创建滑动条的小部件，允许用户在一个范围内选择一个值。滑动条通常用于在连续范围内调整数值，例如音量控制、亮度调节等。

## 属性

以下是 Slider 的一些常用属性

- value: 当前滑块的值，通常与 onChanged 一起使用。
- onChanged: 当滑块的值发生变化时的回调函数。
- min: 滑块的最小值。
- max: 滑块的最大值。
- divisions: 将滑块的值范围分成多少个部分，可以用于显示刻度。
- label: 在滑块周围显示的标签。
- activeColor: 滑块已选择部分的颜色。
- inactiveColor: 滑块未选择部分的颜色。

## 功能

- 提供了一个可滑动的控件，允许用户在指定范围内选择一个值。
- 可以使用 divisions 设置刻度，方便用户精确选择值。
- 可以通过 label 在滑块周围显示标签，以显示当前值。

## 用法

- Slider 通常用于在用户界面上提供数值的可视化选择。它适用于需要用户从一个连续的范围内选择值的场景。

## 使用场景

- 在设置中调整音量、亮度等数值。
- 在调整时间范围、价格范围等连续值时使用。

## 注意事项

- 当使用 divisions 属性时，min、max 和 divisions 的值应该满足 (max - min) / divisions 是一个整数。
- 标签 label 的位置可以通过 SliderTheme 进行自定义。

## 示例

以下示例展示了如何使用 Slider 来创建一个音量控制器

```dart
class VolumeControl extends StatefulWidget {
  @override
  _VolumeControlState createState() =>_VolumeControlState();
}

class _VolumeControlState extends State<VolumeControl> {
double_currentVolume = 50.0;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Slider(
          value: _currentVolume,
          min: 0,
          max: 100,
          divisions: 10,
          onChanged: (value) {
            setState(() {
              _currentVolume = value;
            });
          },
        ),
        Text('Volume: $_currentVolume'),
      ],
    );
  }
}
```

在上面的示例中，使用 Slider 创建了一个音量控制器，用户可以通过滑动条来调整音量值。当前音量的值会在滑块下方显示。
