---
pageClass: custom-page-imgs-class
---
# CustomScrollView

CustomScrollView 是 Flutter 中的一个强大的滚动容器，它可以包含多种滚动视图（sliver）组件，例如 SliverAppBar、SliverList、SliverGrid 等，以实现更复杂的滚动效果和布局。CustomScrollView 在需要定制滚动效果、嵌套滚动视图等情况下非常有用。

## 用法

```dart
CustomScrollView(
  slivers: <Widget>[],
)
```

## 属性及功能

1. slivers`（List<Widget>）`：滚动视图列表。
功能：设置包含在 CustomScrollView 中的滚动视图组件，如 SliverAppBar、SliverList、SliverGrid 等。

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

- SliverGrid: 一个网格布局，可以在滚动视图中显示网格列表。使用SliverGridDelegate来指定网格的行数、列数和间距。
- SliverPadding: 可以在滚动视图中添加边距，类似于Padding小部件。它允许您在滚动视图的内容周围添加空白空间。
- SliverFillViewport: 在视图内填充子项，以便它们填满视图的剩余空间。适用于您希望在滚动视图中创建一个可以无限滚动的子项列表。
- SliverAnimatedList: 一个可以添加和删除项的动画列表。与AnimatedList相似，但可以集成到CustomScrollView中。
- SliverGrid.extent 和 SliverGrid.count: 这些是SliverGrid的快速构造函数，分别用于创建具有相同尺寸的网格和具有相同数量的列的网格。
- SliverAppBar: 这是一个特殊的可折叠的应用栏，具有展开和折叠状态，通常用于创建具有滚动视图的应用栏。
- SliverAnimatedOpacity: 类似于SliverAnimatedList，但用于在滚动视图中的不透明度更改时添加动画效果。
- 每个组件的功能如下：
- SliverAppBar: 创建一个可折叠的应用栏，可以根据滚动的位置进行展开和折叠，通常用于包含应用栏和背景图像的头部部分。
- SliverList: 创建一个垂直滚动的列表，可以包含多个子项。
- SliverGrid: 创建一个网格布局，可以在滚动视图中显示网格列表。
- SliverToBoxAdapter: 允许您将任何小部件包装在CustomScrollView中，但不会自动适应滚动。
- SliverPadding: 在滚动视图中添加边距，可以用于给子项添加空白空间。
- SliverPersistentHeader: 创建一个固定的持久化头部，可以在滚动时保持可见。
- SliverAnimatedList: 创建一个可以添加和删除项的动画列表。
- SliverAnimatedOpacity: 用于在滚动视图中的不透明度更改时添加动画效果。
- SliverGrid.extent 和 SliverGrid.count: 分别用于创建具有相同尺寸的网格和具有相同数量的列的网格。
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
