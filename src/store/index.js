import { createStore } from 'vuex'

export default createStore({
  state: {
    api_url: "",
    user_detail:{
      accepted_terms: true,
      auth_token: "",
      big_photo: null,
      bio: "",
      color: "",
      date_joined: "",
      email: "",
      full_name: "",
      full_name_display: "",
      gravatar_id: "",
      id: 0,
      is_active: true,
      lang: "",
      max_memberships_private_projects: null,
      max_memberships_public_projects: null,
      max_private_projects: null,
      max_public_projects: null,
      photo: null,
      read_new_terms: false,
      refresh: "",
      roles: [],
      theme: "",
      timezone: "",
      total_private_projects: 0,
      total_public_projects: 0,
      username: "",
      uuid: ""
    }
  },
  mutations: {
    setUserAuthData(state, data) {
      state.user_detail = data
    },
    setUserData(state, data) {
      state.user_detail = data
    },
    setAPIURL(state, url) {
      state.api_url = url
    },
  },
  actions: {
  },
  modules: {
  }
})
