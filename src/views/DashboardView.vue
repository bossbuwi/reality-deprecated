<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="12"
      >
        <custom-card-event
          :globalPrefix="event.globalPrefix"
          :zones="event.zones"
          :eventTypes="event.eventTypes"
          :startDate="event.startDate"
          :endDate="event.endDate"
          :lastModifiedBy="event.lastModifiedBy"
        >
        </custom-card-event>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="4"
      >
        <custom-card-basic
          :cardIcon="systems.icon"
          :cardName="systems.name"
          :cardContent="systems.content"
        >
        </custom-card-basic>
      </v-col>

      <v-col
        cols="4"
      >
        <custom-card-basic
          :cardIcon="events.icon"
          :cardName="events.name"
          :cardContent="events.content"
        >
        </custom-card-basic>
      </v-col>

      <v-col
        cols="4"
      >
        <custom-card-basic
          :cardIcon="users.icon"
          :cardName="users.name"
          :cardContent="users.content"
        >
        </custom-card-basic>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import CustomCardBasic from '@/components/CustomCardBasic.vue'
import CustomCardEvent from '@/components/CustomCardEvent.vue'

export default Vue.extend({
  name: 'DashboardView',

  components: {
    CustomCardBasic,
    CustomCardEvent

  },

  data () {
    return {
      systems: {
        name: 'Systems',
        icon: 'mdi-web',
        content: '2'
      },

      events: {
        name: 'Events',
        icon: 'mdi-calendar',
        content: '20'
      },

      users: {
        name: 'Users',
        icon: 'mdi-heart-outline',
        content: '5'
      },

      event: {
        globalPrefix: 'OS',
        zones: 'O4, O5',
        eventTypes: 'SYSMAINT',
        startDate: '2022-04-12',
        endDate: '2022-04-15',
        lastModifiedBy: 'admin'
      }
    }
  },

  methods: {

  }
})
</script>
