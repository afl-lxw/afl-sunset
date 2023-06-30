import { defineUserConfig } from 'vuepress'
import dayjs from 'dayjs';
import { sidebarZh } from './sidebar'
import { navbarZh } from './nav'
import { defaultTheme } from '@vuepress/theme-default'
import markdown from 'markdown-it-front-matter'
import markdownUrl from 'markdown-it-disable-url-encode'
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
module.exports = defineUserConfig({
  // title: '一斤阳夕',
  title: 'A pound of sunset',
  description: 'A pound of sunset',
  plugins: [
    activeHeaderLinksPlugin({
      headerAnchorSelector: '.header-anchor'
    }),
  ],
  // theme: 'vuepress-theme-default',
  theme: defaultTheme({
    logo: '/images/logo.png',
    navbar: navbarZh,
    sidebar: sidebarZh,
    docsDir: 'docs/',
  }),
  // theme: './.vuepress/theme/Layout.vue',
  markdown: {
    code:{
      lineNumbers: true, // 启用代码块行号
    },
  },
}) 