import {login, requestUserInfoById } from '@/api/login/index'
import router from '@/router'
const loginModule = {
  namespaced: true,
  state() {
    return {
      token: '',
      role:'',
      uid: '',
      isLogin: false,
      userInfo:{}
    }
  },
  getters: {

  },
  mutations: {
    changeToken(state, token) {
      state.token = token
    },
    changeRole(state, role) {
      state.role = role
    },
    changeUid(state, uid) {
      state.uid = uid
    },
    changeIsLogin(state, isLogin){
      state.isLogin =isLogin
    },
    changeUserInfo(state, userInfo){
      state.userInfo =userInfo
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload) {
      const loginResult = await login(payload)
      const {uid, role, token} = loginResult.data
      commit('changeToken', token)
      sessionStorage.setItem('token', token)
      commit('changeRole', role)
      sessionStorage.setItem('role', role)
      commit('changeUid', uid)
      sessionStorage.setItem('uid', uid)
      commit('changeIsLogin', true)
      
      const userInfoResult = await requestUserInfoById({role, uid})
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = sessionStorage.getItem('token')
      if (token) {
        commit('changeToken', token)
        commit('changeIsLogin', true)
      }
      const role = sessionStorage.getItem('role')
      if (role) {
        commit('changeRole', role)
      }
      const uid = sessionStorage.getItem('uid')
      if (uid) {
        commit('changeUid', uid)
      }
      const userInfo = sessionStorage.getItem('userInfo')
      if (userInfo) {
        commit('changeUserInfo', JSON.parse(userInfo))
      }
    },
    Logout({commit}){
      commit('changeToken', '')
      sessionStorage.setItem('token', '')
      commit('changeRole', '')
      sessionStorage.setItem('role', '')
      commit('changeUserInfo', {})
      sessionStorage.setItem('uid', '')
      commit('changeUid', {})
      sessionStorage.setItem('userInfo', '')
      commit('changeIsLogin', false)
      router.push('/main')
    }
  }
}
export default loginModule
