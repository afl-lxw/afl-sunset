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
  ],
  '/server/': [
    
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
  '/about/': [
    '',
    {
      title: 'widget',
      children: [
        '/about/widget/typescript',
      ]
    },
  ]
}