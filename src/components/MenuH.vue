<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      router
  >
    <slot></slot>
    <el-menu-item index="index">首页</el-menu-item>
    <el-menu-item index="blog">博客</el-menu-item>
    <el-menu-item index="project">项目</el-menu-item>
    <el-menu-item index="info">关于</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import router from "@/router";

const activeIndex = ref(router.currentRoute.value.name) || ref('index')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

console.log(activeIndex)
</script>
