import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarZh: NavbarConfig  = [
  { text: '首页', link: '/' },
  { text: '前端',
    items: [
      { text: 'Web', link: '/web/' },
      { text: 'Flutter', link: '/flutter/' },
    ]
  },
  { text: 'service', 
    items: [
      { text: "Nodejs", link: '/service/node/' },
      { text: "Golang", link: '/service/Go/' },
      { text: "Docker", link: '/service/Docker/' },

    ]
  },
  { text: '文档', link: '/docMD/' },
  { text: 'Github', link: '/github/' },
]

