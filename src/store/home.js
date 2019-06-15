import http from '../common/http'

export default {
  namespaced: true,
  state: {
    bannerList: [],
    iconList: [],
    sectionList: [],
    load: 1,
    isload: 1
  },
  mutations: {
    initBanner (state, res) {
      state.bannerList = res
    },
    initIcon (state, res) {
      state.iconList = res
    },
    initSection (state, res) {
      state.sectionList = res
    },
    changeLoad (state) {
      state.load++
      state.isload = state.load === 8 ? 0 : 1
    }
  },
  actions: {
    getBanner ({ commit }) {
      http.get('/focusDtoList').then(res => {
        // console.log(res)
        commit('initBanner', res)
      })
    },
    getIcon ({ commit }) {
      http.get('/iconDtoList').then(res => {
        // console.log(res)
        commit('initIcon', res)
      })
    },
    getSection ({ commit }) {
      http.get('/sectionDtoList').then(res => {
        // console.log(res)
        commit('initSection', res)
      })
    }
  }
}
