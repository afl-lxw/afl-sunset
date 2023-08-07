# DraggableScrollableSheet

DraggableScrollableSheet 是 Flutter 中的一个组件，用于实现一个可以拖动的底部面板，通常用于创建底部菜单、筛选器或其他交互性的面板。它允许用户通过手势将面板拖动展开或收起。

## 属性

- initialChildSize (double): 初始子组件的高度占父组件高度的比例，默认为0.5。
- minChildSize (double): 子组件的最小高度占父组件高度的比例，默认为0.25。
- maxChildSize (double): 子组件的最大高度占父组件高度的比例，默认为1.0。
- expand (bool): 是否在初始化时展开底部面板，默认为false。
- builder (BuildContext, ScrollController): 构建底部面板的回调函数。
- onMinimized (VoidCallback): 当底部面板收起时的回调函数。
- onMaximized (VoidCallback): 当底部面板展开时的回调函数。

## 功能

- 创建一个可以拖动展开和收起的底部面板。
- 支持自定义的内容构建。
- 提供了最小和最大高度的控制选项。

## 用法

```dart
DraggableScrollableSheet(
  initialChildSize: 0.5,
  minChildSize: 0.25,
  maxChildSize: 1.0,
  expand: true,
  builder: (context, controller) {
    return Container(
      color: Colors.grey[300],
      child: ListView.builder(
        controller: controller,
        itemCount: 20,
        itemBuilder: (context, index) {
          return ListTile(
            title: Text('Item $index'),
          );
        },
      ),
    );
  },
)
```

## 使用场景

- 创建一个可拖动的底部菜单，用于显示筛选器、操作按钮等。
- 在需要大面积交互的情况下，以卡片的形式在底部创建可拖动的信息面板。

## 注意事项

- builder 回调函数应该返回一个可以滚动的组件，通常是 ListView、GridView 等。
- initialChildSize、minChildSize 和 maxChildSize 应该根据应用需求进行调整，以确保底部面板的交互体验。
- 在 onMinimized 和 onMaximized 回调函数中可以执行一些特定的操作，例如更新状态或执行动画。
