# Draggable

Draggable 是 Flutter 中用于实现可拖拽交互的组件，它可以将一个子组件包裹在一个可拖拽的区域内，用户可以通过手势在该区域内拖动子组件。

## 属性

- child (Widget): 要拖动的子组件。
- feedback (Widget): 在拖动期间显示的反馈组件，通常是一个半透明的图像。
- data (T): 要传递的数据，当拖动结束时会将这个数据传递给接收者。
- childWhenDragging (Widget): 当拖动时，替代原始的子组件。
- feedbackOffset (Offset): 拖动反馈的偏移量，通常用于调整反馈的位置。
- axis (Axis): 拖动方向，可以是 Axis.horizontal 或 Axis.vertical。
- affinity (Axis): 指定拖动的边缘，例如 Axis.horizontal 表示水平方向的边缘。
- maxSimultaneousDrags (int): 允许同时进行的最大拖动数量。
- onDragStarted (VoidCallback): 拖动开始时的回调函数。
- onDraggableCanceled (DraggableCanceledCallback): 拖动被取消时的回调函数。
- onDragCompleted (VoidCallback): 拖动成功完成时的回调函数。
- onDragEnd (DraggableDetails): 拖动结束时的回调函数，提供拖动的详细信息。

## 功能

- 允许用户通过手势将一个子组件从一个位置拖动到另一个位置。
- 提供了丰富的回调函数来处理拖动的各个阶段，如拖动开始、拖动结束等。

## 用法

```dart
Draggable<int>(
  data: 42,
  child: Container(
    width: 100,
    height: 100,
    color: Colors.blue,
    child: Center(child: Text('Drag Me')),
  ),
  feedback: Container(
    width: 100,
    height: 100,
    color: Colors.blue.withOpacity(0.5),
    child: Center(child: Text('Dragging')),
  ),
)
```

## 使用场景

- 在应用中实现拖拽排序功能，如调整列表项的顺序。
- 实现拖拽控件的定制，如拖拽滑块、调整组件大小等。

## 注意事项

- feedback 子组件应该提供合适的反馈效果，以指示用户正在进行拖拽操作。
- child 子组件应该在拖动结束后重新显示，确保用户可以在不同位置停止拖拽。
- data 是在拖拽结束时传递给接收者的数据。
- 在使用多个可拖拽的组件时，可以通过 maxSimultaneousDrags 限制同时进行的拖拽数量。
- 在拖拽开始、结束和取消时，可以使用相应的回调函数来执行相关操作。
