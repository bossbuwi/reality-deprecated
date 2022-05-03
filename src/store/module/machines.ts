/* eslint-disable */
import axios from 'axios'
import { Commit } from 'vuex'

const getDefaultState = () => {
  return {
    machines: {
      count: 0
    }
  }
}

const state = getDefaultState()

const getters = {
  getMachineCount: (state: any) => state.machines.count
}

const actions = {
  async GetMachineCount ({ commit, getters, rootGetters }: { commit: Commit, getters: any, rootGetters: any }) {
    const token = rootGetters.getToken
    let count = 0
    await axios.get('sonata/machines/count', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then((result) => {
      count = result.data
      commit('setMachineCount', count)
    })
  }
}

const mutations = {
  resetMachineState (state: any) {
    Object.assign(state, getDefaultState())
  },

  setMachineCount (state: any, count: number) {
    state.machines.count = count
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
