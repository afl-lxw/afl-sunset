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
        text: '集成测试',
        children: [
          { text: 'cypress', link: '/tests/cypress/' },
          { text: 'playwright', link: '/tests/playwright/' },

        ]
      },
      {
        text: '混合开发',
        children: [
          { text: 'Flutter', link: '/flutter/' },
          { text: 'React Native', link: '/reactNative/' },

        ]
      },
    ]
  },
  {
    text: 'service',
    children: [
      { text: "Nodejs", link: '/service/node/' },
      { text: "Golang", link: '/service/go/' },
      { text: "Rust", link: '/service/rust/' },
      {
        text: '服务',
        children: [
          { text: "Docker", link: '/service/docker/' },
          { text: "Mongodb", link: '/service/mongodb/' },
          { text: "Mysql", link: '/service/mysql/' },
          { text: "Elasticsearch", link: '/service/elasticsearch/' },
          { text: "Redias", link: '/service/redis/' },


        ]
      },
    ]
  },
  {
    text: 'Design',
    children: [

    ]
  },
  {
    text: '归档',
    children: [
      {
        text: "有点意思",
        children: [
          { text: "小技巧", link: '/docMD/order/' },
        ]
      },
      {
        text: "其他",
        children: [
          { text: "Mac", link: '/docMD/mac/' },
          { text: "Git", link: '/docMD/git/' },
        ]
      },
    ]
  },
]

