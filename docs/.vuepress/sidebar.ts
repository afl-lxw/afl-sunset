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
    '/web/Typescript/Utility-Types.md',

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
    '/web/webGL/',
    '/web/webGL/原理.md',
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
    {
      text: 'Vue',
      collapsible: true,
      children: [
        '/web/Vue/',
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