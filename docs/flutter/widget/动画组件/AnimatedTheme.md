# AnimatedTheme

AnimatedTheme 是一个小部件，用于在更改主题时添加动画过渡。它可以在应用主题属性发生变化时，通过添加动画来平滑地过渡到新的主题状态。

```dart
  const AnimatedTheme({
    super.key,
    required this.data,
    super.curve,
    super.duration = kThemeAnimationDuration,
    super.onEnd,
    required this.child,
  })
```

## 属性和功能

- data: 新的主题数据。
- isMaterialAppTheme: 指定是否将 data 当作 MaterialApp 的主题数据。
- duration: 动画的持续时间。
- child: 当前显示的子元素。

## 用法

- AnimatedTheme 可以在切换应用主题时添加过渡动画，以平滑过渡到新的主题状态。

## 使用场景

- 在切换应用主题时添加动画，使主题切换更加平滑。
- 增强用户体验，使主题切换时不会突然改变。

## 以下是一个使用 AnimatedTheme 的示例

```dart
class ThemeExample extends StatefulWidget {
  @override
  _ThemeExampleState createState() =>_ThemeExampleState();
}

class _ThemeExampleState extends State<ThemeExample> {
bool_isDarkMode = false;

  void _toggleTheme() {
    setState(() {
      _isDarkMode = !_isDarkMode;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Theme Example',
      theme: _isDarkMode ? ThemeData.dark() : ThemeData.light(),
      home: Scaffold(
        appBar: AppBar(
          title: Text('AnimatedTheme Example'),
        ),
        body: Center(
          child: AnimatedTheme(
          data:_isDarkMode ? ThemeData.light() : ThemeData.dark(),
            duration: Duration(seconds: 1),
            child: Container(
              width: 200,
              height: 200,
              color: Theme.of(context).primaryColor,
              alignment: Alignment.center,
              child: Text(
                'Hello, Theme!',
                style: Theme.of(context).textTheme.headline6,
              ),
            ),
          ),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: _toggleTheme,
          child: Icon(Icons.color_lens),
        ),
      ),
    );
  }
}
```

在上面的示例中，点击浮动按钮可以切换应用的主题，使用 AnimatedTheme 来添加主题切换的过渡动画。注意，AnimatedTheme 中的 data 属性需要传入一个新的主题数据。同时，注意在使用 AnimatedTheme 时要确保传入的主题数据不是 null。
