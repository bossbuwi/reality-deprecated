<template>
  <v-container fluid>
    <v-card>
      <v-card-actions
        class="text-h5 font-weight-black"
      >
        Events List
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          @click.stop="dialog = true"
        >
          <v-icon left>
            mdi-playlist-plus
          </v-icon>
          New Event
        </v-btn>
      </v-card-actions>
      <v-divider class="mx-8 mt-4"></v-divider>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="eventsList"
          item-key="id"
          :items-per-page="10"
          :loading="loading"
          loading-text="Fetching data, please wait."
        >
        </v-data-table>
      </v-card-text>
    </v-card>
    <!-- Dialog -->
    <v-dialog
      v-model="dialog"
      persistent
      eager
      fullscreen
    >
      <v-card>
        <v-toolbar
          dark
          dense
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>New Event</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-select
                  :items="['MNQ-OS', 'MNQ-YY', 'MNP-TY']"
                  label="System*"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-select
                  :items="['O4', 'O5']"
                  label="Zone*"
                  multiple
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-select
                  :items="['IC', 'COB']"
                  label="Event Type*"
                  multiple
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-menu
                  v-model="sDateMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="startDate"
                      label="Start Date*"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                    <v-date-picker
                      no-title
                      v-model="startDate"
                      @input="sDateMenu = false"
                    ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-menu
                  v-model="eDateMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="endDate"
                      label="End Date*"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                    <v-date-picker
                      no-title
                      v-model="endDate"
                      @input="eDateMenu = false"
                    ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Jira Reference"
                  type="text"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Features Turned On"
                  hint="Please separate entries with a comma."
                  type="text"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Features Turned Off"
                  hint="Please separate entries with a comma."
                  type="text"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="Compiled Sources"
                  hint="Please separate entries with a comma."
                  type="text"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="API Used"
                  hint="Please separate entries with a comma."
                  type="text"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

export default Vue.extend({
  name: 'EventsView',

  components: {},

  data () {
    return {
      startDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      endDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      sDateMenu: false,
      eDateMenu: false,
      dialog: false,
      loading: false,
      headers: [
        {
          text: 'System',
          align: 'start',
          sortable: true,
          value: 'system'
        },
        {
          text: 'Zones',
          align: 'start',
          sortable: false,
          value: 'zones'
        },
        {
          text: 'Event Type',
          align: 'start',
          sortable: true,
          value: 'event_types'
        },
        {
          text: 'Start Date',
          align: 'start',
          sortable: true,
          value: 'start_date'
        },
        {
          text: 'End Date',
          align: 'start',
          sortable: true,
          value: 'end_date'
        },
        {
          text: 'Created By',
          align: 'start',
          sortable: true,
          value: 'created_by'
        }
      ]
    }
  },

  computed: {
    ...mapGetters({
      eventsList: 'getEventsList'
    })
  },

  methods: {
    ...mapActions([
      'GetEventsList'
    ]),

    async getEvents () {
      try {
        this.loading = true
        await this.GetEventsList()
        this.loading = false
      } catch (error) {

      }
    }
  },

  async mounted () {
    await this.getEvents()
  }
})
</script>
