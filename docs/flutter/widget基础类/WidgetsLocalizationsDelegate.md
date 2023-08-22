# WidgetsLocalizationsDelegate

WidgetsLocalizationsDelegate 是 Flutter 中用于本地化（国际化）的代理类。它负责在运行时根据系统或用户设置的语言环境，提供相应的本地化资源。

## 作用

WidgetsLocalizationsDelegate 的作用是根据语言环境提供本地化资源。它可以通过子类化来实现不同语言的资源获取。

## 属性

WidgetsLocalizationsDelegate 并没有显式的属性。它主要是通过实现一些方法来提供本地化资源。

## 示例

以下是一个示例，演示如何使用 WidgetsLocalizationsDelegate 来实现本地化的资源获取：

```dart
import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      localizationsDelegates: [
        MyLocalizationsDelegate(),
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
      ],
      supportedLocales: [
        const Locale('en', 'US'),
        const Locale('zh', 'CN'),
      ],
      home: MyHomePage(),
    );
  }
}

class MyLocalizationsDelegate extends LocalizationsDelegate<WidgetsLocalizations> {
  @override
  bool isSupported(Locale locale) {
    return ['en', 'zh'].contains(locale.languageCode);
  }

  @override
  Future<WidgetsLocalizations> load(Locale locale) async {
    return MyWidgetsLocalizations();
  }

  @override
  bool shouldReload(LocalizationsDelegate<WidgetsLocalizations> old) {
    return false;
  }
}

class MyWidgetsLocalizations extends WidgetsLocalizations {
  @override
  String get openAppDrawerTooltip => 'Open Drawer';
  // Add more localized strings here
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Localization Example')),
      body: Center(
        child: Text(
          WidgetsLocalizations.of(context)!.openAppDrawerTooltip,
          style: TextStyle(fontSize: 20),
        ),
      ),
    );
  }
}
```

## 生命周期

WidgetsLocalizationsDelegate 并没有显式的生命周期方法，它主要是在应用程序的运行时根据需要提供本地化资源。

## 注意事项

- 使用 WidgetsLocalizationsDelegate 时，需要创建一个继承自 LocalizationsDelegate 的子类，并实现其中的方法，以便提供本地化资源。
- 在 load 方法中，你可以返回一个自定义的本地化资源对象，用于提供本地化字符串等资源。
- 在使用本地化字符串时，可以使用 WidgetsLocalizations.of(context) 来获取相应的本地化资源对象，并使用其中的属性来获取字符串。
- 注意在 isSupported 方法中定义支持的语言环境，以及在 supportedLocales 中定义支持的 Locale 列表。
- 总之，WidgetsLocalizationsDelegate 是用于实现本地化的代理类，通过继承它的子类，可以根据语言环境提供相应的本地化资源。
