/* eslint-disable */
import axios from 'axios'
import { Commit } from 'vuex'

const getDefaultState = () => {
  return {
    user: {
      id: 0 as number,
      username: '' as string,
      roles: [] as string[],
      token: '' as string
    }
  }
}

const state = getDefaultState()

const getters = {
  isAuthenticated: (state: any) => state.user.id > 0,
  getUserState: (state: any) => state.user,
  getToken: (state: any) => state.user.token
}

const actions = {
  async Login ({ commit }: { commit: Commit }, form: any) {
    let user = null
    await axios.post('concerto/login', form).then((result) => {
      user = result.data
    })
    commit('setUser', user)
  },

  async Logout ({ commit }: { commit: Commit }) {
    commit('resetState')
  }
}

const mutations = {
  resetState (state: any) {
    Object.assign(state, getDefaultState())
  },

  setUser (state: any, user: any) {
    state.user = user
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
