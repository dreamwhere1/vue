const state = {
  userList: [
    {
      phone: '14770817740',
      password: '123456'
    }
  ],
  isLogin: false,
  USER_LIST: 'userInfo'
}
const mutations = {
  addUser (state, payload) {
    state.userList.push(payload)
  }
}
const getters = {

}
const actions = {
  login ({ state }, payload) {
    return new Promise((resolve, reject) => {
      const { phone, password, isLogin } = payload
      let user = state.userList.find(item => item.phone === phone && item.password === password && isLogin)
      // console.log(user)
      if (user) {
        // 登录成功
        let userInfo = { id: 14770817740 }
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
        resolve(userInfo)
      } else {
        reject(new Error('err'))
      }
    })
  },
  register ({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      let { phone, password } = payload
      let find = state.userList.find(item => item.phone === phone)
      if (find) {
        reject(new Error('用户名已注册'))
      } else {
        commit('addUser', { phone, password })
        resolve()
      }
    })
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
