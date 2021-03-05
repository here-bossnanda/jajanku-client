import $axios from '../api/axios'
import Swal from 'sweetalert2'
import router from '../router'

const actions = {
  login ({ commit }, payload) {
    localStorage.setItem('access_token', null)
    commit('setToken', null, { root: true })
    $axios
      .post('/login', payload)
      .then(({ data }) => {
        localStorage.setItem('access_token', data.content.access_token)
        commit('setToken', data.content.access_token, { root: true })
        router.push({ name: 'Home' })
      })
      .catch(({ response }) => {
        Swal.fire(
          'Errors',
          `${response.data.msg}`,
          'error'
        )
      })
  },
  logout ({ commit, state } ) {
    $axios
      .post('/auth/logout')
      .then(({ data }) => {
        localStorage.clear()
        commit('setToken', localStorage.getItem(state.access_token), { root: true })
        router.push('/login')
      })
      .catch(({ response }) => {
        Swal.fire(
          'Errors',
          `${response.data.msg}`,
          'error'
        )
      })
    
  }
}

export default {
  namespaced: true,
  actions
}
