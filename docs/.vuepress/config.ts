import { defineConfig } from "vuepress/config";


module.exports = defineConfig({
  title: '一斤阳夕',
  description: 'A pound of sunset',
  plugins: {
    "@vuepress/pwa": {
      serviceWorker: true
    },
    "@vuepress/register-components": {
      componentsDir: "./components"
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
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/' },
      { text: 'About', link: '/about/' },
    ],
    sidebar: {
      '/posts/': [
        {
          title: 'Posts',
          collapsable: false,
          children: [
            '',
            'post1',
            'post2',
          ]
        }
      ]
    },
    lastUpdated: 'Last Updated',
  },
}) 