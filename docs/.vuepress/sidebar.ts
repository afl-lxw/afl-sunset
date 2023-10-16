import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/web/javascript/': [
    '/web/javascript/设计模式.md',
    '/web/javascript/JS高级.md',
    '/web/javascript/Zepto.md',
    {
      text: 'Sass、Less',
      collapsible: true,
      children: [
        '/web/javascript/Less and Sass/Less and Sass.md',
        '/web/javascript/Less and Sass/1、相关介绍.md',
        '/web/javascript/Less and Sass/2、环境配置.md',
        '/web/javascript/Less and Sass/3、SassScript.md',
      ]
    },
    {
      text: 'html5',
      collapsible: true,
      children: [
        '/web/javascript/html5/HTML5.md',
        '/web/javascript/html5/弹性盒子.md',
      ]
    },
    {
      text: '移动端',
      collapsible: true,
      children: [
        '/web/javascript/移动端/移动端.md',
      ]
    },
    {
      text: 'ES6',
      collapsible: true,
      children: [
        '/web/javascript/eS6/01.ECMAScript 6 简介.md',
        '/web/javascript/eS6/02.let与const.md',
        '/web/javascript/eS6/03 解构赋值.md',
        '/web/javascript/eS6/04 字符串新特性.md',
        '/web/javascript/eS6/05 字符串新方法.md',
        '/web/javascript/eS6/06 数值新特性.md',
        '/web/javascript/eS6/07 ES5 数组变化.md',
        '/web/javascript/eS6/08 数组新特性.md',
        '/web/javascript/eS6/09 对象新特性.md',
        '/web/javascript/eS6/10 对象新方法.md',
        '/web/javascript/eS6/11 函数新方法.md',
        '/web/javascript/eS6/12 新增数据类型和数据结构.md',
        '/web/javascript/eS6/13 遍历器.md',
        '/web/javascript/eS6/14 生成器 Generator.md',
        '/web/javascript/eS6/15 Proxy.md',
        '/web/javascript/eS6/16 Peflect.md',
        '/web/javascript/eS6/17 Class 基本语法.md',
        '/web/javascript/eS6/18 Class 的继承.md',
      ]
    },
  ],
  "/web/typescript/": [
    '/web/typescript/基本数据类型.md',
    '/web/typescript/范型.md',
    '/web/typescript/infer.md',
    '/web/typescript/协变逆变.md',
    {
      text: 'Utility-Types',
      collapsible: true,
      children: [
        '/web/typescript/UtilityTypes/Partial.md',
        '/web/typescript/UtilityTypes/Record.md',
        '/web/typescript/UtilityTypes/Exclude.md',
        '/web/typescript/UtilityTypes/Omit.md',
        '/web/typescript/UtilityTypes/Required.md',
        '/web/typescript/UtilityTypes/Readonly.md',
        '/web/typescript/UtilityTypes/Pick.md',
        '/web/typescript/UtilityTypes/Capitalize.md',
        '/web/typescript/UtilityTypes/ConstructorParameters.md',
        '/web/typescript/UtilityTypes/Extract.md',
        '/web/typescript/UtilityTypes/ThisType.md',
        '/web/typescript/UtilityTypes/InstanceType.md',
        '/web/typescript/UtilityTypes/NonNullable.md',
        '/web/typescript/UtilityTypes/OmitThisParameter.md',
        '/web/typescript/UtilityTypes/Parameters.md',
        '/web/typescript/UtilityTypes/ReturnType.md',
        '/web/typescript/UtilityTypes/ThisParameterType.md',
        '/web/typescript/UtilityTypes/Uncapitalize.md',
        '/web/typescript/UtilityTypes/Uppercase.md',
        '/web/typescript/UtilityTypes/Utility Types.md',
      ]
    },
  ],
  "/web/threejs/": [
    '/web/threejs/',
    '/web/threejs/three.JS库',

    {
      text: 'react-three-fiber',
      collapsible: true,
      children: [
        '/web/threejs/react-three-fiber/index.md',
        '/web/threejs/react-three-fiber/use.md',
        '/web/threejs/react-three-fiber/canvas.md',
        '/web/threejs/react-three-fiber/对象、属性和构造函数参数.md',
        '/web/threejs/react-three-fiber/hooks.md',
        '/web/threejs/react-three-fiber/event.md',
        '/web/threejs/react-three-fiber/Additional-Exports.md',
        '/web/threejs/react-three-fiber/扩展性能.md',
        '/web/threejs/react-three-fiber/性能陷阱.md',
        '/web/threejs/react-three-fiber/加载模型.md',
        '/web/threejs/react-three-fiber/加载纹理.md',
        // '/web/threejs/react-three-fiber/基本动画.md',
      ]
    },
    {
      text: 'react-three-deri',
      collapsible: true,
      children: [
        '/web/threejs/react-three-deri/index.md',
      ]
    }
  ],
  "/web/webGL/": [
    '/web/webGL/',
    '/web/webGL/原理.md',
    {
      text: 'Canvas',
      collapsible: true,
      children: [
        '/web/webGL/Canvas/canvas.md',
        '/web/webGL/Canvas/konva.md',
      ]
    },
  ],
  "/web/cI-CD/": [
    {
      text: 'CICD',
      collapsible: true,
      children: [
        '/web/cI-CD/',
      ]
    },
  ],
  "/web/vue/": [
    "/web/vue/vuex",
    "/web/vue/vue组件之间通信方式",
    {
      text: 'vue-router',
      collapsible: true,
      children: [
        '/web/vue/vue-router/1-vue-router',
        '/web/vue/vue-router/2-异步请求',
        '/web/vue/vue-router/3-devTools',
        '/web/vue/vue-router/4-动态路由',
        '/web/vue/vue-router/5-queryString',
        '/web/vue/vue-router/6-路由守卫',
        '/web/vue/vue-router/7-嵌套路由',
        '/web/vue/vue-router/8-重定向与别名',
        '/web/vue/vue-router/9-路由组件传参',
        '/web/vue/vue-router/10-路由数据获取',
        '/web/vue/vue-router/11-路由动效',
        '/web/vue/vue-router/12-滚动行为',
        '/web/vue/vue-router/13-路由元信息',
        '/web/vue/vue-router/14-路由懒加载',
      ]
    },
  ],
  "/web/webpack/": [
    {
      text: 'Webpack',
      collapsible: true,
      children: [
        '/web/webpack/',
        '/web/webpack/构建流程',
        '/web/webpack/理解',
        '/web/webpack/提高构建速度',
        '/web/webpack/优化前端性能',
        '/web/webpack/Loader',
        '/web/webpack/Loader和Plugin',
        '/web/webpack/Plugin',
        '/web/webpack/webpack_proxy',
        '/web/webpack/webpack热更新',
      ]
    },
  ],
  "/web/react/": [
    {
      text: 'React',
      collapsible: true,
      children: [
        '/web/react/',
      ]
    },
  ],
  '/service/node/': [
    {
      text: 'nodejs',
      collapsible: true,
      children: [
        '/service/node/',
      ]
    },
  ],
  '/service/go/': [
    {
      text: 'Golang',
      collapsible: true,
      children: [
        '/service/go/',
      ]
    },
    {
      text: 'Gin',
      collapsible: true,
      children: [
        '/service/go/gin/',
      ]
    },
  ],
  '/service/docker/': [
    {
      text: 'Docker',
      collapsible: true,
      children: [
        '/service/docker/',
      ]
    },
  ],
  '/service/mongodb/': [
    '/service/mongodb/',
    // {
    //   text: 'Mongodb',
    //   collapsible: true,
    //   children: [
    //     '/service/mongodb/',
    //   ]
    // },
  ],
  '/flutter/': [
    '/flutter/路由导航.md',
    {
      text: 'Dart',
      collapsible: true,
      children: [
        '/flutter/dart/',
        '/flutter/dart/数据类型.md',
        '/flutter/dart/变量定义.md',
        '/flutter/dart/class.md',
        '/flutter/dart/list.md',
        '/flutter/dart/map.md',

      ]
    },
    {
      text: 'widget',
      collapsible: true,
      children: [
        '/flutter/widget/',
        '/flutter/widget/组件导航.md',

        {
          text: '基础组件',
          collapsible: true,
          children: [
            '/flutter/widget/基础组件/Container.md',
            '/flutter/widget/基础组件/Scaffold、Appbar.md',
            '/flutter/widget/基础组件/Row、Column.md',
            '/flutter/widget/基础组件/Image、Icon.md',
            '/flutter/widget/基础组件/Text.md',
            '/flutter/widget/基础组件/TextField.md',
            '/flutter/widget/基础组件/Form.md',
            '/flutter/widget/基础组件/Switch、Checkbox.md',

          ]
        },
        {
          text: '滚动组件',
          collapsible: true,
          children: [
            '/flutter/widget/滚动组件/ListView.md',
            '/flutter/widget/滚动组件/GridView.md',
            '/flutter/widget/滚动组件/SingleChildScrollView.md',
            '/flutter/widget/滚动组件/CustomScrollView.md',
            '/flutter/widget/滚动组件/NestedScrollView.md',
            '/flutter/widget/滚动组件/PageView.md',
            '/flutter/widget/滚动组件/RefreshIndicator.md',
            '/flutter/widget/滚动组件/Scrollable.md',
            '/flutter/widget/滚动组件/NotificationListener.md',
            '/flutter/widget/滚动组件/Scrollbar.md',
            '/flutter/widget/滚动组件/ScrollConfiguration.md',
            '/flutter/widget/滚动组件/AnimatedList.md',
          ]
        },
        {
          text: 'Sliver组件',
          collapsible: true,
          children: [
            '/flutter/widget/Sliver组件/',
            '/flutter/widget/Sliver组件/SliverAppBar.md',
            '/flutter/widget/Sliver组件/SliverList.md',
            '/flutter/widget/Sliver组件/SliverGrid.md',
            '/flutter/widget/Sliver组件/SliverPadding.md',
            '/flutter/widget/Sliver组件/SliverAnimatedOpacity.md',
            '/flutter/widget/Sliver组件/SliverAnimatedList.md',
            '/flutter/widget/Sliver组件/SliverToBoxAdapter.md',
            '/flutter/widget/Sliver组件/SliverFillViewport.md',
            '/flutter/widget/Sliver组件/sliverChildBuilderDelegate.md',
            '/flutter/widget/Sliver组件/SliverFixedExtentList.md',
            '/flutter/widget/Sliver组件/SliverFillRemaining.md',
            '/flutter/widget/Sliver组件/SliverPersistentHeader.md',
            '/flutter/widget/Sliver组件/SliverPrototypeExtentList.md',
            '/flutter/widget/Sliver组件/SliverOpacity.md',
            '/flutter/widget/Sliver组件/SliverIgnorePointer.md',
            '/flutter/widget/Sliver组件/SliverOverlapInjector.md',
            '/flutter/widget/Sliver组件/SliverOverlapAbsorber.md',
            '/flutter/widget/Sliver组件/SliverAnimatedPadding.md',
            '/flutter/widget/Sliver组件/SliverAnimatedPositioned.md',

          ]
        },
        {
          text: '按钮组件',
          collapsible: true,
          children: [
            '/flutter/widget/按钮组件/ButtonBar.md',
            '/flutter/widget/按钮组件/DropdownButton.md',
            '/flutter/widget/按钮组件/FlatButton.md',
            '/flutter/widget/按钮组件/FloatingActionButton.md',
            '/flutter/widget/按钮组件/IconButton.md',
            '/flutter/widget/按钮组件/PopupMenuButton.md',
            '/flutter/widget/按钮组件/RaisedButton.md',
          ]
        },
        {
          text: '布局组件',
          collapsible: true,
          children: [
            '/flutter/widget/布局组件/',
            '/flutter/widget/布局组件/constraints布局约束.md',
            '/flutter/widget/布局组件/Align.md',
            '/flutter/widget/布局组件/Flow.md',
            '/flutter/widget/布局组件/Wrap.md',
            '/flutter/widget/布局组件/Positioned.md',
            '/flutter/widget/布局组件/Stack.md',
            '/flutter/widget/布局组件/LayoutBuilder.md',

          ]
        },
        {
          text: '动画组件',
          collapsible: true,
          children: [
            '/flutter/widget/动画组件/index.md',
            '/flutter/widget/动画组件/AlignTransition.md',
            '/flutter/widget/动画组件/AnimatedBuilder.md',
            '/flutter/widget/动画组件/AnimatedCrossFade.md',
            '/flutter/widget/动画组件/AnimatedDefaultTextStyle.md',
            '/flutter/widget/动画组件/AnimatedListState.md',
            '/flutter/widget/动画组件/AnimatedModalBarrier.md',
            '/flutter/widget/动画组件/AnimatedOpacity.md',
            '/flutter/widget/动画组件/AnimatedPhysicalModel.md',
            '/flutter/widget/动画组件/AnimatedPositioned.md',
            '/flutter/widget/动画组件/AnimatedSize.md',
            '/flutter/widget/动画组件/AnimatedSwitcher.md',
            '/flutter/widget/动画组件/AnimatedWidget.md',
            '/flutter/widget/动画组件/AnimatedTheme.md',
            '/flutter/widget/动画组件/DecoratedBoxTransition.md',
            '/flutter/widget/动画组件/FadeTransition.md',
            '/flutter/widget/动画组件/Hero.md',
            '/flutter/widget/动画组件/PositionedTransition.md',
            '/flutter/widget/动画组件/PageRouteBuilder.md',
            '/flutter/widget/动画组件/RotationTransition.md',
            '/flutter/widget/动画组件/ScaleTransition.md',
            '/flutter/widget/动画组件/SizeTransition.md',
            '/flutter/widget/动画组件/SlideTransition.md',
            '/flutter/widget/动画组件/Transform.md',
          ]
        },
        {
          text: '手势组件',
          collapsible: true,
          children:[
            '/flutter/widget/手势组件/index.md',
            '/flutter/widget/手势组件/Dismissible.md',
            '/flutter/widget/手势组件/InkWell.md',
            '/flutter/widget/手势组件/Draggable.md',
            '/flutter/widget/手势组件/DragTarget.md',
            '/flutter/widget/手势组件/GestureDetector.md',
            '/flutter/widget/手势组件/LongPressDraggable.md',
            '/flutter/widget/手势组件/DraggableScrollableSheet.md',
            '/flutter/widget/手势组件/InteractiveViewer.md',
            '/flutter/widget/手势组件/Listener.md',
            '/flutter/widget/手势组件/RawGestureDetector.md',
          ]
        },
        {
          text: '导航和路由Widget',
          collapsible: true,
          children: [
            '/flutter/widget/导航和路由Widget/index.md',
   
          ]
        },
        {
          text: '画布和绘图Widget',
          collapsible: true,
          children: [
            '/flutter/widget/画布和绘图Widget/index.md',

          ]
        },
        {
          text: '样式Widget',
          collapsible: true,
          children: [
            '/flutter/widget/样式Widget/index.md',
          ]
        },
        {
          text: '其他组件',
          collapsible: true,
          children: [
            '/flutter/widget/其他组件/Canvas.md',
            '/flutter/widget/其他组件/CustomPaint.md',
            '/flutter/widget/其他组件/BackdropFilter.md',
            '/flutter/widget/其他组件/ColorFiltered.md',
            '/flutter/widget/其他组件/BottomNavigationBar.md',
            '/flutter/widget/其他组件/ClipRect.md',

            '/flutter/widget/其他组件/Checkbox.md',
            '/flutter/widget/其他组件/CheckboxListTile.md',//
            '/flutter/widget/其他组件/Switch.md',
            '/flutter/widget/其他组件/Slider.md',
            '/flutter/widget/其他组件/Chip.md',//
            '/flutter/widget/其他组件/DataTable.md',//
            '/flutter/widget/其他组件/DatePicker.md',//
            '/flutter/widget/其他组件/Dialog.md',//
            '/flutter/widget/其他组件/Divider.md',//
            '/flutter/widget/其他组件/Drawer.md',//
            '/flutter/widget/其他组件/ExpansionPanel.md',//
            '/flutter/widget/其他组件/ExpansionTile.md',//
            '/flutter/widget/其他组件/FadeInImage.md',//
            '/flutter/widget/其他组件/FlexibleSpaceBar.md',
            '/flutter/widget/其他组件/SliverFillRemaining.md',
            '/flutter/widget/其他组件/ListTile.md',
          ]
        }
      ]
    },
    {
      text: 'widget基础类',
      collapsible: true,
      children: [
        '/flutter/widget基础类/',
        '/flutter/widget基础类/AutomaticKeepAliveClientMixin.md',
        '/flutter/widget基础类/ChangeNotifier.md',
        '/flutter/widget基础类/FocusManager.md',
        '/flutter/widget基础类/GestureRecognizer.md',
        '/flutter/widget基础类/NotificationListener.md',
        '/flutter/widget基础类/RefreshIndicatorState.md',
        '/flutter/widget基础类/RestorableProperty.md',
        '/flutter/widget基础类/RestorableState.md',
        '/flutter/widget基础类/RouteAware.md',
        '/flutter/widget基础类/SingleTickerProviderStateMixin.md',
        '/flutter/widget基础类/TickerProviderStateMixin.md',
        '/flutter/widget基础类/WidgetsBindingObserver.md',
        '/flutter/widget基础类/WidgetsLocalizationsDelegate.md',

      ]
    },
    {
      text: 'Animation类',
      collapsible: true,
      children: [
        '/flutter/Animation/',
        '/flutter/Animation/Tween.md',
        '/flutter/Animation/AnimatedWidgetBaseState.md',
        '/flutter/Animation/AnimationController.md',
        '/flutter/Animation/CupertinoPageRoute.md',
        '/flutter/Animation/CurvedAnimation.md',

      ]
    },
    {
      text: 'controller',
      collapsible: true,
      children: [
        '/flutter/controller/',
        '/flutter/controller/ScrollController.md',
        '/flutter/controller/TabController.md',
        '/flutter/controller/FocusManager.md',
        // '/flutter/controller/AnimationController.md',
        '/flutter/controller/Future.md',
        '/flutter/controller/ScrollNotification.md',
        '/flutter/controller/ScrollPosition.md',
        '/flutter/controller/ScrollPhysics.md',
        '/flutter/controller/ScrollMetrics.md',
        '/flutter/controller/ScrollIncrementDetails.md',
        '/flutter/controller/ScrollHoldController.md',
        '/flutter/controller/ScrollActivity.md',
        '/flutter/controller/ScrollDragController.md',
        '/flutter/controller/ScrollActivityDelegate.md',
        '/flutter/controller/StreamBuilder.md',
        '/flutter/controller/StreamController.md',
        '/flutter/controller/StreamSubscription.md',
        '/flutter/controller/TabBarView.md',
        '/flutter/controller/ValueNotifier.md',
        '/flutter/controller/ValueListenableBuilder.md',
        '/flutter/controller/ValueListenable.md',
      ]
    },
    {
      text: 'package',
      collapsible: true,
      children: [
        '/flutter/package/index',
        {
          text: 'getX',
          collapsible: true,
          children: [
            '/flutter/package/getX/',
          ]
        },
        {
          text: 'provider',
          collapsible: true,
          children: [
            '/flutter/package/provider/',
          ]
        },
        {
          text: 'chewie',
          collapsible: true,
          children: [
            '/flutter/package/chewie/',
          ]
        },
      ]
    },
  ],
  '/docMD/git/': [
    '/docMD/git/版本控制',
    '/docMD/git/分支新建与合并',
    '/docMD/git/提交规范',
  ],
  '/docMD/mac/': [
    '/docMD/mac/菜单大小调整',
    '/docMD/mac/微信双开',

  ],
  '/docMD/order/': [
    '/docMD/order/',
  ]
}