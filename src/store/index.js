import { createStore } from 'vuex'
import login from './login/login'
import team from './team/team'
import center from './center/center'

const store = createStore({
  // namespaced: true,
  state: () => {
    return {}
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    login,
    team,
    center
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
export function setupTeamStore() {
  const role = sessionStorage.getItem('role')
  const uid = sessionStorage.getItem('uid')
  store.dispatch('team/accountVolToProData', {role, uid})
  store.dispatch('team/accountMyProjectData', {role, uid, status:'agreed'})
}
export default store