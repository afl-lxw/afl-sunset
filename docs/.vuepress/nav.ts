import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarZh: NavbarConfig = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    children: [
      {
        text: 'Web',
        children: [
          { text: 'Javascript', link: '/web/javascript/' },
          { text: 'Typescript', link: '/web/typescript/' },
          { text: 'Vue', link: '/web/vue/' },
          { text: 'Webpack', link: '/web/webpack/' },
          { text: 'CICD', link: '/web/cI-CD/' },
          { text: 'WebGL', link: '/web/webGL/' },
          { text: 'THREE.js', link: '/web/threejs/' },
          { text: 'React', link: '/web/react/' },
        ]
      },
      {
        text: '混合开发',
        children: [
          { text: 'Flutter', link: '/flutter/' },
        ]
      },
    ]
  },
  {
    text: 'service',
    children: [
      { text: "Nodejs", link: '/service/node/' },
      { text: "Golang", link: '/service/go/' },
      { text: "Docker", link: '/service/Docker/' },
      { text: "Mongodb", link: '/service/Mongodb/' }
    ]
  },
  {
    text: '文档',
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

