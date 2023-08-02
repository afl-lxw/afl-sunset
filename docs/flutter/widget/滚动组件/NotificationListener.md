# NotificationListener

NotificationListener 是 Flutter 中用于监听通知的小部件，它可以用来监听子树中发出的通知并做出相应的处理。通知是一个非常重要的概念，它用于在小部件之间传递信息，例如滚动通知、焦点通知等。

## 用法

```dart
NotificationListener<NotificationType>(
  onNotification: (notification) {
    // 处理通知
    return true; // 是否阻止冒泡
  },
  child: <Widget>[
    // 子部件
  ],
)
```

## 属性及功能

1. onNotification：通知回调函数。
功能：监听指定类型的通知，当通知被派发时调用该回调函数。返回值为 true 时表示阻止通知继续冒泡。

2.child（Widget）：子部件。
功能：设置需要监听通知的子树。

## 使用场景

- 监听滚动事件，用于处理滚动的情况，例如滚动到顶部或底部时触发特定操作。
- 监听焦点事件，用于处理焦点的变化，例如在输入框中监听焦点变化来执行不同的操作。
- 在小部件之间传递自定义的通知，实现自定义的通信机制。

## 注意事项

- 通知是一种类似事件的机制，需要在适当的情况下使用，不应滥用。
- 在 onNotification 回调中处理通知时，可以根据不同的通知类型进行相应的处理。
- 返回 true 时会阻止通知继续向上传递，注意控制冒泡行为，以免影响其他部件的正常行为。

## 示例

下面是一个示例，展示如何使用 NotificationListener 来监听滚动事件并执行相应的操作：

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
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: NotificationListener<ScrollNotification>(
        onNotification: (notification) {
          if (notification is ScrollEndNotification) {
            print('Scroll ended');
          }
          return true;
        },
        child: ListView.builder(
          itemCount: 20,
          itemBuilder: (context, index) {
            return ListTile(
              title: Text('Item $index'),
            );
          },
        ),
      ),
    );
  }
}
```

在这个示例中，我们使用 NotificationListener 监听滚动事件。在 onNotification 回调函数中，我们检查通知类型是否为 ScrollEndNotification，当滚动结束时打印相应的消息。注意，在 onNotification 中返回 true 来阻止通知继续冒泡。
