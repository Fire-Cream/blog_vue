<template>
  <el-affix>
    <el-card shadow="hover">
      <div class="userCared">
        <div class="userCared_img">
          <el-image
              :src="require('@/assets/swiper.jpg')"
              :initial-index="4"
              fit="cover"
          />
        </div>
      </div>
    </el-card>
  </el-affix>
</template>

<script lang="ts" setup>
const url =
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
const srcList = ['https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg']
</script>

<style lang="less" scoped>
.userCared{
  width: 100%;
  display: flex;
  flex-direction: column;

  & .userCared_img{
    display: flex;
    justify-content: center;

    & .el-image{
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }

    & .el-image:hover{

    }
  }
}
</style>