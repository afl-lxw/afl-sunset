# RotationTransition

RotationTransition 是 Flutter 中用于实现旋转动画的一个组件。它可以在一个子部件上应用旋转动画，并根据提供的动画进行旋转。

```dart
  const RotationTransition({
    super.key,
    required Animation<double> turns,
    this.alignment = Alignment.center,
    this.filterQuality,
    this.child,
  })
```

## 属性和功能

- turns: 一个 `Animation<double>` 类型的属性，表示旋转的角度。当 turns 的值为0时，子部件不会旋转；为1时，子部件会旋转一个完整的360度。
- alignment: 用于指定旋转中心的对齐方式，默认为 Alignment.center，表示中心对齐。
- child: 要应用旋转动画的子部件。

## 用法

RotationTransition 可以用于为一个部件添加旋转动画效果。通常配合 AnimationController 和 Tween 使用，可以实现在一段时间内旋转部件。

## 使用场景

- 当你想要为一个部件添加旋转动画时，比如在用户交互、状态变化等情况下。
- 在设计动态和生动的用户界面时，可以使用旋转动画来增强交互体验。

## 示例

```dart
AnimationController _controller;
Animation<double>_animation;

@override
void initState() {
  super.initState();
  _controller = AnimationController(
    vsync: this,
    duration: Duration(seconds: 2),
  )..repeat(reverse: true);

  _animation =_controller.drive(
    Tween<double>(
      begin: 0,
      end: 1,
    ),
  );
}

@override
Widget build(BuildContext context) {
  return Scaffold(
    appBar: AppBar(title: Text('RotationTransition Example')),
    body: Center(
      child: RotationTransition(
        turns: _animation,
        child: Container(
          width: 100,
          height: 100,
          color: Colors.blue,
        ),
      ),
    ),
  );
}
```

## 注意事项

RotationTransition 中的 turns 属性的值是一个 `Animation<double>`，所以需要配合 AnimationController 和 Tween 使用。
当使用 RotationTransition 时，要确保给定的动画范围在 0 到 1 之间，否则可能导致旋转超过360度，影响动画效果。
