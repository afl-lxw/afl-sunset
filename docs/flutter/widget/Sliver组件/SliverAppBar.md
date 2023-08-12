# SliverAppBar

SliverAppBar 是 Flutter 中用于在 CustomScrollView 内部实现顶部可折叠的应用栏组件。它通常用于创建具有滚动效果的应用栏，以及与 CustomScrollView 和其他滚动组件一起使用。

```dart
const SliverAppBar({
    super.key,
    this.leading, // 应用栏最左侧的 widget，例如返回按钮
    this.automaticallyImplyLeading = true, // 是否自动显示默认的 leading
    this.title, // 应用栏标题的 widget
    this.actions, // 应用栏右侧的操作按钮（action widgets）
    this.flexibleSpace, // 应用栏中的可折叠部分，通常包含背景图片或其他内容
    this.bottom, // 应用栏底部的 widget，例如 TabBar
    this.elevation, // 应用栏的阴影高度
    this.scrolledUnderElevation, // 下滚时的阴影高度
    this.shadowColor, // 阴影的颜色
    this.surfaceTintColor, // 表面的背景颜色
    this.forceElevated = false, // 是否强制显示阴影，即使内容未滚动到应用栏下方
    this.backgroundColor, // 应用栏的背景色
    this.foregroundColor, // 前景色，用于标题、图标等
    @Deprecated(
      'This property is no longer used, please use systemOverlayStyle instead. '
      'This feature was deprecated after v2.4.0-0.0.pre.',
    )
    this.brightness, // 应用栏的亮度
    this.iconTheme, // 图标的主题样式
    this.actionsIconTheme, // 操作图标的主题样式
    @Deprecated(
      'This property is no longer used, please use toolbarTextStyle and titleTextStyle instead. '
      'This feature was deprecated after v2.4.0-0.0.pre.',
    )
    this.textTheme, // 文本样式
    this.primary = true, // 是否为主要的应用栏
    this.centerTitle, // 是否居中显示标题
    this.excludeHeaderSemantics = false, // 是否排除头部语义
    this.titleSpacing, // 标题周围的间距
    this.collapsedHeight, // 折叠高度
    this.expandedHeight, // 可展开高度
    this.floating = false, // 是否将应用栏设置为悬浮状态
    this.pinned = false, // 是否固定应用栏在顶部
    this.snap = false, // 是否以“snap”方式展开或折叠应用栏
    this.stretch = false, // 是否拉伸应用栏内容
    this.stretchTriggerOffset = 100.0, // 拉伸触发偏移
    this.onStretchTrigger, // 拉伸触发回调
    this.shape, // 形状
    this.toolbarHeight = kToolbarHeight, // 工具栏高度
    this.leadingWidth, // leading 宽度
    @Deprecated(
      'This property is obsolete and is false by default. '
      'This feature was deprecated after v2.4.0-0.0.pre.',
    )
    this.backwardsCompatibility, // 是否与旧版本兼容
    this.toolbarTextStyle, // 工具栏文本样式
    this.titleTextStyle, // 标题文本样式
    this.systemOverlayStyle, // 系统覆盖样式
})
```

## 用法和使用场景

- 适用于需要在滚动视图中实现可折叠应用栏的情况。
- 常用于实现详情页面、新闻列表、个人资料等需要在用户向下滚动时动态展开应用栏的场景。

## 属性示例

```dart
SliverAppBar(
  leading: IconButton(
    icon: Icon(Icons.arrow_back),
    onPressed: () {
      // 返回操作
    },
  ),
  title: Text('App Bar Title'),
  actions: [
    IconButton(
      icon: Icon(Icons.search),
      onPressed: () {
        // 搜索操作
      },
    ),
    IconButton(
      icon: Icon(Icons.more_vert),
      onPressed: () {
        // 更多操作
      },
    ),
  ],
  flexibleSpace: FlexibleSpaceBar(
    background: Image.asset(
      'assets/header_image.png',
      fit: BoxFit.cover,
    ),
  ),
  expandedHeight: 200,
  floating: false,
  pinned: true,
  snap: false,
  elevation: 4,
  forceElevated: false,
)
```

## 注意事项

- SliverAppBar 必须作为 CustomScrollView 的子项之一才能正确工作。
- flexibleSpace 中的 FlexibleSpaceBar 通常用于添加背景图片、标题等内容，可以使用 background 属性来设置。
- 当使用 floating 或 snap 时，应保证 expandedHeight 的值大于零，以确保可折叠部分有足够的空间来展开和折叠。
- 当 floating 为 true 时，应用栏将在用户向下滚动时变为浮动状态。
- 当 snap 为 true 时，应用栏在用户向上滚动时会以 "snap" 方式折叠或展开。
- pinned 为 true 时，应用栏将保持钉住在顶部，无论用户是否滚动。
- elevation 属性可用于设置应用栏的阴影高度。
- forceElevated 为 true 时，无论内容是否滚动，应用栏都会显示阴影。
- 总之，SliverAppBar 是一个非常强大且灵活的组件，可用于实现各种滚动应用程序的头部。它的属性和配置选项允许您根据需要自定义应用栏的外观和行为。
