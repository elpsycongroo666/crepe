import Vue from 'vue'
import VueAMap from 'vue-amap'
Vue.use(VueAMap)
if (!Vue.prototype.$isServer) {
  // 初始化vue-amap
  VueAMap.initAMapApiLoader({
    // 高德的key
    key: '2faa261f5c0f79589a1e86669bcdd569',
    // 插件集合
    plugin: [
      'AMap.Autocomplete',
      'AMap.PlaceSearch',
      'AMap.Scale',
      'AMap.OverView',
      'AMap.ToolBar',
      'AMap.MapType',
      'AMap.PolyEditor',
      'AMap.CircleEditor'
    ],
    // 高德 sdk 版本，默认为 1.4.4
    v: '1.4.4'
  })
}
