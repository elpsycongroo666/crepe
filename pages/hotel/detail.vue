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
          <el-breadcrumb-item to="/hotel">酒店</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(val,index) in hotelDetail.breadcrumb"
                              :key="index">{{val}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <!-- 酒店名字 -->
      <div class="name_info">
        <h2>
          {{hotelDetail.name}}
          <span :title="hotelDetail.hotellevel.name">
            <i class="iconfont iconhuangguan"
               v-for="(item,index) in hotelDetail.hotellevel.level"
               :key="index"></i>
          </span>
        </h2>
        <p>{{hotelDetail.alias}}</p>
        <i class="iconfont iconlocation"></i>
        <span>{{hotelDetail.address}}</span>
      </div>

      <!-- 酒店图片 -->
      <HotelView :data="hotelDetail" />

      <!-- 房价来源/房间类型/费用 -->
      <RoomType :data="hotelDetail" />

      <!-- 地图交通 -->
      <HotelMap :data="hotelDetail" />

      <!-- 酒店信息/主要设施/停车服务/品牌信息 -->
      <HotelInfo :data="hotelDetail" />

      <!-- 用户评论 -->
      <HotelComment :data="hotelDetail" />
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
      hotelDetail: {
        hotellevel: {},
        products: [],
        hotelassets: [],
        stars: 0,
        scores: {}
      },
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
    // 获取酒店详情数据
    this.$axios({
      url: "/hotels",
      params: { id: this.$route.query.id }

    }).then(res => {
      this.hotelDetail = res.data.data[0]
      this.hotelDetail.breadcrumb = this.hotelDetail.breadcrumb.split('>')
      // // 把数据储存到vuex中
      this.$store.commit('hotel/SETHOTEL_DETAIL', this.hotelDetail)
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
        > span {
          display: inline-block;
        }
        .iconhuangguan {
          color: @mainColor;
        }
      }
    }
  }
}
</style>
