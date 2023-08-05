---
pageClass: custom-page-imgs-class
---
# RefreshIndicator

> RefreshIndicator 是 Flutter 中用于实现下拉刷新效果的小部件，它可以在一个滚动视图中添加一个顶部的刷新指示器，用户可以通过下拉来触发刷新操作。

## 用法

```dart
RefreshIndicator(
  onRefresh: () async {
    // 执行刷新操作
  },
  child: <Widget>[
    // 子部件，通常是一个滚动视图，如 ListView、GridView 等
  ],
)
```

## 属性及功能

1. onRefresh：刷新回调函数。
功能：设置下拉刷新时的回调函数，通常在这里执行刷新操作。

2. child（Widget）：子部件。
功能：设置需要添加刷新指示器的子部件，通常是一个滚动视图，如 ListView、GridView 等。

3.displacement（double）：刷新指示器的位移。
功能：设置刷新指示器相对于滚动视图的位移，通常设置为正数。

4.color：指示器颜色。
功能：设置刷新指示器的颜色，通常是一个主题色。

5.backgroundColor：背景颜色。
功能：设置刷新指示器的背景颜色。

## 使用场景

- 实现下拉刷新功能，让用户可以通过下拉滚动视图来刷新内容。
- 在列表或网格视图中添加下拉刷新效果，实现数据的实时更新。

## 注意事项

- onRefresh 中通常执行异步操作，例如网络请求等，刷新完成后需要调用 refreshIndicatorKey.currentState?.refreshCompleted() 来标记刷新完成。
- 如果不设置 child，RefreshIndicator 会自动创建一个 ListView 作为子部件。
- displacement 设置的值应适当，以保证刷新指示器能够在视图中正常显示。

## 示例

下面是一个示例，展示如何使用 RefreshIndicator 来实现下拉刷新功能：

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: MyRefreshPage(),
    );
  }
}

class MyRefreshPage extends StatefulWidget {
  @override
  _MyRefreshPageState createState() =>_MyRefreshPageState();
}

class _MyRefreshPageState extends State<MyRefreshPage> {
  List<String> items = List.generate(20, (index) => 'Item ${index + 1}');

  Future<void> _refreshData() async {
    // 模拟网络请求
    await Future.delayed(Duration(seconds: 2));
    setState(() {
      items = List.generate(20, (index) => 'New Item ${index + 1}');
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('RefreshIndicator Example'),
      ),
      body: RefreshIndicator(
        onRefresh: _refreshData,
        child: ListView.builder(
          itemCount: items.length,
          itemBuilder: (context, index) {
            return ListTile(
              title: Text(items[index]),
            );
          },
        ),
      ),
    );
  }
}
```

如图

![RefreshIndicatorWidget](./imgs/RefreshIndicatorWidget.gif)

在这个示例中，我们使用 RefreshIndicator 创建一个下拉刷新效果。在_refreshData 函数中模拟网络请求，并在刷新完成后更新列表数据。用户可以通过下拉刷新来更新列表内容。
