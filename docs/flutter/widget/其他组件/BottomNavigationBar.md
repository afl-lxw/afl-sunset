# BottomNavigationBar

BottomNavigationBar 是一个用于创建底部导航栏的组件，用于在应用程序中切换不同的页面或功能。下面是 BottomNavigationBar 的所有属性的详细介绍：

## 属性列表

- key: 组件的唯一标识，用于控制组件的状态和刷新。
- items: 必需属性，定义底部导航栏的每个导航项。是一个 BottomNavigationBarItem 对象的列表，用于指定每个导航项的图标、标签等信息。
- onTap: 当用户点击导航项时触发的回调函数，该函数接收一个 int 类型参数，表示点击的导航项的索引。
- currentIndex: 当前选中的导航项的索引，默认为 0。
- elevation: 导航栏的阴影高度，用于创建底部导航栏的投影效果。
- type: 导航栏的类型，可以是 BottomNavigationBarType.fixed（固定类型）或 BottomNavigationBarType.shifting（滑动类型）。
- fixedColor: 固定模式下选中的导航项图标和文本的颜色。
- backgroundColor: 导航栏的背景颜色。
- iconSize: 导航项中图标的大小。
- selectedItemColor: 选中的导航项图标和文本的颜色。
- unselectedItemColor: 未选中的导航项图标和文本的颜色。
- selectedIconTheme: 选中的导航项图标的主题样式。
- unselectedIconTheme: 未选中的导航项图标的主题样式。
- selectedFontSize: 选中的导航项文本的字体大小。
- unselectedFontSize: 未选中的导航项文本的字体大小。
- selectedLabelStyle: 选中的导航项文本的样式。
- unselectedLabelStyle: 未选中的导航项文本的样式。
- showSelectedLabels: 是否显示选中的导航项的文本。
- showUnselectedLabels: 是否显示未选中的导航项的文本。
- mouseCursor: 鼠标悬停时的光标形状。
- enableFeedback: 是否启用触觉反馈。
- landscapeLayout: 导航栏在横屏模式下的布局样式。

## 用法和功能

BottomNavigationBar 用于创建一个底部导航栏，通常用于切换应用程序的不同页面或功能。用户可以通过点击导航项来切换不同的页面。根据 type 属性的不同，底部导航栏可以是固定类型（fixed），所有导航项显示相同的宽度和颜色，或者是滑动类型（shifting），选中的导航项会有更大的宽度和颜色。

## 例子

```dart
BottomNavigationBar(
  currentIndex: _selectedIndex,
  onTap:_onItemTapped,
  items: <BottomNavigationBarItem>[
    BottomNavigationBarItem(
      icon: Icon(Icons.home),
      label: 'Home',
    ),
    BottomNavigationBarItem(
      icon: Icon(Icons.search),
      label: 'Search',
    ),
    BottomNavigationBarItem(
      icon: Icon(Icons.person),
      label: 'Profile',
    ),
  ],
)
```

在上面的例子中，我们创建了一个包含三个导航项的底部导航栏，分别代表首页、搜索和个人资料页面。根据用户点击不同的导航项，触发 _onItemTapped 回调函数进行页面切换。

## 注意事项

- 导航项的数量应该保持一致，不要频繁改变导航项的数量，以免用户混淆。
- 当使用滑动类型（shifting）时，每个导航项的背景色会根据 selectedItemColor 进行变化，因此需要选择合适的颜色以保证可读性。
- 不同类型的底部导航栏可能在不同的场景中更加适用，固定类型适用于少量导航项，滑动类型适用于较多导航项。
- 根据用户的反馈和设计准则，选择合适的图标、文本和颜色，以创建用户友好的导航栏。
- 如果需要在底部导航栏下方添加其他组件（例如播放器组件），可以使用 Stack 来叠加组件。
- 总之，BottomNavigationBar 是一个常用的 Flutter 组件，用于创建美观的底部导航栏，方便用户切换不同页面或功能。根据应用程序的需求和设计，您可以灵活地定制导航项的样式和功能。
