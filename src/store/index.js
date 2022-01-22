import { createStore } from 'vuex'

export default createStore({
  state: {
    user_detail: undefined,
    project_list: undefined
  },
  getters: {
    getUserId(state) {
      return state.user_detail.id
    }
  },
  mutations: {
    setUserData(state, data) {
      state.user_detail = data
    },
    setProjectList(state, data) {
      state.project_list = data
    },
  },
  actions: {
  },
  modules: {
  }
})
