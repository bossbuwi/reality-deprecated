/* eslint-disable */
import axios from 'axios'
import { Commit } from 'vuex'

const getDefaultState = () => {
  return {
    machines: {
      count: 0
    },
    list: [

    ]
  }
}

const state = getDefaultState()

const getters = {
  getMachineCount: (state: any) => state.machines.count,
  getMachineList: (state: any) => state.list
}

const actions = {
  async GetMachineCount ({ commit, getters, rootGetters }: { commit: Commit, getters: any, rootGetters: any }) {
    const token = rootGetters.getToken
    let count = 0
    await axios.get('sonata/con/machines/count', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then((result) => {
      count = result.data
      commit('setMachineCount', count)
    })
  },

  async GetMachinesList ({ commit }: { commit: Commit }) {
    await axios.get('sonata/con/machines/index').then((result) => {
      commit('resetMachineState')
      const machineArr = result.data as any[]
      machineArr.forEach((element: any) => {
        commit('addMachineToList', element)
      })
    })
  }
}

const mutations = {
  resetMachineState (state: any) {
    Object.assign(state, getDefaultState())
  },

  setMachineCount (state: any, count: number) {
    state.machines.count = count
  },

  addMachineToList (state: any, machine: any) {
    state.list.push(machine)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
