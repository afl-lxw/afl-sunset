---
pageClass: custom-page-imgs-class
---
# CustomScrollView

CustomScrollView 是 Flutter 中的一个强大的滚动容器，它可以包含多种滚动视图（sliver）组件，例如 SliverAppBar、SliverList、SliverGrid 等，以实现更复杂的滚动效果和布局。CustomScrollView 在需要定制滚动效果、嵌套滚动视图等情况下非常有用。

## 用法

```dart
  const CustomScrollView({
    super.key,
    super.scrollDirection,
    super.reverse,
    super.controller,
    super.primary,
    super.physics,
    super.scrollBehavior,
    super.shrinkWrap,
    super.center,
    super.anchor,
    super.cacheExtent,
    this.slivers = const <Widget>[],
    super.semanticChildCount,
    super.dragStartBehavior,
    super.keyboardDismissBehavior,
    super.restorationId,
    super.clipBehavior,
  });
```

## 属性及功能

- key: 用于在构建和更新元素时标识此组件。
- scrollDirection: 指定滚动方向，可以是 Axis.vertical（垂直滚动）或 Axis.horizontal（水平滚动）。
- reverse: 布尔值，决定滚动是否是反向的，当值为 true 时，滚动方向将相反。
- controller: 指定滚动控制器，允许您手动控制滚动位置和监听滚动事件。
- primary: 布尔值，当此滚动视图嵌套在另一个滚动视图中时，用于指示此滚动视图是否应该作为主滚动视图。
- physics: 指定滚动物理效果，例如滚动的回弹行为，可以选择 ScrollPhysics 类的实例。
- scrollBehavior: 指定滚动行为，通常用于决定在滚动视图中滚动到某个位置时的动画效果。
- shrinkWrap: 布尔值，决定滚动视图是否应该根据其内容来调整大小，通常用于包裹较小的部分。
- center: bool，决定在滚动到边界时是否保持子组件在视图中心。
- anchor: 决定滚动视图中的锚点位置，默认值为 0.0，取值范围在 0.0 到 1.0 之间。
- cacheExtent: 指定预加载的缓存区域，用于提前渲染一定范围内的子组件。
- slivers: `List<Widget>`，这是一个包含不同类型的 Sliver 的列表，用于构建滚动视图的内容。
- semanticChildCount: 用于指定可访问性信息，表示子元素的数量。
- dragStartBehavior: 用于控制滚动操作的触发行为，例如在嵌套滚动时如何处理滚动手势。
- keyboardDismissBehavior: 决定当用户点击键盘以外的区域时，是否自动关闭键盘。
- restorationId: 用于状态恢复，指定此滚动视图的恢复标识符。
- clipBehavior: 决定滚动视图是否应该剪切其子组件，以防止溢出。

## 使用场景

- 构建复杂的滚动界面，例如嵌套多个滚动视图。
- 实现带有可伸缩头部的滚动页面，例如随滚动展开/折叠的 AppBar。
- 在同一个页面中同时展示多种滚动效果，如列表和网格布局。

## 注意事项

- CustomScrollView 本身不会滚动，它依赖于内部的滚动视图组件实现滚动效果。
- 在使用 CustomScrollView 时，需要在 slivers 列表中添加适当的滚动视图组件，如 SliverAppBar、SliverList、SliverGrid 等，以实现所需的布局和滚动效果。
- 由于嵌套了多个滚动视图，可能需要处理滚动冲突问题，确保每个滚动视图能够正常滚动和交互。

## 示例

下面是一个简单的示例，展示如何使用 CustomScrollView 来创建一个带有可伸缩 AppBar 的滚动页面：

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: MyScrollPage(),
    );
  }
}

class MyScrollPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomScrollView(
        slivers: <Widget>[
          SliverAppBar(
            expandedHeight: 200,
            flexibleSpace: FlexibleSpaceBar(
              title: Text('CustomScrollView Example'),
              background: Image.network(
                'https://via.placeholder.com/350x150',
                fit: BoxFit.cover,
              ),
            ),
          ),
          SliverList(
            delegate: SliverChildBuilderDelegate(
              (context, index) {
                return ListTile(
                  title: Text('Item $index'),
                );
              },
              childCount: 20,
            ),
          ),
        ],
      ),
    );
  }
}
```

如图所示

![CustomScrollViewWidget](./imgs/CustomScrollViewWidget.gif)

在这个示例中，我们创建了一个带有可伸缩 AppBar 的滚动页面。CustomScrollView 中嵌套了两个滚动视图组件：SliverAppBar 和 SliverList。SliverAppBar 实现了可伸缩的头部，而 SliverList 展示了一个包含多个列表项的滚动列表。

## 更多Sliver组件

::: tip
其中包括了

- SliverPadding: 可以在滚动视图中添加边距，类似于Padding小部件。它允许您在滚动视图的内容周围添加空白空间。
- SliverFillViewport: 在视图内填充子项，以便它们填满视图的剩余空间。适用于您希望在滚动视图中创建一个可以无限滚动的子项列表。
- SliverAnimatedList: 一个可以添加和删除项的动画列表。与AnimatedList相似，但可以集成到CustomScrollView中。
- SliverGrid.extent 和 SliverGrid.count: 这些是SliverGrid的快速构造函数，分别用于创建具有相同尺寸的网格和具有相同数量的列的网格。
- SliverAppBar: 这是一个特殊的可折叠的应用栏，具有展开和折叠状态，通常用于创建具有滚动视图的应用栏。
- SliverAnimatedOpacity: 类似于SliverAnimatedList，但用于在滚动视图中的不透明度更改时添加动画效果。
- SliverList: 创建一个垂直滚动的列表，可以包含多个子项。
- SliverToBoxAdapter: 允许您将任何小部件包装在CustomScrollView中，但不会自动适应滚动。
- SliverPersistentHeader: 创建一个固定的持久化头部，可以在滚动时保持可见。
:::

## 先提供一个示例看一下

```dart
import 'package:flutter/material.dart';

class SliverToBoxAdapterWidget extends StatefulWidget {
  const SliverToBoxAdapterWidget({super.key});

  @override
  State<SliverToBoxAdapterWidget> createState() =>
      _SliverToBoxAdapterWidgetState();
}

class _SliverToBoxAdapterWidgetState extends State<SliverToBoxAdapterWidget>
    with TickerProviderStateMixin {
  late TabController _tabController;

  @override
  void initState() {
    _tabController = TabController(length: 3, vsync: this);
    super.initState();
  }

  @override
  void dispose() {
    _tabController.dispose(); // 释放内存
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return CustomScrollView(
      slivers: <Widget>[
        SliverToBoxAdapter(
          child: Container(
            padding: EdgeInsets.all(16),
            child: const Text(
              'Horizontal Scrollable Content',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
          ),
        ),
        SliverPersistentHeader(
          delegate: MySliverPersistentHeaderDelegate(),
          pinned: true,
        ),
        SliverToBoxAdapter(
          child: Container(
            height: 200,
            child: ListView.builder(
              scrollDirection: Axis.horizontal,
              itemCount: 10,
              itemBuilder: (context, index) {
                return Container(
                  width: 150,
                  color: Colors.blue,
                  margin: EdgeInsets.all(8),
                  child: Center(
                    child: Text(
                      'Item $index',
                      style: TextStyle(color: Colors.white),
                    ),
                  ),
                );
              },
            ),
          ),
        ),
        SliverToBoxAdapter(
          child: DefaultTabController(
            length: 3,
            child: Column(
              children: [
                const TabBar(
                  tabs: [
                    Tab(text: 'Tab 1'),
                    Tab(text: 'Tab 2'),
                    Tab(text: 'Tab 3'),
                  ],
                ),
                SizedBox(
                  height: 100,
                  child: TabBarView(
                    children: [
                      Container(
                        color: Colors.yellow,
                        child: Center(child: Text('tab1')),
                      ),
                      Container(
                        color: Colors.green,
                        child: Center(child: Text('tab2')),
                      ),
                      Container(
                        color: Colors.blue,
                        child: Center(child: Text('tab3')),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
        SliverToBoxAdapter(
          child: Container(
            padding: EdgeInsets.all(16),
            child: const Text(
              'Vertical Scrollable Content',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
          ),
        ),
        SliverList(
          delegate: SliverChildBuilderDelegate(
            (BuildContext context, int index) {
              return ListTile(title: Text('Item $index'));
            },
            childCount: 10,
          ),
        ),
      ],
    );
  }
}

class MySliverPersistentHeaderDelegate extends SliverPersistentHeaderDelegate {
  @override
  Widget build(
      BuildContext context, double shrinkOffset, bool overlapsContent) {
    return Container(
      color: Colors.grey,
      alignment: Alignment.center,
      child: const Text('Persistent Header',
          style: TextStyle(color: Colors.white)),
    );
  }

  @override
  double get maxExtent => 50.0;

  @override
  double get minExtent => 50.0;

  @override
  bool shouldRebuild(SliverPersistentHeaderDelegate oldDelegate) {
    return false;
  }
}

```

如下图所示

![SliverToBoxAdapterWidget](./imgs/SliverToBoxAdapterWidget.gif)
