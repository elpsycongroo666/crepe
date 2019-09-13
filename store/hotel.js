// 准备酒店详情仓库
export const state = () => ({
  hotelDetail: {
  }
})

export const mutations = {
  // 存储酒店详情数据
  setHotelDetail(state, data) {
    state.hotelDetail = data
  }
}
