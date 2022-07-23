import { createStore } from 'vuex'
import login from './login/login'

const store = createStore({
  // namespaced: true,
  state: () => {
    return {}
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
export default store
