export const state = () => {
  return {
    postInfo: []
  }
}

export const mutations = {
  setPostInfo (state, data) {
    state.postInfo = data
  }
}
