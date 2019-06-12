import http from '@/common/http'

export default {
  namespaced: true,
  state: {
    hotList: [],
    hotSearch: {},
    searchText: '',
    searchResult: []
  },
  mutations: {
    resetSourse (state) {
      state.hotList = []
      state.hotSearch = {}
      state.searchText = ''
      state.searchResult = []
    },
    initList (state, payload) {
      state.hotList = payload
    },
    initSearch (state, payload) {
      state.hotSearch = payload
    },
    changeSearch (state, payload) {
      state.searchText = payload
    },
    changeResult (state, payload = []) {
      if (payload.length || !state.searchText.length) {
        state.searchResult = payload
      }
    }
  },
  actions: {
    getHotList ({ commit }) {
      http.get('/recomHotword').then(res => {
        // console.log(res)
        commit('initList', res)
      })
    },
    getHotSearch ({ commit }) {
      http.get('/topHotword').then(res => {
        // console.log(res)
        commit('initSearch', res)
      })
    },
    getSearchResult ({ state, commit }) {
      http.get('http://localhost:8080/tenxun/cgi-proxy/search/associate_label', {
        params: {
          is_ios: 0,
          text: state.searchText,
          page: 0,
          count: 10,
          bkn: 615863261,
          _: new Date().getTime()
        }
      }).then(res => {
        // console.log(res)
        res.result = res.result ? res.result : {}
        let result = res.result.items ? res.result.items : []
        commit('changeResult', result)
      })
    }
  }
}
