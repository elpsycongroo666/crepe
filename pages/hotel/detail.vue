/**
 * @Author: Super Jane
 * @Date: 2019-09-13 10:38:11
 * @Last Modified by: Super Jane
 * @Last Modified time: 2019-09-13 1:37:20
 */


<template>
  <div class="hotel">
    <div class="main">
      <!-- 面包屑导航 -->
      <div class="header_nav">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{}">酒店</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(val,index) in hotelDetail.breadcrumb"
                              :key="index">{{val}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <!-- 酒店名字 -->
      <div class="name_info">
        <h2>
          {{hotelDetail.name}}
          <i class="iconfont iconhuangguan"></i>
          <i class="iconfont iconhuangguan"></i>
          <i class="iconfont iconhuangguan"></i>
          <i class="iconfont iconhuangguan"></i>
          <i class="iconfont iconhuangguan"></i>

        </h2>
        <p>{{hotelDetail.alias}}</p>
        <i class="iconfont iconlocation"></i>
        <span>{{hotelDetail.address}}</span>
      </div>

      <!-- 酒店图片 -->
      <HotelView :data="hotelDetail" />

      <!-- 房价来源/房间类型/费用 -->
      <RoomType />

      <!-- 地图交通 -->
      <HotelMap />

      <!-- 酒店信息/主要设施/停车服务/品牌信息 -->
      <HotelInfo />

      <!-- 用户评论 -->
      <HotelComment />
    </div>
  </div>
</template>

<script>
// 引入组件
import HotelView from '@/components/hotelDetail/hotelView'
import RoomType from '@/components/hotelDetail/roomTyep'
import HotelMap from '@/components/hotelDetail/hotelMap'
import HotelInfo from '@/components/hotelDetail/hotelInfo'
import HotelComment from '@/components/hotelDetail/hotelComment'



export default {
  data () {
    return {
      // 酒店详情信息
      hotelDetail: {}
    }
  },

  // 注册组件
  components: {
    HotelView,
    RoomType,
    HotelMap,
    HotelInfo,
    HotelComment
  },

  mounted () {
    // this.$axios({
    //   url: "/cities",
    //   params: {
    //     name: "南京"
    //   }
    // }).then(res => {
    //   console.log(res);
    // });
    this.$axios({
      url: "/hotels?city=74&enterTime=2019-09-17&leftTime=2019-09-20&_limit=1&_start=0",

    }).then(res => {
      // console.log(res)
      this.hotelDetail = res.data.data[0]
      this.hotelDetail.breadcrumb = this.hotelDetail.breadcrumb.split('>')
      console.log(this.hotelDetail)

      // // 把数据储存到vuex中
      this.$store.commit('hotel/setHotelDetail', this.hotelDetail)
    })
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/styles/main.less";
.hotel {
  min-width: 1000px;
  .main {
    width: 1000px;
    margin: 0 auto;
    .header_nav {
      padding: 20px 0;
      font-size: 14px;
    }
    .name_info {
      color: @drakTextColor;
      font-size: 14px;
      h2 {
        font-weight: normal;
        font-size: 24px;
        color: #333;
        .iconhuangguan {
          color: @mainColor;
        }
      }
    }
  }
}
</style>
