<template>
  <div>
    <!-- 自定义的内容 -->
    <header>
      <!-- 自定义的头部内容 -->
      <h1>{{ title }}</h1>
    </header>
    <main>
      <slot /> <!-- 内容插槽，用于显示页面内容 -->
    </main>
    <footer>
      <!-- 自定义的页脚内容 -->
      <p>&copy; {{ currentYear }} My Website</p>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'My Website', // 默认标题
    },
  },
  computed: {
    currentYear () {
      return new Date().getFullYear(); // 获取当前年份
    },
  },
};
</script>

<style scoped>
/* 自定义的样式 */
</style>