<template>
  <div class="content">
    <el-carousel indicator-position="outside" class="img-content">
      <el-carousel-item v-for="item in 1" :key="item">
        <img :src="imgSrc" style="height:100%; width:100% " />
      </el-carousel-item>
    </el-carousel>
    <Overview class="word-content"/>
  </div>
</template>

<script>
import imgSrc from '@/assets/img/WechatIMG159.png'
import Overview from '@/components/news/src/Overview.vue'
export default {
  component:{
    Overview
  },
  setup() {


    return {
      imgSrc
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