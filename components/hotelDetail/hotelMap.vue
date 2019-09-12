<template>
  <div class="map_info">
    <!-- 地图 -->
    <div id="map_container"> </div>

    <!-- 信息列表 -->
    <div class="post_info">
      <el-tabs v-model="activeName"
               @tab-click="handelChange">
        <el-tab-pane label="风景"
                     name="1">
          <ul class="post_list">
            <li>
              <span>世纪广场</span>
              <span>0.96公里</span>
            </li>
            <li>
              <span>文澜路广场</span>
              <span>0.53公里</span>
            </li>
            <li>
              <span>羊山公园</span>
              <span>0.53公里</span>
            </li>
            <li>
              <span>南京邮电信息无涯亭</span>
              <span>0.53公里</span>
            </li>
            <li>
              <span>南京财经大学仙林校区学子广场</span>
              <span>0.53公里</span>
            </li>
            <li>
              <span>敬文林</span>
              <span>0.53公里</span>
            </li>
            <li>
              <span>高觉敷</span>
              <span>0.53公里</span>
            </li>
            <li>
              <span>南京邮电大学仙林校区无涯亭</span>
              <span>0.53公里</span>
            </li>
            <li>
              <span>仙林曼度广场</span>
              <span>0.53公里</span>
            </li>
            <li>
              <span>羊山湖公园</span>
              <span>0.53公里</span>
            </li>
          </ul>

        </el-tab-pane>
        <el-tab-pane label="交通"
                     name="2">
          <ul class="post_list">
            <li>
              <span>仙林中心(地铁站)</span>
              <span>0.82公里</span>
            </li>
            <li>
              <span>大成名店(公交站)</span>
              <span>0.10公里</span>
            </li>
            <li>
              <span>大成名店公园停车场</span>
              <span>0.04公里</span>
            </li>
            <li>
              <span>南京邮电信息无涯亭</span>
              <span>0.53公里</span>
            </li>
            <li>
              <span>南京财经大学仙林校区学子广场</span>
              <span>0.53公里</span>
            </li>
            <li>
              <span>敬文林</span>
              <span>0.53公里</span>
            </li>
            <li>
              <span>高觉敷</span>
              <span>0.53公里</span>
            </li>
            <li>
              <span>南京邮电大学仙林校区无涯亭</span>
              <span>0.53公里</span>
            </li>
            <li>
              <span>仙林曼度广场</span>
              <span>0.53公里</span>
            </li>
            <li>
              <span>羊山湖公园</span>
              <span>0.53公里</span>
            </li>
          </ul>
        </el-tab-pane>

      </el-tabs>

    </div>

  </div>

</template>

<script>
export default {
  data () {
    return {
      activeName: "1"
    }
  },

  methods: {

    // 标签也切换功能
    handelChange () {
      // console.log(this.activeName)
    }

  },


  mounted () {
    window.onLoad = function () {
      var map = new AMap.Map('map_container', {
        zoom: 11,//级别
        center: [113.3245904, 23.1066805],//中心点坐标
      });
      // 创建一个 Marker 实例：
      var marker1 = new AMap.Marker({
        position: new AMap.LngLat(113.3245904, 23.1066805),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: '广州塔',
        content: `<span class="marker"">1</span>`,  // 自定义点标记覆盖物内容
      });
      var marker2 = new AMap.Marker({
        position: new AMap.LngLat(113.270966, 23.137104),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: '广州越秀区',
        content: `<span class="marker"">2</span>`,  // 自定义点标记覆盖物内容
      });


      // 将创建的点标记添加到已有的地图实例：
      map.add([marker1, marker2]);

      map.on('mousemove', function (ev) {
        console.log(ev)
        // 触发事件的对象
        var target = ev.target;
        // 触发事件的地理坐标，AMap.LngLat 类型
        var lnglat = ev.lnglat;
        // 触发事件的像素坐标，AMap.Pixel 类型
        var pixel = ev.pixel;
        // 触发事件类型
        var type = ev.type;
        // console.log(map)
        map.B.center.lat = ev.lnglat.lat
        map.B.center.lng = ev.lnglat.lng
        // console.log()
        // marker2.B.position.lat =ev.lnglat.lat
        // marker2.B.position.lat =ev.lnglat.lat
        console.log(map)


      });

    }
    var url = 'https://webapi.amap.com/maps?v=1.4.15&key=368861ef013378331e0b3de9ba037f81&callback=onLoad';
    var jsapi = document.createElement('script');
    jsapi.charset = 'utf-8';
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/styles/main.less";

.map_info {
  margin: 40px auto;
  display: flex;
  flex: 1;
  width: 1000px;

  #map_container {
    width: 650px;
    height: 360px;
  }

  .post_info {
    flex: 1;
    padding-left: 20px;

    .post_list {
      height: 300px;
      overflow-y: scroll;
      li {
        display: flex;
        margin: 0 20px 20px 10px;
        justify-content: space-between;
        color: @drakTextColor;
        font-size: 14px;
        cursor: pointer;
      }
    }
  }
  /deep/.marker {
    width: 22px;
    height: 36px;
    text-align: center;
    line-height: 28px;
    color: #fff;
    background-image: url(https://webapi.amap.com/theme/v1.3/markers/b/mark_b.png);
    display: inline-block;
    background-size: 22px 36px;
  }
}
</style>
