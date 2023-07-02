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
  { text: '文档', 
    children: [
      { 
        text: "有点意思",
        children: [
          { text: "小技巧", link: '/docMD/Order/' },
        ]
      },
      {
        text: "其他",
        children: [
          { text: "Mac", link: '/docMD/Mac/' },
          { text: "Git", link: '/docMD/Git/' },
        ]
      }
    ]
  },
]

