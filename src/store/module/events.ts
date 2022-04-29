import axios from 'axios'
import { Commit } from 'vuex'

const getDefaultState = () => {
  return {
    events: {
      count: 0 as number
    },
    latestEvent: {
      id: 0 as number,
      system: '' as string,
      zones: '' as string,
      event_types: '' as string,
      start_date: '' as string,
      end_date: '' as string,
      last_changed_by: '' as string
    }
  }
}

const state = getDefaultState()

const getters = {
  getEventCount: (state: any) => state.events.count,
  getLatestEvent: (state:any) => state.latestEvent
}

const actions = {
  async GetEventCount ({ commit, getters, rootGetters }: { commit: Commit, getters: any, rootGetters: any }) {
    const token = rootGetters.getToken
    let count = 0
    await axios.get('sonata/events/count', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then((result) => {
      count = result.data
      commit('setEventCount', count)
    }).catch((error) => {
      console.log(error.response.data)
    })
  },

  async GetLatestEvent ({ commit, getters, rootGetters }: { commit: Commit, getters: any, rootGetters: any }) {
    const token = rootGetters.getToken
    await axios.get('sonata/events/latest', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then((result) => {
      console.log(result.data)
      commit('setLatestEvent', result.data)
    }).catch((error) => {
      console.log(error.response.data)
    })
  }
}

const mutations = {
  resetState (state: any) {
    Object.assign(state, getDefaultState())
  },

  setEventCount (state: any, count: number) {
    state.events.count = count
  },

  setLatestEvent (state: any, event: any) {
    state.latestEvent.id = event.id
    state.latestEvent.system = event.system
    state.latestEvent.start_date = event.start_date
    state.latestEvent.end_date = event.end_date
    state.latestEvent.last_changed_by = event.last_changed_by

    const zonesArr: string[] = event.zones
    state.latestEvent.zones = zonesArr.join(', ')

    const eventTypesArr: string[] = event.event_types
    state.latestEvent.event_types = eventTypesArr.join(', ')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
