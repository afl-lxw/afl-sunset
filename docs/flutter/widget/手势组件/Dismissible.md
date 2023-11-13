# Dismissible

> Dismissible 是 Flutter 中用于实现滑动删除效果的组件。它可以将子组件包裹在一个可滑动的区域，用户在该区域内滑动时，可以触发一个删除或其他操作。

## 属性

- key (Key): widget 的唯一标识符。
- child (Widget): 将要被滑动的 Widget。
- background (Widget): 滑动方向上的背景内容，通常用于删除或执行其他操作。
- secondaryBackground (Widget): 如果指定了方向，则是另一侧的背景内容，可选，用于滑动另一方向的操作。
- confirmDismiss (DismissDirectionCallback)?: 可选的回调函数，当尝试执行滑动时，它会检查是否确认滑动。
- onResize (VoidCallback)?: 可选的回调函数，当 Dismissible 调整大小时触发。
- onUpdate (`ValueChanged<Offset>`)?: 可选的回调函数，当 Dismissible 更新时触发。
- onDismissed (DismissDirectionCallback)?: 滑动完成后的回调函数。
- direction (DismissDirection): 可以滑动的方向，默认为水平方向。
- resizeDuration (Duration): 执行调整大小的动画持续时间。
- dismissThresholds (`Map<DismissDirection, double>`): 手指滑动的阈值，用于确定滑动是否触发删除，默认是 DismissDirection.horizontal。
- movementDuration (Duration): 完成滑动所需的时间。
- crossAxisEndOffset (double): 交叉轴（非滑动方向）的结束偏移量。
- dragStartBehavior (DragStartBehavior): 拖动开始的行为，start 代表在按下时立即开始移动。
- behavior (HitTestBehavior): 行为定义该组件如何响应命中测试，默认是 HitTestBehavior.opaque，这意味着它不允许通过它进行命中测试。

## 功能

- 在滑动时显示不同的背景，用于表示删除或其他操作。
- 可以自定义滑动方向和拖动行为。
- 提供回调函数来处理滑动后的操作，如删除或执行其他操作。
- 可以通过 confirmDismiss 属性来确认是否执行操作。

## 用法

```dart
Dismissible(
  key: Key(item.id.toString()),
  child: ListTile(title: Text(item.name)),
  background: Container(color: Colors.red),
  onDismissed: (direction) {
    // 处理删除操作
    // 更新数据源并刷新界面
  },
)
```

## 使用场景

- 列表中的滑动删除操作，例如邮件列表、待办事项列表等。
- 列表中的滑动标记为已读、标星等操作。
- 列表项支持自定义操作的滑动效果。

## 注意事项

- Dismissible 需要包裹在一个可滚动的列表或容器中。
- 删除操作需要在 onDismissed 回调函数中实现，确保在该函数中更新数据源并刷新界面。
- confirmDismiss 可用于弹出确认对话框，防止意外删除。
- 在使用滑动删除时，确保用户能够轻松理解和使用该交互。
- 根据设计指南，提供适当的视觉指示来表明滑动区域的操作。
