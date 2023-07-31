# Row、Column

## Row

Row是Flutter中的一个布局小部件，用于在水平方向上排列其子小部件。Row可以让子小部件水平排列，根据需要自动调整其大小，使其适应可用空间。

```dart
  Row({
    super.key,
    super.mainAxisAlignment,
    super.mainAxisSize,
    super.crossAxisAlignment,
    super.textDirection,
    super.verticalDirection,
    super.textBaseline, // NO DEFAULT: we don't know what the text's baseline should be
    super.children,
  })
```

### 下面是Row的常用属性及其功能

- mainAxisAlignment（MainAxisAlignment）：控制子小部件在主轴（水平轴）方向上的对齐方式。常见的值有MainAxisAlignment.start（默认值，左对齐）、MainAxisAlignment.center（居中对齐）、MainAxisAlignment.end（右对齐）、MainAxisAlignment.spaceBetween（平均分布）、MainAxisAlignment.spaceAround（子小部件两侧留有间隔）等。
- crossAxisAlignment（CrossAxisAlignment）：控制子小部件在交叉轴（垂直轴）方向上的对齐方式。常见的值有CrossAxisAlignment.start（默认值，顶部对齐）、CrossAxisAlignment.center（居中对齐）、CrossAxisAlignment.end（底部对齐）、CrossAxisAlignment.stretch（填充交叉轴）、CrossAxisAlignment.baseline（基线对齐）等。

- mainAxisSize（MainAxisSize）：控制Row在主轴方向上的尺寸。常见的值有MainAxisSize.min（子小部件的宽度由子小部件决定）、MainAxisSize.max（尽可能扩展以填充可用空间）。

- textDirection（TextDirection）：控制Row内文本的方向。默认为TextDirection.ltr（从左到右）。

- verticalDirection（VerticalDirection）：控制子小部件的布局顺序，特别是在垂直方向上。常见的值有VerticalDirection.down（从上到下）、VerticalDirection.up（从下到上）。

- children：Row的子小部件列表。

下面是一个示例代码，演示了Row的用法和部分属性：

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Row Example')),
        body: Center(
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Container(
                width: 50,
                height: 50,
                color: Colors.red,
              ),
              Container(
                width: 50,
                height: 100,
                color: Colors.green,
              ),
              Container(
                width: 50,
                height: 75,
                color: Colors.blue,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

在上面的示例中，我们创建了一个Row，其中包含了三个不同颜色的Container子小部件。通过设置mainAxisAlignment为MainAxisAlignment.spaceEvenly，这三个子小部件会平均分布在Row中。通过设置crossAxisAlignment为CrossAxisAlignment.center，这三个子小部件会在交叉轴方向上居中对齐。

### 注意事项

- 当Row的子小部件超出屏幕范围时，可能会导致溢出错误。可以使用ListView等组件来处理这种情况。
- 当Row的子小部件宽度和高度不一致时，可以使用Expanded或Flexible来让子小部件根据可用空间进行扩展。
- 在使用Row时，特别是在水平空间有限的情况下，要注意子小部件的尺寸和布局，以避免溢出或不必要的间隔。
- 如果需要在主轴方向上对子小部件进行相对定位，可以使用Positioned或Align等组件来

## Column

Column是Flutter中的一个布局小部件，用于在垂直方向上排列其子小部件。Column可以让子小部件垂直排列，根据需要自动调整其大小，使其适应可用空间。

```dart
  Column({
    super.key,
    super.mainAxisAlignment,
    super.mainAxisSize,
    super.crossAxisAlignment,
    super.textDirection,
    super.verticalDirection,
    super.textBaseline, // NO DEFAULT: we don't know what the text's baseline should be
    List<Widget> children = const <Widget>[],
  })
```

### 下面是Column的常用属性及其功能

- mainAxisAlignment（MainAxisAlignment）：控制子小部件在主轴（垂直轴）方向上的对齐方式。常见的值有MainAxisAlignment.start（默认值，顶部对齐）、MainAxisAlignment.center（居中对齐）、MainAxisAlignment.end（底部对齐）、MainAxisAlignment.spaceBetween（平均分布）、MainAxisAlignment.spaceAround（子小部件两侧留有间隔）等。

- crossAxisAlignment（CrossAxisAlignment）：控制子小部件在交叉轴（水平轴）方向上的对齐方式。常见的值有CrossAxisAlignment.start（默认值，左对齐）、CrossAxisAlignment.center（居中对齐）、CrossAxisAlignment.end（右对齐）、CrossAxisAlignment.stretch（填充交叉轴）、CrossAxisAlignment.baseline（基线对齐）等。

- mainAxisSize（MainAxisSize）：控制Column在主轴方向上的尺寸。常见的值有MainAxisSize.min（子小部件的高度由子小部件决定）、MainAxisSize.max（尽可能扩展以填充可用空间）。

- textDirection（TextDirection）：控制Column内文本的方向。默认为TextDirection.ltr（从左到右）。

- verticalDirection（VerticalDirection）：控制子小部件的布局顺序，特别是在垂直方向上。常见的值有VerticalDirection.down（从上到下）、VerticalDirection.up（从下到上）。

- children：Column的子小部件列表。

### 下面是一个示例代码，演示了Column的用法和部分属性

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Column Example')),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Container(
                width: 50,
                height: 50,
                color: Colors.red,
              ),
              Container(
                width: 100,
                height: 50,
                color: Colors.green,
              ),
              Container(
                width: 75,
                height: 50,
                color: Colors.blue,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

在上面的示例中，我们创建了一个Column，其中包含了三个不同颜色的Container子小部件。通过设置mainAxisAlignment为MainAxisAlignment.spaceEvenly，这三个子小部件会在Column中平均分布。通过设置crossAxisAlignment为CrossAxisAlignment.center，这三个子小部件会在交叉轴方向上居中对齐。

### 注意事项：

- 当Column的子小部件超出屏幕范围时，可能会导致溢出错误。可以使用ListView等组件来处理这种情况。
- 当Column的子小部件宽度和高度不一致时，可以使用Expanded或Flexible来让子小部件根据可用空间进行扩展。
- 在使用Column时，特别是在垂直空间有限的情况下，要注意子小部件的尺寸和布局，以避免溢出或不必要的间隔。
- 如果需要在主轴方向上对子小部件进行相对定位，可以使用Positioned或Align等组件来调整子小部件的位置。
