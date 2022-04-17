<template>
  <v-container fluid>
    <v-card>
      <v-card-actions
        class="text-h5 font-weight-black"
      >
        Systems List
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
        >
          <v-icon left>
            mdi-playlist-plus
          </v-icon>
          New System
        </v-btn>
      </v-card-actions>
      <v-divider class="mx-8 mt-4"></v-divider>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="systems"
          :items-per-page="5"
        >
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SystemsView',

  components: {},

  data () {
    return {
      headers: [
        {
          text: 'System Prefix',
          align: 'start',
          sortable: true,
          value: 'globalPrefix'
        },
        {
          text: 'Machine',
          align: 'start',
          sortable: true,
          value: 'machine'
        },
        {
          text: 'Zones',
          align: 'start',
          sortable: false,
          value: 'zones'
        },
        {
          text: 'Release',
          align: 'start',
          sortable: true,
          value: 'release'
        }
      ],
      systems: [
        {
          globalPrefix: 'OS',
          machine: 'MNQ',
          zones: 'O4, O5',
          release: 'FM 2021.C'
        },
        {
          globalPrefix: 'YY',
          machine: 'MNQ',
          zones: 'Y5, Y6',
          release: 'FM 2021.B'
        },
        {
          globalPrefix: 'OP',
          machine: 'MNQ',
          zones: 'O5, O6',
          release: 'FM SP19'
        },
        {
          globalPrefix: 'TY',
          machine: 'MNP',
          zones: 'T1',
          release: 'FPM 2022.1'
        },
        {
          globalPrefix: 'NI',
          machine: 'MNP',
          zones: 'N1',
          release: 'FM 2022.C'
        },
        {
          globalPrefix: 'EU',
          machine: 'MNE',
          zones: 'E7',
          release: 'FM 2022.A'
        }
      ]
    }
  }
})
</script>
