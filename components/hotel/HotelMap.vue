/**
 * @Author: Joe Yao
 * @Date: 2019-09-12 08:52:05
 * @Last Modified by: Joe Yao
 * @Last Modified time: 2019-09-13 14:23:59
 */
<style lang="less" scoped>
@import "~styles/main.less";
.map {
  width: 100%;
  height: 260px;
}
</style>
<template>
  <client-only>
    <!-- S 地图模块 -->
    <div class="map">
      <el-amap vid="amapDemo"
               :center="center"
               :plugin="plugin">
        <el-amap-marker v-for="(marker,index) in markers"
                        :key='index'
                        :position="marker.position"
                        :visible="marker.visible"
                        :draggable="marker.draggable"
                        :vid="index"></el-amap-marker>
      </el-amap>
    </div>
    <!-- E 地图模块 -->
  </client-only>
</template>

<script>
export default {
  name: 'HotelMap',
  data () {
    return {
      zoom: 22,
      center: [118.92251, 31.75561],
      markers: [
        {
          position: [118.92251, 31.75561],
          visible: true,
          draggable: false,
          template: '<span>1</span>'
        }
      ],
      plugin: [{
        pName: 'Scale',
        events: {
          init (instance) {
            console.log(instance);
          }
        }
      }]
    }
  },
  components: {

  }
}
</script>
