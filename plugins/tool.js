/**
 * @Author: Joe Yao
 * @Date: 2019-09-14 00:09:41
 * @Last Modified by: Joe Yao
 * @Last Modified time: 2019-09-14 22:14:05
 */
import Vue from 'vue'
let tool = {
  //过滤空值
  formatObj(_obj) {
    let _result = {}
    Object.keys(_obj).map(item => {
      if (!_obj[item]) return
      _result[item] = _obj[item]
    })
    return _result
  },
  //对象转urlencode字符串
  parseParam(_json) {
    let _result = []
    Object.keys(_json).map(item => {
      if (!_json[item]) return
      if (Array.isArray(_json[item])) {
        const arr = _json[item]
        arr.map(v => {
          _result.push(`${item}=${v}`)
        })
        return
      }
      _result.push(`${item}=${_json[item]}`)
    })
    return _result.join('&')
  },
  //防抖函数
  debounce(fn, wait) {
    let timer
    return function() {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(this, arguments)
      }, wait)
    }
  },
  //节流函数
  throttle(fn, wait) {
    let lastTime = 0
    return function() {
      let nowTime = new Date().getTime()
      if (nowTime - lastTime > wait) {
        fn.apply(this, arguments)
        lastTime = nowTime
      }
    }
  },
  //拷贝继承
  extend(_preJson, _addJson) {
    for (var key in _addJson) {
      _preJson[key] = _addJson[key]
    }
    return _preJson
  }
}

let main = {
  install(Vue) {
    Vue.prototype.$T = tool // 变量的内容 后期可以在vue中
  }
}

Vue.use(main) // 这里不能丢

export default ({ app }, inject) => {
  app.$T = tool
}
