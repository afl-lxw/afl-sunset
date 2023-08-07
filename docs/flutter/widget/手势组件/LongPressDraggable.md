# LongPressDraggable

> 在 Flutter 中，LongPressDraggable 是一个小部件，它允许用户长按并拖动一个子部件，从而支持在界面中进行拖拽操作。它与 Draggable 类似，但需要长按才能启动拖拽操作。

## 属性

以下是 LongPressDraggable 的一些常用属性

- child: 放置在 LongPressDraggable 中的子部件。
- feedback: 拖拽过程中的反馈部件，通常是一个半透明的影像。
- data: 被拖拽的数据，可以是任意类型的对象。
- axis: 拖拽的轴向，可以是水平轴（Axis.horizontal）或垂直轴（Axis.vertical）。
- childWhenDragging: 在拖拽过程中显示的子部件，通常是与 feedback 不同的状态。
- onDragStarted: 拖拽开始时的回调函数。
- onDraggableCanceled: 拖拽取消时的回调函数。
- onDragCompleted: 拖拽完成时的回调函数。
- onDragEnd: 拖拽结束时的回调函数。

## 功能

- 支持用户长按并拖动子部件，实现拖拽操作。
- 可以在拖拽过程中显示不同的反馈部件。

## 用法

LongPressDraggable 可以用于实现用户可以长按并拖动的交互操作，例如拖拽图标、卡片等。

## 使用场景

- 在应用中实现可拖拽的组件，如可拖拽的图标、列表项等。
- 在拖拽操作需要一些预处理或特殊效果时使用。

## 注意事项

- 如果需要通过拖拽操作交换子部件的位置，通常需要在 onDraggableCanceled 回调函数中进行位置交换的逻辑。

## 示例

以下示例演示了如何使用 LongPressDraggable 创建一个可以长按并拖动的小部件

```dart
LongPressDraggable(
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
    child: Center(child: Text('Dragging...')),
  ),
  data: 'MyDraggableData', // 被拖拽的数据
  axis: Axis.vertical, // 垂直轴拖拽
  childWhenDragging: Container(), // 拖拽时的替代子部件
  onDragStarted: () {
    print('Drag Started');
  },
  onDraggableCanceled: (Velocity velocity, Offset offset) {
    print('Drag Canceled');
  },
  onDragCompleted: () {
    print('Drag Completed');
  },
  onDragEnd: (details) {
    print('Drag Ended');
  },
)
```

在上面的示例中，当用户长按并拖动蓝色的容器时，会显示半透明的反馈容器。拖拽操作的开始、取消、完成和结束都会触发相应的回调函数。
