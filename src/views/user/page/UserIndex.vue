<template>
  <UserSwiper></UserSwiper>
  <el-row :gutter="30">
    <el-col :span="23" v-for="i in n" :key="i">
      <BlogCard></BlogCard>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import BlogCard from "@/components/BlogCard.vue"
import UserSwiper from "@/components/UserSwiper.vue"
let n = 10
</script>

<style scoped>
.el-col{
  margin-top: 30px;
}
</style>