# showModalBottomSheet

以下是该方法的主要参数：

```dart
Future<T?> showModalBottomSheet<T>({
  required BuildContext context,
  bool isScrollControlled = false,
  bool useRootNavigator = false,
  bool isDismissible = true,
  bool enableDrag = true,
  Clip clipBehavior = Clip.none,
  Color? backgroundColor,
  ShapeBorder? shape,
  AnimationController? transitionAnimationController,
  Duration? transitionDuration,
  RouteSettings? routeSettings,
  required WidgetBuilder builder,
})
```

下面是一些主要参数的解释：

- context: 上下文对象，表示当前应用的状态。
- isScrollControlled: 一个布尔值，表示底部弹出框是否应该占用整个屏幕高度，可以滚动。
- useRootNavigator: 一个布尔值，表示是否使用根导航器。默认情况下，会使用最近的Navigator对象。
- isDismissible: 一个布尔值，表示是否可以通过点击弹出框之外的区域来关闭底部弹出框。
- enableDrag: 一个布尔值，表示是否可以通过上滑手势关闭底部弹出框。
- clipBehavior: 定义底部弹出框的剪辑行为。
- backgroundColor: 底部弹出框的背景颜色。
- shape: 底部弹出框的形状。
- transitionAnimationController: 控制底部弹出框过渡动画的AnimationController。
- transitionDuration: 过渡动画的持续时间。
- routeSettings: 底部弹出框的路由设置。
- builder: 一个WidgetBuilder，用于构建底部弹出框的内容。
下面是一个使用showModalBottomSheet的完整案例：

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Modal Bottom Sheet Example'),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            // 显示底部弹出框
            showModalBottomSheet(
              context: context,
              builder: (BuildContext context) {
                return Container(
                  padding: EdgeInsets.all(16.0),
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: <Widget>[
                      ListTile(
                        title: Text('Option 1'),
                        onTap: () {
                          // 处理选项1的逻辑
                          Navigator.pop(context);
                        },
                      ),
                      ListTile(
                        title: Text('Option 2'),
                        onTap: () {
                          // 处理选项2的逻辑
                          Navigator.pop(context);
                        },
                      ),
                    ],
                  ),
                );
              },
            );
          },
          child: Text('Show Modal Bottom Sheet'),
        ),
      ),
    );
  }
}
```

在这个例子中，我们创建了一个简单的Flutter应用，包含一个按钮。当用户点击按钮时，会调用showModalBottomSheet来显示一个包含两个选项的底部弹出框。用户可以选择其中一个选项，然后底部弹出框会关闭。
