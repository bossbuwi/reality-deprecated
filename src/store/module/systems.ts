import axios from 'axios'
import { Commit } from 'vuex'

const getDefaultState = () => {
  return {
    systems: {
      count: 0
    }
  }
}

const state = getDefaultState()

const getters = {
  getSystemCount: (state: any) => state.systems.count
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
  }
}

const mutations = {
  resetState (state: any) {
    Object.assign(state, getDefaultState())
  },

  setSystemCount (state: any, count: number) {
    state.systems.count = count
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
