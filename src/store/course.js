import http from '../common/http'

export default {
  namespaced: true,
  state: {
    course: {}
  },
  mutations: {
    resetSourse (state) {
      state.course = {}
    },
    initCourse (state, payload) {
      state.course = payload
    }
  },
  actions: {
    getCourse ({ commit }) {
      http.get('/course').then(res => {
        let id = Number(location.href.split('=')[1])
        res = res.filter(item => item.productId === id)[0]
        // console.log(res, location.href, id)
        commit('initCourse', res)
      })
    }
  }
}
