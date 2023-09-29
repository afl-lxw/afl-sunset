# TabBar

在 Flutter 中，TabBar 是一个用于展示选项卡的组件，它通常用于与 TabBarView 配合使用，实现选项卡导航的功能。

## 属性和方法

- super.key,
- required this.tabs,
- this.controller,
- this.isScrollable = false,
- this.padding,
- this.indicatorColor,
- this.automaticIndicatorColorAdjustment = true,
- this.indicatorWeight = 2.0,
- this.indicatorPadding = EdgeInsets.zero,
- this.indicator,
- this.indicatorSize,
- this.dividerColor,
- this.labelColor,
- this.labelStyle,
- this.labelPadding,
- this.unselectedLabelColor,
- this.unselectedLabelStyle,
- this.dragStartBehavior = DragStartBehavior.start,
- this.overlayColor,
- this.mouseCursor,
- this.enableFeedback,
- this.onTap,
- this.physics,
- this.splashFactory,
- this.splashBorderRadius,
- this.tabAlignment,

## 功能和用法

TabBar 提供了一个水平排列的选项卡栏，用于显示不同的选项卡。通过与 TabBarView 配合使用，可以实现选项卡导航，让用户在不同选项卡之间切换内容。

- required `this.tabs（List<Widget>）`：用于指定每个选项卡的小部件列表，这些小部件将显示在TabBar中。
- this.controller（TabController? controller）：用于控制选项卡的选择和滚动位置。通常，您可以将一个TabController与DefaultTabController一起使用来自动创建和管理。
- this.isScrollable（bool isScrollable = false）：控制选项卡是否可以水平滚动。如果为true，则选项卡可以在水平方向上滚动，适用于大量选项卡的情况。
- this.padding（EdgeInsetsGeometry? padding）：用于指定TabBar小部件的内边距。
- this.indicatorColor（Color? indicatorColor）：用于指定选中选项卡下方指示器的颜色。
- this.automaticIndicatorColorAdjustment（bool automaticIndicatorColorAdjustment = true）：控制是否根据indicatorColor自动调整选项卡标签的文本颜色以保持对比度。
- this.indicatorWeight（double indicatorWeight = 2.0）：用于指定选中选项卡下方指示器的高度。
- this.indicatorPadding（EdgeInsetsGeometry indicatorPadding = EdgeInsets.zero）：用于指定选中选项卡下方指示器的内边距。
- this.indicator（Decoration? indicator）：用于指定自定义的选中选项卡下方指示器的装饰。
- this.indicatorSize（TabBarIndicatorSize? indicatorSize）：用于指定选中选项卡下方指示器的大小，可以是TabBarIndicatorSize.tab或TabBarIndicatorSize.label。
- this.dividerColor（Color? dividerColor）：用于指定选项卡之间的分隔线颜色。
- this.labelColor（Color? labelColor）：用于指定选中选项卡标签的文本颜色。
- this.labelStyle（TextStyle? labelStyle）：用于指定选中选项卡标签的文本样式。
- this.labelPadding（EdgeInsetsGeometry? labelPadding）：用于指定选项卡标签的内边距。
- this.unselectedLabelColor（Color? unselectedLabelColor）：用于指定未选中选项卡标签的文本颜色。
- this.unselectedLabelStyle（TextStyle? unselectedLabelStyle）：用于指定未选中选项卡标签的文本样式。
- this.dragStartBehavior（DragStartBehavior dragStartBehavior = DragStartBehavior.start）：用于指定开始拖动手势的行为。通常使用DragStartBehavior.start以在触摸点开始拖动。
- `this.overlayColor（MaterialStateProperty<Color?>? overlayColor）`：用于指定选项卡的叠加颜色，可以根据选项卡的状态来更改颜色。
- this.mouseCursor（MouseCursor? mouseCursor）：用于指定指针悬停在选项卡上时的光标形状。
- this.enableFeedback（bool? enableFeedback）：控制是否启用触觉反馈（例如振动）。
- `this.onTap（ValueChanged<int>? onTap）`：当用户点击选项卡时调用的回调函数，参数为选项卡的索引。
- this.physics（ScrollPhysics? physics）：用于指定选项卡滚动的物理效果，例如滚动速度和

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
