/**
 * @Author: Joe Yao
 * @Date: 2019-09-12 08:52:05
 * @Last Modified by: Joe Yao
 * @Last Modified time: 2019-09-15 16:27:55
 */
<style lang="less" scoped>
@import "~styles/main.less";

.list__text-orange {
  font-weight: bold;
  color: @subColor;
}
.list__text-deep {
  font-size: 12px;
  font-weight: bold;
  color: @deepTextColor;
  vertical-align: 1px;
}
.list__text-dark {
  color: #999;
}
.list__item {
  display: flex;
  padding: 25px 0;
  border-bottom: 1px solid @bdColor;
}
.list__sider {
  margin-right: 20px;
}
.list__main {
  flex: 1;
}
/* 图片模块
------------------------------------- */
.list__img {
  display: block;
  width: 330px;
  height: 240px;
  border-radius: 5px;
}
/* 酒店信息模块
------------------------------------- */
.list__info {
  width: 405px;
}
.list__info-name {
  font-weight: normal;
  font-size: 18px;
  &:hover {
    text-decoration: underline;
    color: @subColor;
  }
}
.list__star {
  margin: 10px 0;
}
.list__star-bar {
  margin-right: 10px;
}
.list__info-position {
  font-size: 14px;
  color: @drakTextColor;
}
/* 酒店价格列表模块
------------------------------------- */
.list__price {
  margin-top: 20px;
}
.list__price-item {
  height: 40px;
  padding: 5px 5px;
  border-bottom: 1px solid #ebeef5;
  box-sizing: border-box;
  &&:hover {
    background-color: #f4f4f4;
  }
}
.list__price-item-l {
  font-size: 14px;
  color: @deepTextColor;
}
.list__price-item-r {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 50%;
  padding-left: 20px;
  border-left: 1px solid @bdColor;
}
.list__price-txt {
}
</style>
<template>
  <!-- S 酒店首页模块 -->
  <div class="list">

    <div class="list__item"
         v-for="item in hotelData.data"
         :key="item.id">

      <div class="list__sider">
        <img class="list__img"
             :src="item.photos"
             :alt="item.name">
      </div>
      <!-- /酒店图片 -->

      <div class="list__main">
        <el-row type="flex"
                justify="space-between"
                align="middle">

          <el-col :span="16"
                  class="list__info">
            <h3 class="list__info-name"
                @click="handleClickHotel(item)">
              {{ item.name }}
            </h3>
            <p class="list__text-dark">{{ item.alias }}</p>
            <el-row class="list__star">
              <el-col :span="10">
                <el-row type="flex"
                        align="middle">
                  <div class="list__star-bar">
                    <Star :size='36'
                          :score='item.stars' />
                  </div>
                  <div class="list__text-orange">{{ item.stars }}分</div>
                </el-row>
              </el-col>
              <el-col :span="7">
                <span class="list__text-orange">76</span>
                <span>条评价</span>
              </el-col>
              <el-col :span="7">
                <span class="list__text-orange">13</span>
                <span>篇游记</span>
              </el-col>
            </el-row>
            <div class="list__info-position">
              <i class="iconfont iconlocation"></i>
              <span>位于: {{ item.address }}</span>
            </div>
          </el-col>
          <!-- /酒店信息 -->

          <el-col :span="8"
                  class="list__price">
            <!-- 循环 -->
            <el-row v-for="(v,index) in item.products"
                    :key="index"
                    class="list__price-item"
                    type="flex"
                    justify="space-between"
                    align="middle">
              <span class="list__price-item-l">{{ v.name }}</span>
              <div class="list__price-item-r">
                <span class="list__text-orange list__price-txt">¥{{ v.price }}</span>
                <span class="list__text-deep">起</span>
                <i class="el-icon-arrow-right list__text-orange"></i>
              </div>
            </el-row>
          </el-col>
          <!-- /酒店价格列表 -->

        </el-row>
      </div>
      <!-- /酒店介绍模块 -->

    </div>
  </div>
  <!-- S 酒店首页模块 -->
</template>

<script>
import Star from 'components/common/Star'
import { mapState } from 'vuex'
export default {
  name: 'HotelList',
  components: {
    Star
  },
  computed: {
    ...mapState({
      hotelData: state => state.hotel.hotelData
    })
  },
  methods: {
    handleClickHotel (item) {
      this.$router.push({ path: '/hotel/detail', query: { id: item.id } })
    }
  }
}
</script>
