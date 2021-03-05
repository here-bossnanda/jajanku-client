import Vue from 'vue'
import Vuex from 'vuex'
import auth from './stores/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth
  },
  state: {
    token: localStorage.getItem('access_token')
  },
  getters: {
    isAuth: state => {
      return state.token !== null && state.token !== 'null'
    }
  },
  mutations: {
    setToken (state, payload) {
      state.token = payload
    }
  }
})

export default store
