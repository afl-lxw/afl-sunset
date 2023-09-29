# TabBar

在 Flutter 中，TabBar 是一个用于展示选项卡的组件，它通常用于与 TabBarView 配合使用，实现选项卡导航的功能。

## 属性和方法

- tabs: 一个包含选项卡的列表，每个选项卡通常是一个 Tab 对象。
- controller: 与 TabController 对象关联，用于控制选项卡的切换。
- isScrollable: 决定选项卡是否可以滚动。
- indicatorColor: 选项卡指示器的颜色。
- indicatorWeight: 选项卡指示器的宽度。
- indicatorPadding: 选项卡指示器的内边距。
- indicator: 自定义选项卡指示器。
- indicatorSize: 选项卡指示器的尺寸。
- labelColor: 选项卡选中状态下标签的颜色。
- labelStyle: 选项卡选中状态下标签的样式。
- unselectedLabelColor: 选项卡未选中状态下标签的颜色。
- unselectedLabelStyle: 选项卡未选中状态下标签的样式。
- dragStartBehavior: 定义用户在哪里开始拖动。

## 功能和用法

TabBar 提供了一个水平排列的选项卡栏，用于显示不同的选项卡。通过与 TabBarView 配合使用，可以实现选项卡导航，让用户在不同选项卡之间切换内容。

- tabs（`List<Widget>`）：用于指定每个选项卡的小部件列表。
- controller（TabController）： 用于控制选项卡的选择和滚动位置。通常，您需要使用DefaultTabController来自动创建并管理TabController。
- isScrollable（bool）：控制选项卡是否可以水平滚动。如果为true，则选项卡可以在水平方向上滚动，适用于大量选项卡的情况。
- indicatorColor（Color）：用于指定选中选项卡下方指示器的颜色。
- indicatorWeight（double）：用于指定选中选项卡下方指示器的高度。
- indicatorPadding（EdgeInsetsGeometry）：用于指定选中选项卡下方指示器的内边距。
- indicatorSize（TabBarIndicatorSize）：枚举类型，用于指定选中选项卡下方指示器的大小。可以是TabBarIndicatorSize.tab（与选项卡一样宽）或TabBarIndicatorSize.label（与选项卡标签的宽度一样）。
- labelColor（Color）：用于指定选中选项卡标签的文本颜色。
- unselectedLabelColor（Color）：用于指定未选中选项卡标签的文本颜色。
- labelStyle（TextStyle）：用于指定选中选项卡标签的文本样式。
- unselectedLabelStyle（TextStyle）：用于指定未选中选项卡标签的文本样式。
- labelPadding（EdgeInsetsGeometry）：用于指定选项卡标签的内边距。
- dragStartBehavior（DragStartBehavior）：枚举类型，指定开始拖动手势的行为。通常使用DragStartBehavior.start以在触摸点开始拖动。
- onTap（void Function(int index)）：当用户点击选项卡时调用的回调函数，参数为选项卡的索引。
- physics（ScrollPhysics）：用于指定选项卡滚动的物理效果，例如滚动速度和边界效应。

## 使用场景

- 选项卡导航：用于在不同的选项卡之间切换内容，例如顶部导航栏、底部导航栏等。
- 多页面布局：在多页面应用中，可以使用 TabBar 来切换不同的页面内容。
- 标签页：常用于展示不同分类或内容，让用户可以快速切换。

## 示例

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: DefaultTabController(
        length: 3,
        child: Scaffold(
          appBar: AppBar(
            title: Text('TabBar Example'),
            bottom: TabBar(
              tabs: [
                Tab(text: 'Tab 1'),
                Tab(text: 'Tab 2'),
                Tab(text: 'Tab 3'),
              ],
            ),
          ),
          body: TabBarView(
            children: [
              Center(child: Text('Content of Tab 1')),
              Center(child: Text('Content of Tab 2')),
              Center(child: Text('Content of Tab 3')),
            ],
          ),
        ),
      ),
    );
  }
}
```

## 注意事项

- TabBar 必须与 TabBarView 配合使用，用于实现选项卡导航功能。
- 如果没有提供 TabController，TabBar 会使用 DefaultTabController 中的 TabController。
- TabBar 的选项卡数量应与 TabBarView 的子组件数量相匹配。
- 当选项卡数量较多时，可以设置 isScrollable 为 true，使选项卡可以水平滚动。
- 当自定义选项卡指示器时，需要注意样式和尺寸的调整，确保视觉效果符合预期。
