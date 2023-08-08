# RawGestureDetector

RawGestureDetector 是 Flutter 中的一个小部件，用于提供对原始手势事件的访问。它是一个底层的手势识别器，允许你监听和处理低级别的原始触摸事件，通常用于创建自定义的手势操作。

## 属性和功能

RawGestureDetector 提供了以下一些重要的属性：

- gestures: 一个包含手势识别器的集合，通过 GestureRecognizerFactoryWithHandlers 创建，用于识别和处理不同类型的手势。
- behavior: 定义了如何处理手势事件的方式，有 deferToChild、opaque 和 translucent 三种方式。
- excludeFromSemantics: 控制是否将 RawGestureDetector 标记为在屏幕阅读器语义树中不可见。

## 用法和使用场景

- 自定义手势操作：RawGestureDetector 允许你创建自定义的手势识别器和手势操作，可以用于处理不同类型的手势，如滑动、缩放等。
- 底层手势处理：当需要对原始的触摸事件进行细粒度的控制和处理时，可以使用 RawGestureDetector。

## 举例

```dart
RawGestureDetector(
  gestures: {
    MyPanGestureRecognizer: GestureRecognizerFactoryWithHandlers<MyPanGestureRecognizer>(
      () => MyPanGestureRecognizer(debugOwner: this),
      (MyPanGestureRecognizer instance) {
        instance.onStart = (details) {
          print('Pan gesture started');
        };
        instance.onUpdate = (details) {
          print('Pan gesture updated: ${details.localPosition}');
        };
        instance.onEnd = (details) {
          print('Pan gesture ended');
        };
      },
    ),
  },
  child: Container(
    width: 200,
    height: 200,
    color: Colors.blue,
    child: Center(
      child: Text(
        'Pan here',
        style: TextStyle(color: Colors.white),
      ),
    ),
  ),
)
```

在上面的示例中，RawGestureDetector 使用自定义的手势识别器 MyPanGestureRecognizer 来处理原始的拖动手势。

## 注意事项

- RawGestureDetector 是一个底层的手势识别器，通常不会直接使用它来处理常见的手势操作，而是用于创建自定义的手势操作。
- 在使用 RawGestureDetector 时，需要自己实现手势识别器，并通过 GestureRecognizerFactoryWithHandlers 提供相应的回调函数来处理手势事件。
- 注意手势冲突问题，不同的手势识别器可能会相互影响，需要谨慎设计手势识别器的集合。
- 在使用自定义手势识别器时，需要考虑如何与其他小部件一起使用，以实现预期的用户界面和手势交互。
