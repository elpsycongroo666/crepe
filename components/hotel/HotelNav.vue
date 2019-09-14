/**
 * @Author: Joe Yao
 * @Date: 2019-09-12 08:52:05
 * @Last Modified by: Joe Yao
 * @Last Modified time: 2019-09-14 09:53:54
 */
<style lang="less" scoped>
@import "~styles/main.less";
/*区域模块
------------------------------------- */
.nav__area {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.nav__title {
  width: 60px;
  font-size: 14px;
  color: @drakTextColor;
}
.nav__main {
  flex: 1;
  transition: all 3s;
}
.nav__list {
  overflow: hidden;
}
.nav__item {
  display: inline-block;
  line-height: 24px;
  box-sizing: border-box;
  margin: 0 8px 4px 0;
  padding: 0 5px;
  font-size: 14px;
  color: @drakTextColor;
  cursor: pointer;
  &&:hover {
    color: @mainColor;
  }
}
.nuxt-link-exact-active {
  border-radius: 3px;
  font-weight: 600;
  color: #fff;
  background: @mainColor;
  &&:hover {
    color: #fff;
  }
}
.nav__toggle {
  cursor: pointer;
}
.nav__toggle-text {
  font-size: 14px;
  color: @drakTextColor;
}
.nav__icon-down {
  font-size: 16px;
  color: @mainColor;
  transform: rotate(90deg);
}
/*攻略模块
------------------------------------- */
.nav__strategy {
  display: flex;
  margin-bottom: 20px;
}
.nav__strategy-text {
  flex: 1;
  font-size: 14px;
  color: @drakTextColor;
}
/*均价模块
------------------------------------- */
.nav__price {
  display: flex;
  margin-bottom: 20px;
}
.nav__star {
  flex: 1;
  display: flex;
}
.nav__star-item {
  width: 25%;
}
.nav__star-icon {
  color: @mainColor;
}
.nav__star-item-price {
  font-size: 14px;
  color: @drakTextColor;
}
</style>
<template>
  <!-- S 酒店导航模块 -->
  <div class="nav">

    <div class="nav__area">
      <div class="nav__title">区域:</div>

      <div class="nav__main">
        <div class="nav__list"
             :style="styleObj.list">
          <nuxt-link class="nav__item"
                     :to="{path:'/hotel',query:{city:currentCity.id}}">全部</nuxt-link>
          <nuxt-link class="nav__item"
                     :to="{path:'/hotel',query:{city:item.city,scenic:item.id }}"
                     v-for="item in scenicsData"
                     :key="item.id">{{ item.name }}</nuxt-link>
        </div>
        <div class="nav__toggle"
             @click="handleToggle">
          <i class="el-icon-d-arrow-right nav__icon-down"></i>
          <span class="nav__toggle-text">展开共{{ scenicsData.length }}个区域</span>
        </div>
      </div>

    </div>
    <!-- /区域模块   -->

    <div class="nav__strategy">
      <div class="nav__title">攻略:</div>
      <div class="nav__strategy-text">

        巴厘岛是世界级度假胜地，在南部拥有最美的沙滩、温暖的阳光、湛蓝的海水。

        库塔、努沙杜瓦、乌布是众多游客最喜欢选择的住宿区域。

        这里的酒店基本都有泳池或是临近海边,椰林树影,水清沙白。
      </div>
    </div>
    <!-- /攻略模块 -->

    <div class="nav__price">
      <div class="nav__title">均价:</div>
      <div class="nav__star">

        <el-tooltip effect="dark"
                    content="等级评定是针对房价，设施和服务等各方面水平的综合评估。"
                    placement="bottom-start"
                    v-for="item in starData"
                    :key="item.id">
          <div class="nav__star-item">
            <i class="iconfont iconhuangguan nav__star-icon"
               v-for="(v,i) in Array(item.level)"
               :key="i"></i>
            <span class="nav__star-item-price">￥{{ item.price }}</span>
          </div>
        </el-tooltip>
        <!-- /循环 -->

      </div>
    </div>
    <!-- /均价模块 -->

  </div>
  <!-- E 酒店导航模块 -->
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HotelNav',
  data () {
    return {
      starData: [
        { id: 1, level: 3, price: 332 },
        { id: 2, level: 4, price: 521 },
        { id: 3, level: 5, price: 768 },
      ],
      styleObj: {
        list: {
          height: '24px'
        }
      },
      toggle: true
    }
  },
  computed: {
    ...mapState({
      scenicsData: state => state.hotel.scenicsData,
      currentCity: state => state.hotel.currentCity
    })
  },
  methods: {
    handleToggle () {
      this.toggle = !this.toggle
      this.styleObj.list.height = this.toggle ? '24px' : 'auto'
    }
  },
  mounted () {
  }
}
</script>
