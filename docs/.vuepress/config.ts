import { defineConfig } from "vuepress/config";
import dayjs from 'dayjs';
import { sidebarZh } from './sidebar'
import { navbarZh } from './nav'
import { defaultTheme } from '@vuepress/theme-default'


module.exports = defineConfig({
  title: '一斤阳夕',
  // title: 'A pound of sunset',
  description: 'A pound of sunset',
  plugins: {
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        dayjs.locale(lang);
        return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss');
      }
    }
  },
  // theme: 'vuepress-theme-default',
  configureWebpack: {
    resolve: {
      alias: {
        '@images': '/images'
      }
    }
  },
  themeConfig: {
    repo: "vuejs/vuepress",
    editLinks: true,
    nav: navbarZh,
    sidebar: sidebarZh,
  },
  // theme: defaultTheme({
  //   logo: '/images/hero.png',
  //   repo: 'vuepress/vuepress-next',
  //   docsDir: 'docs',
  //   locales: {
  //     '/': {
  //       // navbar
  //       navbar: navbarZh,
  //       // sidebar
  //       sidebar: sidebarZh,
  //       // page meta
  //       editLinkText: 'Edit this page on GitHub',
  //     },
  //   }
  // })
}) 