import { defineConfig } from "vuepress/config";
import dayjs from 'dayjs';
import { sidebarZh } from './sidebar'
import { navbarZh } from './nav'
import { defaultTheme } from '@vuepress/theme-default'
import markdown from 'markdown-it-front-matter'
import markdownUrl from 'markdown-it-disable-url-encode'

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
  // theme: 'vuepress-theme-default',
  configureWebpack: {
    resolve: {
      alias: {
        '@images': './public/images'
      }
    }
  },
  themeConfig: {
    logo: '/images/logo.png',
    nav: navbarZh,
    sidebar: sidebarZh,
    docsDir: 'docs/',
  },
  markdown: {
    // 设置 Markdown 文件的 Front Matter
    extendMarkdown: (md) => {
      md.use(markdown)
      md.set({ breaks: true })
      md.use(markdownUrl, "./")
      // 在这里设置 Front Matter 的处理逻辑
      md.renderer.rules.front_matter = (tokens, idx) => {
        const frontMatter = tokens[idx].content

        // 对 Front Matter 进行处理或解析
        // 例如可以使用 YAML 解析库将其转换为对象
        // const data = yaml.parse(frontMatter)

        // 返回处理后的结果，例如将其传递给模板渲染
        return `<front-matter>${frontMatter}</front-matter>`
      }
    }
  },
}) 