# AnimatedPhysicalModel(动画物理模型)

AnimatedPhysicalModel 是一个可以在不同状态之间平滑过渡的小部件，它在物理模型上应用阴影和裁剪效果。通过使用此小部件，您可以在状态之间创建更平滑的动画过渡，如更改阴影、颜色、边框和裁剪等。

```dart
  const AnimatedPhysicalModel({
    super.key,
    required this.child,
    required this.shape,
    this.clipBehavior = Clip.none,
    this.borderRadius = BorderRadius.zero,
    required this.elevation,
    required this.color,
    this.animateColor = true,
    required this.shadowColor,
    this.animateShadowColor = true,
    super.curve,
    required super.duration,
    super.onEnd,
  })
```

## 属性和功能

- child: 小部件的子元素。
- borderRadius: 用于物理模型的边框半径。
- elevation: 高程，用于设置阴影的大小。
- color: 物理模型的颜色。
- shape: 物理模型的形状，可以是 BoxShape.circle 或 BoxShape.rectangle。
- shadowColor: 阴影的颜色。
- animateColor: 是否在颜色改变时进行动画。
- animateShadowColor: 是否在阴影颜色改变时进行动画。

## 用法

AnimatedPhysicalModel 可以在需要平滑过渡物理模型属性的场景中使用，例如按钮点击后的阴影变化，图像边框的过渡效果等。

## 注意事项

- 尽量避免在性能敏感的地方频繁使用 AnimatedPhysicalModel，因为它可能会带来一些性能开销。
- 考虑在动画时长和过渡效果的选择上，以确保过渡看起来自然而平滑。

## 以下是一个使用 AnimatedPhysicalModel 的示例

```dart
class PhysicalModelExample extends StatefulWidget {
  @override
  _PhysicalModelExampleState createState() =>_PhysicalModelExampleState();
}

class _PhysicalModelExampleState extends State<PhysicalModelExample> {
bool_isPressed = false;

  void _togglePress() {
    setState(() {
      _isPressed = !_isPressed;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Physical Model Example'),
      ),
      body: Center(
        child: AnimatedPhysicalModel(
          duration: Duration(milliseconds: 500),
          shape: BoxShape.rectangle,
          elevation: _isPressed ? 10 : 4,
          color: Colors.blue,
          shadowColor: Colors.black,
          animateColor: false,
          animateShadowColor: true,
          borderRadius: BorderRadius.circular(_isPressed ? 20 : 8),
          child: InkWell(
            onTap: _togglePress,
            child: Container(
              width: 200,
              height: 100,
              alignment: Alignment.center,
              child: Text(
                'Press Me',
                style: TextStyle(color: Colors.white),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
```

在上面的示例中，点击 "Press Me" 容器会产生阴影和圆角的平滑动画效果。阴影和圆角的改变在点击时会有平滑过渡，而不是突然改变。
