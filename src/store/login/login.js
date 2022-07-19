/*
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenuByRoleId
} from '@/service/login/login'
import localCache from '@/utils/cache'
import { mapMenuToRoutes, mapMenusToPermission } from '@/utils/map-menus'
import router from '@/router'
const loginModule = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: {},
      permissions: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token) {
      state.token = token
    },
    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    changeUserMenu(state, userMenu) {
      state.userMenu = userMenu
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload) {
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)
      const userMenuResult = await requestUserMenuByRoleId(userInfo.role.id)
      const userMenu = userMenuResult.data
      localCache.setCache('userMenu', userMenu)
      commit('changeUserMenu', userMenu)
      router.push('/main')
    },
    phoneLoginAction({ commit }, payload) {
      console.log(payload)
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenu = localCache.getCache('userMenu')
      if (userMenu) {
        commit('changeUserMenu', userMenu)
        // userMenus => routes
        const routes = mapMenuToRoutes(userMenu)
        // 将routes => routes.main.children
        routes.forEach((route) => {
          router.addRoute('main', route)
        })
        const permissions = mapMenusToPermission(userMenu)
        state.permissions = permissions
      }
    }
  }
}
export default loginModule
*/