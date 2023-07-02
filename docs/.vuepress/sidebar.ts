import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/web/': [
    {
      text: 'Javascript',
      collapsible: true,
      children: [
        '/web/Javascript/设计模式.md',
      ]
    },
    {
      text: 'Typescript',
      collapsible: true,
      children: [
        '/web/Typescript/范型.md',
        '/web/Typescript/Utility-Types.md',
      ]
    },
    {
      text: 'THREE.js',
      collapsible: true,
      children: [
        '/web/Threejs/',
      ]
    },
    {
      text: 'WebGL',
      collapsible: true,
      children: [
        '/web/webGL/',
      ]
    },
    {
      text: 'CICD',
      collapsible: true,
      children: [
        '/web/CICD/',
      ]
    },
    {
      text: 'Vue',
      collapsible: true,
      children: [
        '/web/Vue/',
      ]
    },
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
    {
      text: 'React',
      collapsible: true,
      children: [
        '/web/React/',
      ]
    },
  ],
  '/service/node': [
    {
      text: 'nodejs',
      collapsible: true,
      children: [
        '/service/node/',
      ]
    },
  ],
  '/service/Go': [
    {
      text: 'Golang',
      collapsible: true,
      children: [
        '/service/Go/',
      ]
    },
  ],
  '/service/Docker': [
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