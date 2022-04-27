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
  getUserState: (state: any) => state.user
}

const actions = {
  async Login ({ commit }: { commit: Commit }, form: any) {
    console.log(form)
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
  setUser (state: any, user: any) {
    state.user = user
  },

  resetState (state: any) {
    Object.assign(state, getDefaultState())
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
