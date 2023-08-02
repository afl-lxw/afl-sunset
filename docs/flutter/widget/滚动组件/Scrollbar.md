# Scrollbar

> Scrollbar 是 Flutter 中用于在滚动视图上显示滚动条的小部件，它可以在滚动内容较长时，让用户知道当前滚动的位置，并且可以通过点击或拖动滚动条来实现快速滚动。

## 用法

```dart
Scrollbar(
  child: <Widget>[
    // 子部件，通常是一个滚动视图，如 ListView、GridView 等
  ],
)
```

## 属性及功能

1.child（Widget）：子部件。
功能：设置需要添加滚动条的子部件，通常是一个滚动视图，如 ListView、GridView 等。

2.controller：滚动控制器。
功能：设置一个滚动控制器，用于控制与滚动条关联的滚动视图。

## 使用场景

- 当滚动内容较长时，用于显示滚动条，让用户可以快速了解当前滚动的位置。
- 在需要支持快速滚动操作的场景中，例如需要快速滚动到页面顶部或底部。

## 注意事项

- Scrollbar 通常用于嵌套在需要滚动的内容内部，以实现滚动条的显示。
- 由于 Scrollbar 会增加滚动视图的高度，所以在使用时要考虑滚动条的高度对布局的影响。

## 示例

以下是一个示例，展示如何使用 Scrollbar 在一个 ListView 中显示滚动条：

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: MyScrollPage(),
    );
  }
}

class MyScrollPage extends StatelessWidget {
  final List<String> items = List.generate(30, (index) => 'Item ${index + 1}');

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Scrollbar Example'),
      ),
      body: Scrollbar(
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

在这个示例中，我们使用 Scrollbar 在一个 ListView 中显示滚动条。用户可以通过拖动滚动条或点击滚动条来实现快速滚动。
