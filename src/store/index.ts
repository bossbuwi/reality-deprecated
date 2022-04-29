import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from './module/auth'
import users from './module/users'
import machines from './module/machines'
import systems from './module/systems'
import events from './module/events'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    users,
    machines,
    systems,
    events
  },
  plugins: [createPersistedState({
    paths: ['auth.user']
  })]
})
