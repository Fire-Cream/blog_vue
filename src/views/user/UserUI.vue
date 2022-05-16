<template>
  <MenuH>
    <el-image :src="url" style="height: 58px;margin-right: 15px"/>
  </MenuH>
  <el-row>
    <el-col :span="1"></el-col>
    <el-col :span="18" class="affix-container">
      <router-view></router-view>
    </el-col>
    <el-col :span="5">
      <UserCard target=".affix-container" :offset="117"></UserCard>
    </el-col>
  </el-row>
  <el-row style="height: 1000px">
    <el-col :span="1"></el-col>
    <el-col :span="18">
    </el-col>
    <el-col :span="5">
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import MenuH from "@/components/MenuH.vue"
import UserCard from "@/components/UserCard.vue"
const url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'

</script>

<style scoped>

</style>