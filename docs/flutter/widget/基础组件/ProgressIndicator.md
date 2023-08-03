# 进度指示器（ProgressIndicator）

ProgressIndicator 是 Flutter 中用于显示进度的小部件。它可以是圆形的或线性的，用于展示任务的完成进度。

- [CircularProgressIndicator](##CircularProgressIndicator)
- [LinearProgressIndicator](#LinearProgressIndicator)

## CircularProgressIndicator

### CircularProgressIndicator属性及功能

以下是 CircularProgressIndicator 的主要属性及其功能：

- key：用于标识 CircularProgressIndicator 的键，通常用 GlobalKey 创建。
- value：表示当前进度的值，取值范围在 0 到 1 之间。当 value 为 null 时，表示进度指示器处于不确定状态。
- backgroundColor：指示器的背景颜色。
- color：指示器的颜色。
- strokeWidth：指示器的圆圈线条宽度。
- valueColor：用于指定进度的颜色。如果 valueColor 未指定，将使用 color 属性的值。
- semanticsLabel：用于屏幕阅读器的标签，用于描述进度的内容。
- semanticsValue：用于屏幕阅读器的值，用于描述进度的百分比。

### CircularProgressIndicator用法

```dart
CircularProgressIndicator(
  value: 0.7,
  backgroundColor: Colors.grey,
  color: Colors.blue,
  strokeWidth: 5.0,
)
```

### CircularProgressIndicator使用场景

CircularProgressIndicator 适用于以下场景：

- 当需要显示任务的加载进度时，例如文件下载、网络请求、图片加载等。
- 在用户等待任务完成时，提供一个可视的进度反馈。

### CircularProgressIndicator注意事项

- 当使用 CircularProgressIndicator 时，请确保根据任务的实际进度更新 value 属性。
- 根据情况选择合适的进度颜色和线条宽度。
- 考虑使用语义标签来提供进度信息，以使屏幕阅读器用户能够了解进度状态。
- 在显示进度指示器时，尽量避免阻塞用户界面，以保持用户体验流畅。

### CircularProgressIndicator示例

以下是一个简单示例，展示了如何使用 CircularProgressIndicator 来显示任务的加载进度：

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: CircularProgressIndicatorExample(),
    );
  }
}

class CircularProgressIndicatorExample extends StatefulWidget {
  @override
  _CircularProgressIndicatorExampleState createState() =>
      _CircularProgressIndicatorExampleState();
}

class _CircularProgressIndicatorExampleState
    extends State<CircularProgressIndicatorExample> {
double_progressValue = 0.5;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('CircularProgressIndicator Example')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            CircularProgressIndicator(
              value: _progressValue,
              backgroundColor: Colors.grey,
              color: Colors.blue,
              strokeWidth: 8.0,
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                setState(() {
                  _progressValue = _progressValue + 0.1;
                  if (_progressValue > 1.0) {
                    _progressValue = 0.0;
                  }
                });
              },
              child: Text('Increase Progress'),
            ),
          ],
        ),
      ),
    );
  }
}
```

在这个示例中，我们使用 CircularProgressIndicator 来显示任务的加载进度，通过点击按钮逐步增加进度值。

## LinearProgressIndicator

LinearProgressIndicator 是 Flutter 中用于显示线性进度的小部件。它通常用于显示任务的加载进度。以下是关于 LinearProgressIndicator 的详细介绍，包括其属性、功能、用法、使用场景、示例和注意事项。

### LinearProgressIndicator属性及功能

以下是 LinearProgressIndicator 的主要属性及其功能：

- key：用于标识 LinearProgressIndicator 的键，通常用 GlobalKey 创建。
- value：表示当前进度的值，取值范围在 0 到 1 之间。当 value 为 null 时，表示进度指示器处于不确定状态。
- backgroundColor：指示器的背景颜色。
- color：指示器的颜色。
- valueColor：用于指定进度的颜色。如果 valueColor 未指定，将使用 color 属性的值。
- minHeight：指示器的最小高度。

### LinearProgressIndicator用法

```dart
LinearProgressIndicator(
  value: 0.7,
  backgroundColor: Colors.grey,
  color: Colors.blue,
)
```

### LinearProgressIndicator使用场景

LinearProgressIndicator 适用于以下场景：

- 当需要显示任务的加载进度时，例如文件下载、网络请求、图片加载等。
- 在用户等待任务完成时，提供一个可视的进度反馈。

### LinearProgressIndicator注意事项

- 当使用 LinearProgressIndicator 时，请确保根据任务的实际进度更新 value 属性。
= 根据情况选择合适的进度颜色和高度。
- 在显示进度指示器时，尽量避免阻塞用户界面，以保持用户体验流畅。

### LinearProgressIndicator示例

以下是一个简单示例，展示了如何使用 LinearProgressIndicator 来显示任务的加载进度：

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: LinearProgressIndicatorExample(),
    );
  }
}

class LinearProgressIndicatorExample extends StatefulWidget {
  @override
  _LinearProgressIndicatorExampleState createState() =>
      _LinearProgressIndicatorExampleState();
}

class _LinearProgressIndicatorExampleState
    extends State<LinearProgressIndicatorExample> {
double_progressValue = 0.5;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('LinearProgressIndicator Example')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            LinearProgressIndicator(
              value: _progressValue,
              backgroundColor: Colors.grey,
              color: Colors.blue,
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                setState(() {
                  _progressValue = _progressValue + 0.1;
                  if (_progressValue > 1.0) {
                    _progressValue = 0.0;
                  }
                });
              },
              child: Text('Increase Progress'),
            ),
          ],
        ),
      ),
    );
  }
}
```

在这个示例中，我们使用 LinearProgressIndicator 来显示任务的加载进度，通过点击按钮逐步增加进度值。
