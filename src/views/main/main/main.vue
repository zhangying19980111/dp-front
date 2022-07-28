<template>
  <div class="content">
    <el-carousel indicator-position="outside" class="img-content">
      <el-carousel-item v-for="item in imgs" :key="item">
        <img :src="item" style="height:100%; width:100% " />
      </el-carousel-item>
    </el-carousel>
    <Overview class="word-content" tabPath="/notice"/>
  </div>
</template>

<script>
import imgSrc from '@/assets/img/img.png'
import imgSrc2 from '@/assets/img/img2.jpg'
import Overview from '@/components/news/src/Overview.vue'
export default {
  component:{
    Overview
  },
  setup() {
    const imgs = [imgSrc, imgSrc2]

    return {
      imgs
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin: auto;
  margin-top: 20px;
  .img-content {
    width: 50%;
  }
  .word-content{
    width:50%;
    margin-left:10px;
    height: 300px;
  }
}
</style>