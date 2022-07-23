import {getVolToProData, getMyProjectData} from '@/api/check/index'
const teamModule = {
  namespaced: true,
  state() {
    return {
        volToProData:[],
        myProjectData:[]
    }
  },
  getters: {

  },
  mutations: {
    changeVolToProData(state, volToProData) {
        state.volToProData = volToProData
    },
    changeMyProjectData(state, myProjectData) {
        state.myProjectData = myProjectData
    }
  },
  actions: {
    async accountVolToProData({ commit }, payload) {
        const {role, uid} = payload
        const res = await getVolToProData({role, uid, status: 'unverified'})
        const volToProData = res.data
        commit('changeVolToProData', volToProData)
    },
    async accountMyProjectData({commit}, payload){
        const {role, uid, status} = payload
        const res = await getMyProjectData({role, uid, status})
        const myProjectData = res.data
        commit('changeMyProjectData', myProjectData)
    }
  }
}
export default teamModule


