<template>
  <v-app id="inspire">
    <custom-app-bar/>
    <custom-side-bar/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import CustomAppBar from './components/CustomAppBar.vue'
import CustomSideBar from './components/CustomSideBar.vue'

export default Vue.extend({
  components: { CustomSideBar, CustomAppBar },
  name: 'App',

  data: () => ({})
})
</script>
