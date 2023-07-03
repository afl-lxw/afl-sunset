import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarZh: NavbarConfig  = [
  { text: '首页', link: '/' },
  { text: '前端',
    children: [
      { text: 'Web',
        children: [
          { text: 'Javascript', link: '/web/Javascript/' },
          { text: 'Typescript', link: '/web/Typescript/' },
          { text: 'Vue', link: '/web/Vue/' },
          { text: 'Webpack', link: '/web/Webpack/' },
          { text: 'CICD', link: '/web/CICD/' },
          { text: 'WebGL', link: '/web/WebGL/' },
          { text: 'THREE.js', link: '/web/Threejs/' },
          { text: 'React', link: '/web/React/' },
        ]  
      },
      { text: '混合开发', 
        children:[
          { text: 'Flutter', link: '/Flutter/' },
        ] 
      },
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

