# AnimatedSize(动画大小)

AnimatedSize 是一个可以在不同大小之间平滑过渡的小部件，它通过动画的方式改变其子元素的大小。通过使用此小部件，您可以在状态之间创建更平滑的动画过渡，如更改容器的大小、文本的字体大小等。

```dart
  const AnimatedSize({
    super.key,
    this.child,
    this.alignment = Alignment.center,
    this.curve = Curves.linear,
    required this.duration,
    this.reverseDuration,
    @Deprecated(
      'This field is now ignored. '
      'This feature was deprecated after v2.2.0-10.1.pre.'
    )
    TickerProvider? vsync,
    this.clipBehavior = Clip.hardEdge,
  }) 
```

## 属性和功能

- child: 小部件的子元素。
- alignment: 子元素的对齐方式，默认是 Alignment.center。
- curve: 动画的插值曲线，默认是 Curves.linear。
- duration: 动画的持续时间。
- vsync: 用于同步动画的 TickerProvider，通常使用 SingleTickerProviderStateMixin。
- reverseDuration: 反向动画的持续时间。

## 用法

AnimatedSize 可以在需要平滑过渡大小的场景中使用，如切换视图、调整文本大小、图像大小等。

## 使用场景

- 当视图大小需要平滑过渡时，可以使用 AnimatedSize 创建更加自然的动画效果。
- 在动画切换时，通过改变子元素的大小来创建更丰富的动画效果。

## 以下是一个使用 AnimatedSize 的示例

```dart
class SizeAnimationExample extends StatefulWidget {
  @override
  _SizeAnimationExampleState createState() =>_SizeAnimationExampleState();
}

class _SizeAnimationExampleState extends State<SizeAnimationExample> {
bool_isExpanded = false;

  void _toggleSize() {
    setState(() {
      _isExpanded = !_isExpanded;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Size Animation Example'),
      ),
      body: Center(
        child: GestureDetector(
          onTap: _toggleSize,
          child: AnimatedSize(
            vsync: this,
            duration: Duration(milliseconds: 500),
            curve: Curves.easeInOut,
            child: Container(
              width:_isExpanded ? 200 : 100,
              height: _isExpanded ? 200 : 100,
              color: Colors.blue,
              alignment: Alignment.center,
              child: Text(
                _isExpanded ? 'Expanded' : 'Collapsed',
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

在上面的示例中，点击容器会产生平滑的大小过渡效果。容器的大小从初始大小（100x100）平滑地过渡到展开的大小（200x200）。
