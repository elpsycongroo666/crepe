/**
 * @Author: Joe Yao
 * @Date: 2019-09-12 08:52:00
 * @Last Modified by: Joe Yao
 * @Last Modified time: 2019-09-13 23:26:01
 */
import Vue from 'vue'
Vue.prototype.$T = {
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
  //节流
  throttle(fn, wait) {
    let lastTime = 0
    return function() {
      let nowTime = new Date().getTime()
      if (nowTime - lastTime > wait) {
        fn.apply(this, arguments)
        lastTime = nowTime
      }
    }
  }
}
