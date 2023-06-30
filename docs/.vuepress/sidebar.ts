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
  '/service/': [
    "",
    {
      title: 'nodejs',
      children: [
        '/service/node/',
      ]
    },
    {
      title: 'Golang',
      children: [
        '/service/Go/',
      ]
    },
    {
      title: 'Docker',
      children: [
        '/service/Docker/',
      ]
    }
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