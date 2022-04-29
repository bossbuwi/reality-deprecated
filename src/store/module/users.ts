import axios from 'axios'
import { Commit } from 'vuex'

const getDefaultState = () => {
  return {
    users: {
      count: 0
    }
  }
}

const state = getDefaultState()

const getters = {
  getUserCount: (state: any) => state.users.count
}

const actions = {
  async GetUserCount ({ commit, getters, rootGetters }: { commit: Commit, getters: any, rootGetters: any }) {
    const token = rootGetters.getToken
    let count = 0
    await axios.get('symphony/users/count', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then((result) => {
      count = result.data
      commit('setUserCount', count)
    }).catch((error) => {
      console.log(error.response.data)
    })
  }
}

const mutations = {
  resetState (state: any) {
    Object.assign(state, getDefaultState())
  },

  setUserCount (state: any, count: number) {
    state.users.count = count
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
