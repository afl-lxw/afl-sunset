import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/web/Javascript/': [
    '/web/Javascript/设计模式.md',
    '/web/Javascript/JS高级.md',
    '/web/Javascript/Zepto.md',
    {
      text: 'Sass、Less',
      collapsible: true,
      children: [
        '/web/Javascript/Less and Sass/Less and Sass.md',
        '/web/Javascript/Less and Sass/1、相关介绍.md',
        '/web/Javascript/Less and Sass/2、环境配置.md',
        '/web/Javascript/Less and Sass/3、SassScript.md',
      ]
    },
    {
      text: 'html5',
      collapsible: true,
      children: [
        '/web/Javascript/HTML5/HTML5.md',
        '/web/Javascript/HTML5/弹性盒子.md',
      ]
    },
    {
      text: '移动端',
      collapsible: true,
      children: [
        '/web/Javascript/移动端/移动端.md',
      ]
    },
    {
      text: 'ES6',
      collapsible: true,
      children: [
        '/web/Javascript/ES6/01.ECMAScript 6 简介.md',
        '/web/Javascript/ES6/02.let与const.md',
        '/web/Javascript/ES6/03 解构赋值.md',
        '/web/Javascript/ES6/04 字符串新特性.md',
        '/web/Javascript/ES6/05 字符串新方法.md',
        '/web/Javascript/ES6/06 数值新特性.md',
        '/web/Javascript/ES6/07 ES5 数组变化.md',
        '/web/Javascript/ES6/08 数组新特性.md',
        '/web/Javascript/ES6/09 对象新特性.md',
        '/web/Javascript/ES6/10 对象新方法.md',
        '/web/Javascript/ES6/11 函数新方法.md',
        '/web/Javascript/ES6/12 新增数据类型和数据结构.md',
        '/web/Javascript/ES6/13 遍历器.md',
        '/web/Javascript/ES6/14 生成器 Generator.md',
        '/web/Javascript/ES6/15 Proxy.md',
        '/web/Javascript/ES6/16 Peflect.md',
        '/web/Javascript/ES6/17 Class 基本语法.md',
        '/web/Javascript/ES6/18 Class 的继承.md',
      ]
    },
  ],
  "/web/Typescript/": [

    '/web/Typescript/范型.md',
    '/web/Typescript/infer.md',
    '/web/Typescript/协变逆变.md',

    {
      text: 'Utility-Types',
      collapsible: true,
      children: [
        '/web/Typescript/Utility-Types/Partial.md',
        '/web/Typescript/Utility-Types/Record.md',
        '/web/Typescript/Utility-Types/Exclude.md',
        '/web/Typescript/Utility-Types/Omit.md',
        '/web/Typescript/Utility-Types/Required.md',
        '/web/Typescript/Utility-Types/Readonly.md',
        '/web/Typescript/Utility-Types/Pick.md',
        '/web/Typescript/Utility-Types/Capitalize.md',
        '/web/Typescript/Utility-Types/ConstructorParameters.md',
        '/web/Typescript/Utility-Types/Extract.md',
        '/web/Typescript/Utility-Types/ThisType.md',
        '/web/Typescript/Utility-Types/InstanceType.md',
        '/web/Typescript/Utility-Types/NonNullable.md',
        '/web/Typescript/Utility-Types/OmitThisParameter.md',
        '/web/Typescript/Utility-Types/Parameters.md',
        '/web/Typescript/Utility-Types/ReturnType.md',
        '/web/Typescript/Utility-Types/ThisParameterType.md',
        '/web/Typescript/Utility-Types/Uncapitalize.md',
        '/web/Typescript/Utility-Types/Uppercase.md',
        '/web/Typescript/Utility-Types/Utility Types.md',

      ]
    },
  ],
  "/web/Threejs/": [
    {
      text: 'THREE.js',
      collapsible: true,
      children: [
        '/web/Threejs/',
      ]
    },
  ],
  "/web/WebGL/": [
    '/web/WebGL/',
    '/web/WebGL/原理.md',
    {
      text: 'Canvas',
      collapsible: true,
      children: [
        '/web/WebGL/Canvas/canvas.md',
        '/web/WebGL/Canvas/konva.md',
      ]
    },
  ],
  "/web/CICD/": [
    {
      text: 'CICD',
      collapsible: true,
      children: [
        '/web/CICD/',
      ]
    },
  ],
  "/web/Vue/": [
    "/web/Vue/vuex",
    "/web/Vue/vue组件之间通信方式",
    {
      text: 'vue-router',
      collapsible: true,
      children: [
        '/web/Vue/vue-router/1-vue-router',
        '/web/Vue/vue-router/2-异步请求',
        '/web/Vue/vue-router/3-devTools',
        '/web/Vue/vue-router/4-动态路由',
        '/web/Vue/vue-router/5-queryString',
        '/web/Vue/vue-router/6-路由守卫',
        '/web/Vue/vue-router/7-嵌套路由',
        '/web/Vue/vue-router/8-重定向与别名',
        '/web/Vue/vue-router/9-路由组件传参',
        '/web/Vue/vue-router/10-路由数据获取',
        '/web/Vue/vue-router/11-路由动效',
        '/web/Vue/vue-router/12-滚动行为',
        '/web/Vue/vue-router/13-路由元信息',
        '/web/Vue/vue-router/14-路由懒加载',
      ]
    },
  ],
  "/web/Webpack/": [
    {
      text: 'Webpack',
      collapsible: true,
      children: [
        '/web/Webpack/',
        '/web/Webpack/构建流程',
        '/web/Webpack/理解',
        '/web/Webpack/提高构建速度',
        '/web/Webpack/优化前端性能',
        '/web/Webpack/Loader',
        '/web/Webpack/Loader和Plugin',
        '/web/Webpack/Plugin',
        '/web/Webpack/webpack_proxy',
        '/web/Webpack/webpack热更新',
      ]
    },
  ],
  "/web/React/": [
    {
      text: 'React',
      collapsible: true,
      children: [
        '/web/React/',
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
  '/service/Go/': [
    {
      text: 'Golang',
      collapsible: true,
      children: [
        '/service/Go/',
      ]
    },
  ],
  '/service/Docker/': [
    {
      text: 'Golang',
      collapsible: true,
      children: [
        '/service/Docker/',
      ]
    },
  ],
  '/service/Mongodb/': [
    {
      text: 'Mongodb',
      collapsible: true,
      children: [
        '/service/Mongodb/',
      ]
    },
  ],
  '/flutter/': [
    {
      text: 'widget',
      collapsible: true,
      children: [
        '/flutter/widget/',
        '/flutter/widget/组件导航.md',
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
  '/docMD/Git/': [
    {
      text: 'Git',
      collapsible: true,
      children: [
        '/docMD/Git/版本控制',
        '/docMD/Git/分支新建与合并',
      ]
    },
  ],
  '/docMD/Mac/': [
    {
      text: 'Mac',
      collapsible: true,
      children: [
        '/docMD/Mac/菜单大小调整',
        '/docMD/Mac/微信双开',
      ]
    },
  ],
  '/docMD/Order/': [
    {
      text: 'Order',
      collapsible: true,
      children: [
        '/docMD/Order/',
      ]
    },
  ]
}