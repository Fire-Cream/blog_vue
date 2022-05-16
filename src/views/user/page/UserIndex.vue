<template>
  <div class="swiper"></div>
  <el-row :gutter="30">
    <el-col :span="8" v-for="i in n" :key="i">
      <BlogCard></BlogCard>
    </el-col>
  </el-row>

</template>

<script lang="ts" setup>
import BlogCard from "@/components/BlogCard.vue"
let n = 4
</script>

<style scoped>
.swiper{
  width: 100%;
  height: 300px;
  background-color: red;
  margin: 50px 0;
}
.el-col{
  margin: 15px 0;
}
</style>