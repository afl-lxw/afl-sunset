import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/web/': [
    '',
    {
      title: 'Typescript',
      children: [
        '/web/typescript/typescript',
        '/web/typescript/typescript2.md',
      ]
    },
    {
      title: 'THREE.js',
      children: [
        '/web/threejs/install',
      ]
    },
    {
      title: 'webGL',
      children: [
        '/web/webGL/',
      ]
    },
    {
      title: 'CICD',
      children: [
        '/web/webGL/',
      ]
    },
  ],
  '/service/node': [
    {
      title: 'nodejs',
      children: [
        '/service/node/',
      ]
    },
  ],
  '/service/Go': [
    {
      title: 'Golang',
      children: [
        '/service/Go/',
      ]
    },
  ],
  '/service/Docker': [
    {
      title: 'Golang',
      children: [
        '/service/Docker/',
      ]
    },
  ],
  '/flutter/': [
    "",
    {
      title: 'widget',
      children: [
        '/flutter/widget/',
      ]
    },
    {
      title: 'Animation',
      children: [
        '/flutter/Animation/',
      ]
    },
  ],
  'docMD': [
    
  ],
  'github': [
    
  ],
}