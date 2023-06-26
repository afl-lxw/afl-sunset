import { defineConfig } from "vuepress/config";


module.exports = defineConfig({
  title: 'Hello VuePress',
  description: 'Just playing around',
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