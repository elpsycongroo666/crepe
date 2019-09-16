<template>
  <div class="map_info">
    <!-- 地图 -->
    <div id="map_container"> </div>

    <!-- tab栏标题 -->
    <div class="post_info">
      <el-tabs v-model="activeName"
               @tab-click="handelChane">
        <!-- 风景数据列表 -->
        <el-tab-pane label="风景"
                     name="1">
          <ul class="post_list">
            <li v-for="(item,index) in scenicsList"
                :key="index">
              <span>{{item.name}}</span>
              <span>0.96公里</span>
            </li>
          </ul>

        </el-tab-pane>

        <!-- 交通数据列表 -->
        <el-tab-pane label="交通"
                     name="2">
          <ul class="post_list">
            <li v-for="(item,index) in scenicsList"
                :key="index">
              <span>{{item.name}}</span>
              <span>0.82公里</span>
            </li>
          </ul>
        </el-tab-pane>

      </el-tabs>

    </div>

  </div>

</template>

<script>
export default {

  props: {   // 接收父组件的数据
    data: {
      type: Object,
      default: {}
    }
  },

  data () {
    return {
      activeName: "1",   // 当前tab栏默认显示的数据
      scenicsList: [],   // 风景区/交通数据
      arr: [],    // 地图遍历的数据
      kilo: [],  //公里数
    }
  },


  methods: {
    // 封装请求风景、交通的api
    init (url) {
      var watchList = [] // 装切割后的经纬度

      this.$axios({  // 请求接口
        url: url,
      }).then(res => {
        this.scenicsList = res.data.pois
        // 抽取location经纬度
        for (let i = 0; i < this.scenicsList.length; i++) {
          watchList.push(this.scenicsList[i].location.split(','))
        }
        // 把经纬度转换成数字
        this.arr = watchList.map(e => {
          return e.map(k => {
            return k - 0
          })
        })

        // 从数据中筛选name
        for (let j = 0; j < this.scenicsList.length; j++) {
          this.arr[j].push(this.scenicsList[j].name)
        }

      })
    },

    // tab点击切换事件
    handelChane () {
      if (this.activeName === '1') {
        this.init('https://restapi.amap.com/v3/place/text?keywords=&city=&location=118.871811,31.328468&types=%E9%A3%8E%E6%99%AF%E5%90%8D%E8%83%9C&output=json&page=1&offset=10&key=79041dfa1c752f49599e2b507c64da42')

        var map = new AMap.Map('map_container', {
          zoom: 14,//级别
          center: this.arr[0],//中心点坐标

        })

        // 装marker
        var location = []
        // 创建一个 Marker 实例：
        for (var i = 0; i < this.arr.length; i++) {
          var marker = new AMap.Marker({
            position: [this.arr[i][0], this.arr[i][1]],   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: this.arr[i][2],
            content: `<span class="marker">${i + 1}</span>`,  // 自定义点标记覆盖物内容

          });
          location.push(marker)
        }


        // 将创建的点标记添加到已有的地图实例：
        map.add(location);
        var url = 'https://webapi.amap.com/maps?v=1.4.15&key=368861ef013378331e0b3de9ba037f81&callback=onLoad';
        var jsapi = document.createElement('script');
        jsapi.charset = 'utf-8';
        jsapi.src = url;
        document.head.appendChild(jsapi);


        // --------以下是计算公里数的代码，有点复杂，需要重置代码，本人放弃
        // // 获取城市中心的位置
        const { longitude, latitude } = this.data.location
        let p1 = [longitude, latitude]
        let p2 = []
        for (let i = 0; i < this.arr.length; i++) {
          p2.push(this.arr[i].splice(this.arr[i][2], 2))

        }
        for (let j = 0; j < p2.length; j++) {
          let dis = AMap.GeometryUtil.distance(p1, p2[j]);
          this.kilo.push([dis])
        }
        // 从数据中筛选name
        this.scenicsList.forEach((e, i) => {
          this.kilo[i].push(e.name)

        })
        console.log(this.kilo, 333)


      }
      if (this.activeName === '2') {
        this.init('https://restapi.amap.com/v3/place/text?keywords=&city=南京&location=118.871811,31.328468&types=交通设施服务&output=json&page=1&offset=10&key=79041dfa1c752f49599e2b507c64da42')
        var map = new AMap.Map('map_container', {
          zoom: 14,//级别
          center: this.arr[0],//中心点坐标

        })
        // 装marker
        var location = []

        // 创建一个 Marker 实例：
        for (var i = 0; i < this.arr.length; i++) {
          var marker = new AMap.Marker({
            position: [this.arr[i][0], this.arr[i][1]],   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: this.arr[i][2],
            content: `<span class="marker">${i + 1}</span>`,  // 自定义点标记覆盖物内容

          });
          location.push(marker)
        }


        // 将创建的点标记添加到已有的地图实例：
        map.add(location);
        var url = 'https://webapi.amap.com/maps?v=1.4.15&key=368861ef013378331e0b3de9ba037f81&callback=onLoad';
        var jsapi = document.createElement('script');
        jsapi.charset = 'utf-8';
        jsapi.src = url;
        document.head.appendChild(jsapi);

      }
    }

  },


  mounted () {
    this.init('https://restapi.amap.com/v3/place/text?keywords=&city=&location=118.871811,31.328468&types=%E9%A3%8E%E6%99%AF%E5%90%8D%E8%83%9C&output=json&page=1&offset=10&key=79041dfa1c752f49599e2b507c64da42')
    // 储存this
    var _that = this
    window.onLoad = function () {
      var map = new AMap.Map('map_container', {
        zoom: 14,//级别
        center: _that.arr[0],//中心点坐标
      })

      // 装marker
      var location = []

      // 创建一个 Marker 实例：
      for (var i = 0; i < _that.arr.length; i++) {
        var marker = new AMap.Marker({
          position: [_that.arr[i][0], _that.arr[i][1]],   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
          title: _that.arr[i][2],
          content: `<span class="marker">${i + 1}</span>`,  // 自定义点标记覆盖物内容

        });
        location.push(marker)
      }

      // 将创建的点标记添加到已有的地图实例：
      map.add(location);
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
