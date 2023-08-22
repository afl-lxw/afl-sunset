# RouteAware

RouteAware 是 Flutter 中的一个 mixin 类，用于监听路由（页面）变化的生命周期回调。通过实现 RouteAware，你可以在页面路由切换、进入和离开页面时执行相应的操作，比如进行页面统计、刷新、数据加载等。

## 作用

RouteAware 的作用是允许你监听页面路由（页面）变化的生命周期，以便在不同的页面状态下执行特定的操作。

## 示例

以下是一个示例，演示如何使用 RouteAware 在页面切换、进入和离开时执行相应的操作：

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      navigatorObservers: [MyRouteObserver()],
      home: HomeScreen(),
      routes: {
        '/detail': (context) => DetailScreen(),
      },
    );
  }
}

class MyRouteObserver extends RouteObserver<PageRoute<dynamic>> {
  void _handleRouteChange(PageRoute<dynamic>? previousRoute, PageRoute<dynamic> route) {
    if (previousRoute?.settings.name != route.settings.name) {
      print('Route changed to: ${route.settings.name}');
    }
  }

  @override
  void didPush(Route<dynamic> route, Route<dynamic>? previousRoute) {
    _handleRouteChange(previousRoute as PageRoute<dynamic>?, route as PageRoute<dynamic>);
  }

  @override
  void didReplace({Route<dynamic>? newRoute, Route<dynamic>? oldRoute}) {
    _handleRouteChange(oldRoute as PageRoute<dynamic>?, newRoute as PageRoute<dynamic>);
  }

  @override
  void didPop(Route<dynamic> route, Route<dynamic>? previousRoute) {
    _handleRouteChange(route as PageRoute<dynamic>?, previousRoute as PageRoute<dynamic>);
  }
}

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() =>_HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> with RouteAware {
  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    print('Entered Home Screen');
    routeObserver.subscribe(this, ModalRoute.of(context)!);
  }

  @override
  void dispose() {
    routeObserver.unsubscribe(this);
    super.dispose();
  }

  @override
  void didPopNext() {
    print('Returned to Home Screen');
  }

  @override
  void didPush() {
    print('Navigated to Home Screen');
  }

  @override
  void didPushNext() {
    print('Navigated away from Home Screen');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Home Screen')),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            Navigator.pushNamed(context, '/detail');
          },
          child: Text('Go to Detail Screen'),
        ),
      ),
    );
  }
}

class DetailScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Detail Screen')),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            Navigator.pop(context);
          },
          child: Text('Go back'),
        ),
      ),
    );
  }
}
```

## 生命周期

RouteAware 提供了以下生命周期方法，可以根据需要进行重写：

- didChangeDependencies：在页面路由变化时调用，类似于 initState，用于订阅当前页面的生命周期。
- dispose：在页面销毁时调用，用于取消当前页面的生命周期订阅。
- didPush：在页面被压入页面栈时调用。
- didPushNext：在页面被压入页面栈之后，下一个页面被压入之前调用。
- didPop：在页面被弹出页面栈时调用。
- didPopNext：在页面被弹出页面栈之后，上一个页面被弹出之前调用。

## 注意事项

- 使用 RouteAware 时，要根据需要重写合适的生命周期方法，以便在不同页面状态下执行相应的操作。
- 避免在生命周期方法中执行过多的计算或耗时操作，以免影响页面切换性能。
- RouteAware 的生命周期方法是页面级别的，适用于监听页面级别的生命周期，如果需要监听全局的生命周期，可以使用 WidgetsBindingObserver。
- 注意在 didChangeDependencies 和 dispose 方法中添加和移除 routeObserver 订阅。
- 总之，RouteAware 是用于监听页面路由变化的 mixin 类，通过实现其中的生命周期方法，可以在页面切换、进入和离开时执行相应的操作，用于实现页面级别的生命周期管理。
