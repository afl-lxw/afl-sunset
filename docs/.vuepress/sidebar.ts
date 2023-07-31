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
            '/flutter/widget/基础组件/Image、Text、Icon.md',

          ]
        }
      ]
    },
    {
      text: 'Animation',
      collapsible: true,
      children: [
        '/flutter/Animation/',
      ]
    },
    {
      text: 'GetX',
      collapsible: true,
      children: [
        '/flutter/GetX/',
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