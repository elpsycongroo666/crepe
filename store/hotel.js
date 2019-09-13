// 准备酒店详情仓库
export const state = () => ({
  hotelDetail: {},
  hotelData: [], //酒店数据
  hotelOptions: {}, //酒店筛选数据
  scenicsData: [], //风景数据
  currentCity: { id: 74, name: '南京' } // 当前城市
})

export const mutations = {
  // 存储酒店详情数据
  setHotelDetail(state, data) {
    state.hotelDetail = data
  },
  // 存储酒店列表数据
  SET_HOTELDATA(state, data) {
    state.hotelData = data
  },
  // 存储酒店筛选属性
  SET_HOTELOPTIONS(state, data) {
    state.hotelOptions = data
  },
  // 存储风景数据
  SET_SCENICSDATA(state, data) {
    state.scenicsData = data
  },
  // 存储当前城市数据
  SET_CURRENTCITY(state, data) {
    state.currentCity = data
  }
}
export const getters = {}
export const actions = {
  //获取酒店数据
  async getHotels({ commit }, params) {
    this.$axios({
      url: '/hotels',
      method: 'GET'
    })
  },
  //获取酒店配置
  async getOptions({ commit }, queryStr) {
    let res = this.$axios({
      url: `/hotels/options?${queryStr}`,
      method: 'GET'
    })
    return res
  },
  //获取城市风景
  async getCites({ commit }, name) {
    let res = await this.$axios({
      url: '/cities',
      method: 'GET',
      params: {
        name
      }
    })
    const { data } = res.data
    return data
  }
}
