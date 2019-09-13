/**
 * @Author: Joe Yao
 * @Date: 2019-09-12 08:52:05
 * @Last Modified by: Joe Yao
 * @Last Modified time: 2019-09-13 09:30:10
 */
<style lang="less" scoped>
@import "~styles/main.less";
.hotel__container {
  width: 1000px;
  margin: 0 auto;
}
.hotel__bar {
  margin-top: 10px;
}
.hotel__search {
  margin-top: 15px;
  margin-bottom: 30px;
}
.hotel__area {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.hotel__nav {
  width: 580px;
}
.hotel__map {
  width: 360px;
}
.hotel__pagination {
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
}
</style>
<template>
  <!-- S 酒店首页模块 -->
  <div class="hotel">
    <div class="hotel__container">

      <div class="hotel__bar">
        <hotel-bar />
      </div>
      <!-- /工具栏模块 -->

      <div class="hotel__search">
        <hotel-search />
      </div>
      <!-- /搜索模块 -->

      <div class="hotel__area">
        <div class="hotel__nav">
          <hotel-nav />
        </div>
        <div class="hotel__map">
          <hotel-map />
        </div>
      </div>
      <!-- /地区信息模块 -->

      <div class="hotel__filter">
        <hotel-filter />
      </div>
      <!-- /酒店筛选模块 -->

      <div class="hotel__list">
        <hotel-list />
      </div>
      <!-- /酒店列表模块 -->

      <div class="hotel__pagination">
        <hotel-pagination />
      </div>
      <!-- /酒店分页组件模块 -->

    </div>

  </div>
  <!-- S 酒店首页模块 -->
</template>

<script>
import HotelBar from 'components/hotel/HotelBar'
import HotelSearch from 'components/hotel/HotelSearch'
import HotelNav from 'components/hotel/HotelNav'
import HotelMap from 'components/hotel/HotelMap'
import HotelFilter from 'components/hotel/HotelFilter'
import HotelList from 'components/hotel/HotelList'
import HotelPagination from 'components/hotel/HotelPagination'


export default {
  name: 'hotel',
  components: {
    HotelBar,
    HotelSearch,
    HotelNav,
    HotelMap,
    HotelFilter,
    HotelList,
    HotelPagination
  }
}
</script>
