<template>
  <v-app id="inspire">
    <custom-app-bar/>
    <custom-side-bar/>
    <v-main>
      <router-view></router-view>
      <v-dialog
        v-model="dialog"
        width="500"
        persistent
      >
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Error
          </v-card-title>
          <v-card-text>
            <v-list flat>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>Message</v-list-item-title>
                  <v-list-item-subtitle>{{ error.message }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>HTTP Response</v-list-item-title>
                  <v-list-item-subtitle>{{ error.status + ' - ' + error.error }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dismissError"
            >
              Dismiss
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import CustomAppBar from './components/CustomAppBar.vue'
import CustomSideBar from './components/CustomSideBar.vue'

export default Vue.extend({
  components: { CustomSideBar, CustomAppBar },
  name: 'App',

  data () {
    return {

    }
  },

  computed: {
    ...mapGetters({
      dialog: 'getErrorStatus',
      error: 'getError'
    })
  },

  methods: {
    ...mapActions([
      'DismissError'
    ]),

    dismissError () {
      this.DismissError()
    }
  }
})
</script>
