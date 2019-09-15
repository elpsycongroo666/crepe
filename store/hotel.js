// 准备酒店详情仓库
export const state = () => ({
  // 酒店详情数据
  hotelDetail: {},
})

export const mutations = {
  // 设置酒店详情数据
  SETHOTEL_DETAIL(state, data) {
    state.hotelDetail = data
  },
}
