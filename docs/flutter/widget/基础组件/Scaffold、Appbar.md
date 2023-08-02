# Scaffold、Appbar

## Scaffold

Scaffold是Flutter中常用的基本布局小部件，它提供了一个标准的应用程序界面结构，包含了一些常用的界面元素，如顶部栏、底部栏、浮动按钮等。Scaffold通常用作应用程序的根部件，用于组织和布局其他小部件。下面是Scaffold的常用属性及其功能：

### Scaffold用法

```dart
Scaffold(
  appBar: AppBar, // 顶部栏
  body: Widget, // 主体内容
  floatingActionButton: FloatingActionButton, // 浮动按钮
  bottomNavigationBar: BottomNavigationBar, // 底部栏
  drawer: Drawer, // 抽屉菜单
  endDrawer: Drawer, // 末端抽屉菜单
  drawerScrimColor: Color, // 抽屉菜单的蒙版颜色
  backgroundColor: Color, // 背景颜色
  resizeToAvoidBottomInset: bool, // 是否自动调整大小以避免键盘遮挡
)
```

### Scaffold属性及功能

1. appBar（AppBar）：顶部栏。
功能：用于设置页面顶部的导航栏，通常包含标题、操作按钮等。

示例：

```dart
Scaffold(
  appBar: AppBar(
    title: Text('My App'),
    actions: [
      IconButton(
        icon: Icon(Icons.settings),
        onPressed: () {
          // 点击设置按钮的回调函数
        },
      ),
    ],
  ),
  body: ...,
)
```

2.body（Widget）：主体内容。
功能：用于设置页面的主要内容。

示例：

```dart
Scaffold(
  appBar: ...,
  body: Center(
    child: Text('Hello, Flutter!'),
  ),
)
```

3.floatingActionButton（FloatingActionButton）：浮动按钮。
功能：用于设置浮动在页面上的操作按钮。

示例：

```dart
Scaffold(
  appBar: ...,
  body: ...,
  floatingActionButton: FloatingActionButton(
    onPressed: () {
      // 点击按钮的回调函数
    },
    child: Icon(Icons.add),
  ),
)
```

4.bottomNavigationBar（BottomNavigationBar）：底部栏。
功能：用于设置底部的导航栏。

示例：

```dart
Scaffold(
  appBar: ...,
  body: ...,
  bottomNavigationBar: BottomNavigationBar(
    items: [
      BottomNavigationBarItem(
        icon: Icon(Icons.home),
        label: 'Home',
      ),
      BottomNavigationBarItem(
        icon: Icon(Icons.settings),
        label: 'Settings',
      ),
    ],
  ),
)
```

5.drawer（Drawer）：抽屉菜单。
功能：用于设置左侧抽屉式导航菜单。

示例：

```dart
Scaffold(
  appBar: ...,
  body: ...,
  drawer: Drawer(
    child: ListView(
      children: [
        ListTile(
          leading: Icon(Icons.home),
          title: Text('Home'),
          onTap: () {
            // 点击菜单项的回调函数
          },
        ),
        ListTile(
          leading: Icon(Icons.settings),
          title: Text('Settings'),
          onTap: () {
            // 点击菜单项的回调函数
          },
        ),
      ],
    ),
  ),
)
```

6.endDrawer（Drawer）：末端抽屉菜单。
功能：用于设置右侧末端抽屉式导航菜单。

示例：

```dart
Scaffold(
  appBar: ...,
  body: ...,
  endDrawer: Drawer(
    child: ...,
  ),
)
```

7.drawerScrimColor（Color）：抽屉菜单的蒙版颜色。
功能：设置抽屉菜单的蒙版颜色，用于控制菜单展开时背后页面的遮罩效果。

示例：

```dart
Scaffold(
  appBar: ...,
  body: ...,
  drawerScrimColor: Colors.black54,
)
```

8.backgroundColor（Color）：背景颜色。
功能：设置整个页面的背景颜色。

示例：

```dart
Scaffold(
  appBar: ...,
  body: ...,
  backgroundColor: Colors.white,
)
```

9 resizeToAvoidBottomInset（bool）：是否自动调整大小以避免键盘遮挡。
功能：控制是否自动调整页面大小，以防止键盘遮挡页面内容。

示例：

```dart
Scaffold(
  appBar: ...,
  body: ...,
  resizeToAvoidBottomInset: false,
)
```

### Scaffold注意事项

- 在Scaffold中，appBar、body和floatingActionButton是常用的属性，用于构建基本的页面布局。
- 当使用抽屉菜单（drawer或endDrawer）时，要注意页面的布局和交互，确保用户可以方便地打开和关闭菜单。
- bottomNavigationBar用于设置底部的导航栏，在使用时要注意与其他页面内容的配合，避免重叠和遮挡问题。
- backgroundColor用于设置页面的背景颜色，可以根据设计需求来调整页面的整体风格和视觉效果。
- resizeToAvoidBottomInset用于控制页面是否自动调整大小以避免键盘遮挡内容。在表单输入等场景下，可以设置为true来避免键盘遮挡输入框。

## Appbar

AppBar是Flutter中用于显示应用程序顶部栏的小部件，它通常包含标题、操作按钮和导航菜单等。AppBar是Scaffold的一个重要组成部分，用于设置应用程序的导航栏。下面是AppBar的常用属性及其功能：

### Appbar用法

```dart
AppBar(
  Key? key,
  Widget? leading, // 在标题之前显示的小部件，通常是返回按钮
  bool automaticallyImplyLeading = true, // 是否自动显示leading，默认为true
  Widget? title, // 标题
  List<Widget>? actions, // 在标题之后显示的小部件，通常是操作按钮
  PreferredSizeWidget? bottom, // 底部栏，通常用于TabBar
  double? elevation, // 阴影高度
  Color? shadowColor, // 阴影颜色
  ShapeBorder? shape, // 标题栏的形状
  Color? backgroundColor, // 背景颜色
  Brightness? brightness, // 标题栏的亮度
  IconThemeData? iconTheme, // 图标主题样式
  TextTheme? textTheme, // 文本主题样式
  bool centerTitle = true, // 标题是否居中显示，默认为true
  bool excludeHeaderSemantics = false, // 是否排除头部的语义，默认为false
  bool backwardsCompatibility = true, // 是否启用向后兼容性，默认为true
  bool toolbarOpacity = 1.0, // 工具栏的不透明度，默认为1.0
  double? toolbarHeight, // 工具栏的高度，默认为56.0
  double? leadingWidth, // leading部件的宽度
  bool primary = true, // 是否适配主体的Padding，默认为true
  double? titleSpacing, // 标题与leading和actions之间的间距
  double? toolbarTextStyle, // 工具栏上文本的样式
  double? titleTextStyle, // 标题文本的样式
  String? systemOverlayStyle, // 系统覆盖样式
)
```

### Appbar属性及功能

1. leading（Widget）：在标题之前显示的小部件，通常是返回按钮。
功能：用于设置标题栏左侧的小部件，通常用于返回上一级页面。

示例：

```dart
AppBar(
  leading: IconButton(
    icon: Icon(Icons.arrow_back),
    onPressed: () {
      // 返回上一级页面的回调函数
    },
  ),
  title: Text('My App'),
)
```

2.automaticallyImplyLeading（bool）：是否自动显示leading。默认为true。
功能：控制是否自动显示leading部件。当没有设置leading时，如果此属性为true，则自动显示一个返回按钮。

示例：

```dart
AppBar(
  automaticallyImplyLeading: false,
  title: Text('My App'),
)
```

3.title（Widget）：标题。
功能：用于设置标题栏的标题文本。

示例：

```dart
AppBar(
  title: Text('My App'),
)
```

4.actions`（List<Widget>）`：在标题之后显示的小部件，通常是操作按钮。
功能：用于设置标题栏右侧的小部件，通常用于展示操作按钮。

示例：

```dart
AppBar(
  title: Text('My App'),
  actions: [
    IconButton(
      icon: Icon(Icons.settings),
      onPressed: () {
        // 点击设置按钮的回调函数
      },
    ),
  ],
)
```

5.bottom（PreferredSizeWidget）：底部栏，通常用于TabBar。
功能：用于在标题栏下方显示底部的小部件，如TabBar。

示例：

```dart
AppBar(
  title: Text('My App'),
  bottom: TabBar(
    tabs: [
      Tab(text: 'Tab 1'),
      Tab(text: 'Tab 2'),
    ],
  ),
)
```

6.elevation（double）：阴影高度。
功能：设置标题栏的阴影高度。

示例：

```dart
AppBar(
  title: Text('My App'),
  elevation: 4,
)
```

7.shadowColor（Color）：阴影颜色。
功能：设置标题栏的阴影颜色。

示例：

```dart
AppBar(
  title: Text('My App'),
  elevation: 4,
  shadowColor: Colors.black,
)
```

8.shape（ShapeBorder）：标题栏的形状。
功能：用于设置标题栏的形状，如圆角矩形。

示例：

```dart
AppBar(
  title: Text('My App'),
  shape: RoundedRectangleBorder(
    borderRadius: BorderRadius.circular(10),
  ),
)
```

9.backgroundColor（Color）：背景颜色。
功能：设置标题栏的背景颜色。

示例：

```dart
AppBar(
  title: Text('My App'),
  backgroundColor: Colors.blue,
)
```

10.brightness（Brightness）：标题栏的亮度。
功能：控制标题栏的亮度，可以设置为Brightness.light（浅色）或Brightness.dark（深色）。

示例：

```dart
AppBar(
  title: Text('My App'),
  brightness: Brightness.dark,
)
```

### Appbar注意事项

- AppBar通常用作Scaffold的appBar属性，用于设置页面的顶部导航栏。
- leading通常用于设置返回按钮，可以使用IconButton或其他小部件来自定义返回按钮的样式和功能。
- title用于设置页面的标题，可以使用Text小部件来显示文本标题。
- actions用于设置操作按钮，可以添加多个小部件，如IconButton
