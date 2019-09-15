/**
 * @Author: Joe Yao
 * @Date: 2019-09-12 08:52:05
 * @Last Modified by: Joe Yao
 * @Last Modified time: 2019-09-14 09:21:36
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
  <div>
    <h1>酒店首页</h1>
    <nuxt-link to="/hotel/detail?id=5">酒店详情</nuxt-link>
  </div>

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
  async asyncData ({ store, query, redirect }) {
    if (Object.keys(query).length < 1) {
      redirect({ path: '/hotel', query: { city: store.state.hotel.currentCity.id } })
    }
  },
  components: {
    HotelBar,
    HotelSearch,
    HotelNav,
    HotelMap,
    HotelFilter,
    HotelList,
    HotelPagination
  },
  methods: {

  },
  watch: {
    '$route': {
      immediate: true,
      deep: true,
      handler: function (to, from) { //调用接口发送请求
        const { query } = to
        const data = this.$T.parseParam(query)
        this.$store.dispatch('hotel/getHotels', data)
      }
    }
  },
  mounted () {
    // this.getHotelData()
  }
}
</script>
