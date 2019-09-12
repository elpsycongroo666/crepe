/**
 * @Author: Super Jane
 * @Date: 2019-09-12 10:37:05
 * @Last Modified by: Super Jane
 * @Last Modified time: 2019-09-12 10:37:05
 */


<template>
  <div class="hotel">
    <div class="main">
      <!-- 面包屑导航 -->
      <div class="header_nav">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">酒店</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path: '/'}">南京酒店</el-breadcrumb-item>
          <el-breadcrumb-item>南京古都文化酒店（鼓楼店）(如家联盟)</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <!-- 酒店名字 -->
      <div class="name_info">
        <h2>南京古都文化酒店（鼓楼店）(如家联盟)
          <i class="iconfont iconhuangguan"></i>
          <i class="iconfont iconhuangguan"></i>
          <i class="iconfont iconhuangguan"></i>
          <i class="iconfont iconhuangguan"></i>
          <i class="iconfont iconhuangguan"></i>

        </h2>
        <p>nan jing gu du wen hua hotel （ gu lou dian ）(ru jia lian meng)</p>
        <i class="iconfont iconlocation"></i>
        <span>北京东路8号(江苏电视台对面，北京东路与丹凤街交汇处东南角)</span>
      </div>

      <!-- 酒店图片 -->
      <HotelView />

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


  // 注册组件
  components: {
    HotelView,
    RoomType,
    HotelMap,
    HotelInfo,
    HotelComment
  },
  mounted () {
    this.$axios({
      url: "http:127.0.0.1:1337/hotels"
    }).then(res => {
      console.log(res);
    });
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
