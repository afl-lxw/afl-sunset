import { defineConfig } from "vuepress/config";


module.exports = defineConfig({
  title: '一斤阳夕',
  description: 'A pound of sunset',
  themeConfig: {
    repo: "vuejs/vuepress",
    editLinks: true,
    docsDir: "packages/docs/docs"
  },
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
  }
}) 