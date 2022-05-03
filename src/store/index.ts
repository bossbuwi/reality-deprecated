import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'
import auth from './module/auth'
import users from './module/users'
import machines from './module/machines'
import systems from './module/systems'
import events from './module/events'
import calendar from './module/calendar'

Vue.use(Vuex)
const ls = new SecureLS({ isCompression: false })

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
    events,
    calendar
  },
  plugins: [createPersistedState({
    key: 'theworldiswaiting',
    storage: {
      getItem: (key) => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: (key) => ls.remove(key)
    },
    paths: ['auth.user']
  })]
})
