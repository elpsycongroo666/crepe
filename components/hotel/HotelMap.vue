/**
 * @Author: Joe Yao
 * @Date: 2019-09-12 08:52:05
 * @Last Modified by: Joe Yao
 * @Last Modified time: 2019-09-16 10:13:32
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
                        :vid="index"
                        :events="marker.events"
                        :topWhenClick="true"
                        animation="AMAP_ANIMATION_DROP">
          <div :style="iconStyle">
            {{ index + 1 }}
          </div>
        </el-amap-marker>
        <el-amap-info-window v-if="window"
                             :position="window.position"
                             :visible="window.visible"
                             :content="window.content">
          <div :style="windowStyle">
            <span>{{ window.name }}</span>
          </div>
        </el-amap-info-window>
      </el-amap>
    </div>
    <!-- E 地图模块 -->
  </client-only>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HotelMap',
  computed: {
    ...mapState({
      hotelData: state => state.hotel.hotelData
    })
  },
  data () {
    return {
      /* --------------------------点标记数据-------------------------------- */
      iconStyle: {
        width: '22px',
        height: '36px',
        textAlign: 'center',
        lineHeight: '28px',
        color: '#fff',
        backgroundImage: 'url(https://webapi.amap.com/theme/v1.3/markers/b/mark_b.png)',
        backgroundSize: '22px 36px'
      },
      /* --------------------------窗体数据------------------------------- */
      windowStyle: {
        padding: '2px 3px',
        color: '#666',
        fontSize: '12px'
      },
      windows: [],
      window: '',
      timer: null,
      /* --------------------------地图配置数据----------------------------- */
      center: [118.92251, 31.75561],
      markers: [],
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
  watch: {
    'hotelData': {
      deep: true,
      handler: function (val, old) {
        if (val.data.length < 1) {
          this.markers = [{ position: [0, 0], events: null }]
          this.windows.length = 0
          return
        }
        this.markers.length = 0
        const self = this
        val.data.map((item, index) => {
          let temp = {}
          temp.position = [item.location.longitude, item.location.latitude]
          //事件
          temp.events = {
            mouseover () {
              clearTimeout(self.timer)
              self.timer = setTimeout(() => {
                self.windows.forEach(window => {
                  window.visible = false;
                });
                self.window = self.windows[index];
                self.$nextTick(() => {
                  self.window.visible = true;
                });
              }, 300)
            },
            mouseout () {
              clearTimeout(self.timer)
              self.$nextTick(() => {
                self.window.visible = false;
              });
            }
          }
          //位置信息
          this.markers.push(temp)
          //窗体信息
          this.windows.push({
            position: [item.location.longitude, item.location.latitude],
            name: item.name,
            visible: false
          });
          //设置中心点
          if (this.markers) {
            this.center = [...this.markers[0].position]
          }
        })
      }
    }
  }
}
</script>
