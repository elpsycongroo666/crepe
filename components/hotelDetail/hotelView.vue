<template>
  <div class="hotel_pic">
    <!-- 酒店图片 -->
    <el-row>
      <el-col :span="16"
              class="big_pic">

        <img :src="bigImg"
             alt="">
      </el-col>
      <el-col :span="8">
        <el-row class="small_list"
                style="margin-left:-10px;">
          <el-col :span="12"
                  class="small_item"
                  v-for="(item,index) in hotelView"
                  :key="index">
            <nuxt-link to=""
                       @click.native="handelchange(item.url)">
              <img :src="item.url"
                   alt="">
            </nuxt-link>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  // 接收父组件的数据
  props: {
    data: {
      type: Object,
      default: {}
    }
  },

  data () {
    return {
      // 酒店图片数据
      hotelView: [
        { url: "http://157.122.54.189:9093/images/hotel-pics/1.jpeg" },
        { url: "http://157.122.54.189:9093/images/hotel-pics/2.jpeg" },
        { url: "http://157.122.54.189:9093/images/hotel-pics/3.jpeg" },
        { url: "http://157.122.54.189:9093/images/hotel-pics/4.jpeg" },
        { url: "http://157.122.54.189:9093/images/hotel-pics/5.jpeg" },
        { url: "http://157.122.54.189:9093/images/hotel-pics/6.jpeg" },

      ],

      // 大图预览图片
      bigImg: "http://157.122.54.189:9093/images/hotel-pics/1.jpeg"
    }
  },
  methods: {
    // 点击图片切换功能
    handelchange (url) {
      this.bigImg = url
    }
  }
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
