<template>
  <MenuH>
    <el-image :src="url" style="height: 58px;margin-right: 15px"/>
  </MenuH>
  <el-row>
    <el-col :xs="0" :sm="0" :md="1"></el-col>
    <el-col :xs="24" :sm="24" :md="18" class="affix-container">
      <router-view></router-view>
    </el-col>
    <el-col :xs="0" :sm="0" :md="5">
      <UserCard target=".affix-container" :offset="117"></UserCard>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <el-footer style="margin-top: 50px">
        <div style="width: 450px;margin: auto;">
          <span>Copyright © 2021-2022 <a href="http://www.lovecream.live/" :underline="false">Cream小窝</a> 保留所有权利</span><br>
          <span><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42028102000193" :underline="false"><img src="../../assets/备案图标.png" style="float:left;"/>鄂公网安备 42028102000193号</a></span><br>
          <span>ICP证：</span><a href="https://beian.miit.gov.cn/" :underline="false">鄂ICP备2021019052号-1</a>
        </div>
      </el-footer>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import MenuH from "@/components/MenuH.vue"
import UserCard from "@/components/UserCard.vue"
const url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'

</script>

<style scoped>
.affix-container{
  overflow: hidden;
}
.el-footer div a{
  text-decoration: none;
}
</style>