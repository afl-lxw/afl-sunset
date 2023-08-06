import { defineUserConfig, DefaultThemeOptions } from 'vuepress'
import dayjs from 'dayjs';
import { sidebarZh } from './sidebar'
import { navbarZh } from './nav'
import { defaultTheme } from '@vuepress/theme-default'
import markdown from 'markdown-it-front-matter'
import markdownUrl from 'markdown-it-disable-url-encode'
import { searchPlugin } from '@vuepress/plugin-search'
// import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
module.exports = defineUserConfig({
  // title: '一斤阳夕',
  title: 'A pound of sunset',
  description: 'A pound of sunset',
  plugins: [
    // activeHeaderLinksPlugin({
    //   headerAnchorSelector: '.header-anchor'
    // }),
    searchPlugin({
      // 配置项
      hotKeys: [{ key: 'K', ctrl: true}]
    }),
  ],
  
  theme: defaultTheme({
    // logo: '/images/user-avatar.png',
    logo: '/images/house.png',

    logoDark: '/images/user-avatar.png',
    repo: 'https://github.com/afl-lxw',
    lastUpdated: true,
    colorModeSwitch: true,
    navbar: navbarZh,
    sidebar: sidebarZh,
    // docsDir: 'docs/',
    notFound: ['孩子找不到回家的路了', '瞎点什么呢', '你是不是迷路了'],
  }),
  // theme: './.vuepress/theme/Layout.vue',
  markdown: {
    code:{
      lineNumbers: true, // 启用代码块行号
    },
  },
}) 