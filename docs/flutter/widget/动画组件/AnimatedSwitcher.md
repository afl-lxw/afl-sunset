# AnimatedSwitcher

AnimatedSwitcher 是一个小部件，用于在不同的子元素之间进行动画过渡。它可以在切换子元素时添加淡入淡出、缩放等过渡动画，从而在视觉上增强切换效果。

```dart
  const AnimatedSwitcher({
    super.key,
    this.child,
    required this.duration,
    this.reverseDuration,
    this.switchInCurve = Curves.linear,
    this.switchOutCurve = Curves.linear,
    this.transitionBuilder = AnimatedSwitcher.defaultTransitionBuilder,
    this.layoutBuilder = AnimatedSwitcher.defaultLayoutBuilder,
  })
```

## 属性和功能

- child: 当前显示的子元素。
- duration: 动画的持续时间。
- switchInCurve: 切换进入时的动画插值曲线，默认为 Curves.linear。
- switchOutCurve: 切换退出时的动画插值曲线，默认为 Curves.linear。
- transitionBuilder: 用于自定义切换动画的构建器函数，默认是一个渐变过渡动画。
- layoutBuilder: 用于自定义子元素的布局方式，默认是一个简单的 Stack 布局。

## 用法

- AnimatedSwitcher 可以用于需要在不同视图之间切换时添加过渡动画的场景，例如显示不同的文本、图像、小部件等。

## 使用场景

- 在切换子元素时添加淡入淡出、缩放等动画。
- 创建更平滑的切换效果，以增强用户体验。

## 以下是一个使用 AnimatedSwitcher 的示例

```dart
class SwitcherExample extends StatefulWidget {
  @override
  _SwitcherExampleState createState() => _SwitcherExampleState();
}

class _SwitcherExampleState extends State<SwitcherExample> {
  int _currentIndex = 0;
  List<Color> _colors = [Colors.red, Colors.blue, Colors.green];

  void _changeColor() {
    setState(() {
      _currentIndex = (_currentIndex + 1) % _colors.length;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Switcher Example'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            AnimatedSwitcher(
              duration: Duration(milliseconds: 500),
              transitionBuilder: (child, animation) {
                return ScaleTransition(
                  scale: animation,
                  child: child,
                );
              },
              child: Container(
                key: ValueKey<int>(_currentIndex),
                width: 200,
                height: 200,
                color: _colors[_currentIndex],
                alignment: Alignment.center,
                child: Text(
                  'Color ${_currentIndex + 1}',
                  style: TextStyle(color: Colors.white),
                ),
              ),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: _changeColor,
              child: Text('Change Color'),
            ),
          ],
        ),
      ),
    );
  }
}
```
