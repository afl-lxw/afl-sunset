import { defineConfig } from "vuepress/config";
import dayjs from 'dayjs';

module.exports = defineConfig({
  // title: '一斤阳夕',
  title: 'A pound of sunset',
  description: 'A pound of sunset',
  plugins: {
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        dayjs.locale(lang);
        return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss');
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': 'docs/.vuepress/public'
      }
    }
  },
  themeConfig: {
    nav: require('./nav'),
    sidebar: require('./sidebar'),
  },
}) 