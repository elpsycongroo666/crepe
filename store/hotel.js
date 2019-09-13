export const state = () => ({})

export const getters = {}
export const mutations = {}
export const actions = {
  //获取酒店数据
  async getHotels({ commit }, params) {
    this.$axios({
      url: '/hotels',
      method: 'GET'
    })
  },
  //获取酒店配置
  async getOptions({ commit }, query) {
    let temp = []
    Object.keys(query).map(item => {
      if (!query[item]) return
      temp.push(`${item}=${query[item]}`)
    })
    let res = this.$axios({
      url: `/hotels/options?${temp.join('&')}`,
      method: 'GET'
    })
    return res
  },
  //获取城市
  async getCites({ commit }, name) {
    let res = await this.$axios({
      url: '/cities',
      method: 'GET',
      params: {
        name
      }
    })
    return res
  }
}
