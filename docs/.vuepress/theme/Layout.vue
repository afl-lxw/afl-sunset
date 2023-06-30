<template>
  <div class="custom-layout">
    <!-- 自定义导航栏内容 -->
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
    </nav>

    <!-- 原始布局内容 -->
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
/* 自定义导航栏样式 */
.custom-layout nav {
  background-color: #333;
  color: #fff;
}

.custom-layout nav ul {
  list-style: none;
  display: flex;
}

.custom-layout nav ul li {
  margin-right: 10px;
}

.custom-layout nav ul li a {
  color: #fff;
  text-decoration: none;
}

/* 自定义布局样式 */
.custom-layout main {
  margin-top: 50px;
}
</style>
