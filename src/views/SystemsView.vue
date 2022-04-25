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
          @click.stop="dialog = true"
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
          <v-toolbar-title>New System</v-toolbar-title>
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
                  :items="['MNQ', 'MNP']"
                  label="Machine*"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="System Prefix*"
                  hint="Must be unique within the selected machine."
                  type="text"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Software Release*"
                  type="text"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="URL"
                  type="text"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="System Admin(s)"
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
                  label="User Login"
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

export default Vue.extend({
  name: 'SystemsView',

  components: {},

  data () {
    return {
      dialog: false,
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
