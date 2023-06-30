import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarZh: NavbarConfig  = [
  { text: '首页', link: '/' },
  { text: '前端',
    children: [
      { text: 'Web', link: '/web/' },
      { text: 'Flutter', link: '/flutter/' },
    ]
  },
  { text: 'service', 
    children: [
      { text: "Nodejs", link: '/service/node/' },
      { text: "Golang", link: '/service/Go/' },
      { text: "Docker", link: '/service/Docker/' },

    ]
  },
  { text: '文档', link: '/docMD/' },
]

