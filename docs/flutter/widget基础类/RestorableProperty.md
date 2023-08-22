# RestorableProperty

RestorableProperty 是 Flutter 中用于实现状态的保存和恢复的类。它是 Restorable 类的一部分，用于定义可以被保存和恢复的状态属性。通过使用 RestorableProperty，你可以在应用程序被暂停或销毁时保存状态，并在应用程序恢复时恢复状态。

## 作用

RestorableProperty 的作用是定义一个可以被保存和恢复的状态属性。它用于在应用程序暂停或销毁时保存状态，并在应用程序恢复时恢复状态。

## 属性

RestorableProperty 有几个重要的属性和方法：

- defaultValue：属性的默认值，在初始状态下使用。
- value：当前属性的值。
- fromPrimitives：从原始值（如字符串、数字等）恢复属性值的方法。
- toPrimitives：将属性值转换为原始值的方法。

## 示例

以下是一个示例，演示如何使用 RestorableProperty 在应用程序中保存和恢复一个计数器的状态：

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class CounterState extends Restorable<int> {
  @override
  RestorableProperty<int> createRestoreProperty() {
    return RestorableProperty<int>(0, fromPrimitives, toPrimitives);
  }
}

class MyApp extends StatelessWidget {
  final counterState = CounterState();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Restorable Property Example')),
        body: Center(
          child: RestorableBuilder<int>(
            builder: (BuildContext context, Restorable<int> state) {
              return Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text('Count: ${state.value}'),
                  ElevatedButton(
                    onPressed: () {
                      state.value++;
                      state.saveState();
                    },
                    child: Text('Increment'),
                  ),
                ],
              );
            },
            state: counterState,
          ),
        ),
      ),
    );
  }
}
```

## 生命周期

RestorableProperty 的生命周期与应用程序的状态保存和恢复过程相关。当应用程序被暂停或销毁时，toPrimitives 方法会被调用来保存属性值。当应用程序恢复时，fromPrimitives 方法会被调用来恢复属性值。

## 注意事项

- 使用 RestorableProperty 可以帮助你实现应用程序的状态保存和恢复功能，以提供更好的用户体验。
- 在实际使用中，可以根据应用程序的需求定义多个不同类型的 RestorableProperty。
- RestorableProperty 适用于保存和恢复简单的属性，对于复杂的状态管理，你可能需要考虑使用更高级的状态管理方案，如 Provider、GetX 等。
- 总之，RestorableProperty 是用于实现状态的保存和恢复的类，通过定义属性的保存和恢复方法，可以在应用程序被暂停或销毁时保存状态，并在应用程序恢复时恢复状态。
