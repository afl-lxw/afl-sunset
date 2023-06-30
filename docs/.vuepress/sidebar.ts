import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/web/': [
    {
      text: 'Javascript',
      collapsible: true,
      children: [
        '/web/javascript/设计模式.md',
      ]
    },
    {
      text: 'Typescript',
      collapsible: true,
      children: [
        '/web/typescript/范型.md',
        '/web/typescript/Utility-Types.md',
      ]
    },
    {
      text: 'THREE.js',
      collapsible: true,
      children: [
        '/web/threejs/',
      ]
    },
    {
      text: 'webGL',
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
  'docMD': [
    
  ],
}