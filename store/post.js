// 用户管理
export const state = () => {
  return {
    commendSize: {
      //攻略详情页的评论数据
      data: [],
      total: 0
    },
    replayData: {
      // 攻略详情页的递归的回复数据
      nicname: '',
      id: 0,
      tagVisible: false
    }
  }
}

export const mutations = {
  setUserInfo() {},
  // 设置攻略详情页的评论数据
  setCommendSize(state, data) {
    state.commendSize = data
  },
  // 设置攻略详情页的递归的回复数据
  setReplayData(state, data) {
    state.replayData = data
  }
}
