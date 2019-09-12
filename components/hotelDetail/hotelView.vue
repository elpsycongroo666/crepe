<template>
  <div class="hotel_pic">
    <!-- 酒店图片 -->
    <el-row>
      <el-col :span="16"
              class="big_pic">
        <img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg"
             alt="">
      </el-col>
      <el-col :span="8">
        <el-row class="small_list"
                style="margin-left:-10px;">
          <el-col :span="12"
                  class="small_item">
            <img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg"
                 alt="">
          </el-col>
          <el-col :span="12"
                  class="small_item">
            <img src="http://157.122.54.189:9093/images/hotel-pics/2.jpeg"
                 alt="">
          </el-col>
          <el-col :span="12"
                  class="small_item">
            <img src="http://157.122.54.189:9093/images/hotel-pics/2.jpeg"
                 alt="">
          </el-col>
          <el-col :span="12"
                  class="small_item">
            <img src="http://157.122.54.189:9093/images/hotel-pics/2.jpeg"
                 alt="">
          </el-col>
          <el-col :span="12"
                  class="small_item">
            <img src="http://157.122.54.189:9093/images/hotel-pics/2.jpeg"
                 alt="">
          </el-col>
          <el-col :span="12"
                  class="small_item">
            <img src="http://157.122.54.189:9093/images/hotel-pics/2.jpeg"
                 alt="">
          </el-col>

        </el-row>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.hotel_pic {
  margin: 40px 0;
  .big_pic {
    img {
      width: 640px;
      height: 360px;
    }
  }
  .small_list {
    .small_item {
      width: 50%;
      padding: 0 10px;
      img {
        width: 160px;

        margin-bottom: 10px;
      }
    }
  }
}
</style>
