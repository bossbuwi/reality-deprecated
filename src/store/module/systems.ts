import axios from 'axios'
import { Commit } from 'vuex'
import { System } from 'src/models/system'

const getDefaultState = () => {
  return {
    systems: {
      count: 0
    },
    list: [

    ]
  }
}

const state = getDefaultState()

const getters = {
  getSystemCount: (state: any) => state.systems.count,
  getSystemsList: (state: any) => state.list
}

const actions = {
  async GetSystemCount ({ commit, getters, rootGetters }: { commit: Commit, getters: any, rootGetters: any }) {
    const token = rootGetters.getToken
    let count = 0
    await axios.get('sonata/systems/count', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then((result) => {
      count = result.data
      commit('setSystemCount', count)
    }).catch((error) => {
      console.log(error.response.data)
    })
  },

  async GetSystemsList ({ commit, getters, rootGetters }: { commit: Commit, getters: any, rootGetters: any }) {
    const token = rootGetters.getToken
    await axios.get('sonata/systems/index', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then((result) => {
      console.log(result.data)
      const systemArr = result.data as System[]
      systemArr.forEach((element: System) => {
        commit('addSystemToList', element)
      })
    }).catch((error) => {
      console.log(error.response.data)
    })
  }
}

const mutations = {
  resetState (state: any) {
    Object.assign(state, getDefaultState())
  },

  setSystemCount (state: any, count: number) {
    state.systems.count = count
  },

  addSystemToList (state: any, system: System) {
    state.list.push(system)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}