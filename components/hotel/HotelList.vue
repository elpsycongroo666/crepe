/**
 * @Author: Joe Yao
 * @Date: 2019-09-12 08:52:05
 * @Last Modified by: Joe Yao
 * @Last Modified time: 2019-09-13 13:02:24
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
  padding: 5px 5px;
  border-bottom: 1px solid #ebeef5;
  &&:hover {
    background-color: #f4f4f4;
  }
}
.list__price-item-l {
  font-size: 14px;
  color: @deepTextColor;
}
.list__price-item-r {
  padding-left: 20px;
  border-left: 1px solid @bdColor;
}
</style>
<template>
  <!-- S 酒店首页模块 -->
  <div class="list">

    <div class="list__item">

      <div class="list__sider">
        <img class="list__img"
             :src="pics[0].url"
             alt="">
      </div>
      <!-- /酒店图片 -->

      <div class="list__main">
        <el-row type="flex"
                justify="space-between"
                align="middle">

          <el-col :span="16"
                  class="list__info">
            <h3 class="list__info-name">
              <a href="">如家快捷酒店(南京月牙湖银城东苑店)</a>
            </h3>
            <p class="list__text-dark">ru jia kuai jie hotel (nan jing yue ya hu yin cheng dong yuan dian)</p>
            <el-row class="list__star">
              <el-col :span="10">
                <el-row type="flex"
                        align="middle">
                  <div class="list__star-bar">
                    <Star :size='36'
                          :score='5' />
                  </div>
                  <div class="list__text-orange">5分</div>
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
              <span>位于: 东苑路10号(靠近地铁2号线下马坊站，距离南京农业大学南门300米)</span>
            </div>
          </el-col>
          <!-- /酒店信息 -->

          <el-col :span="8"
                  class="list__price">
            <!-- 循环 -->
            <el-row class="list__price-item"
                    type="flex"
                    justify="space-between"
                    align="middle">
              <span class="list__price-item-l">携程</span>
              <div class="list__price-item-r">
                <span class="list__text-orange">¥151</span>
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
export default {
  name: 'HotelList',
  components: {
    Star
  },
  data () {
    return {
      pics: [{
        "url": "https://b4-q.mafengwo.net/s10/M00/69/70/wKgBZ1k_jWqAXOqeAADW4QSEDjU50.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90",
      }],
      "products": [
        {
          "name": "携程",
          "price": "50040.52"
        },
        {
          "name": "艺龙",
          "price": "5008.55"
        },
        {
          "name": "Hotels.com",
          "price": "50059.90"
        }
      ]
    }
  },
}
</script>
