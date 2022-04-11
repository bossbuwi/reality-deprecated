<template>
  <v-navigation-drawer
    app
    permanent
    clipped
  >
    <v-list
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.route"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CustomSideBar',

  data: () => ({
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard-outline', route: '/' },
      { title: 'Systems', icon: 'mdi-web', route: '/systems' },
      { title: 'Calendar', icon: 'mdi-calendar-outline', route: '/calendar' },
      { title: 'Events', icon: 'mdi-alarm', route: '/events' },
      { title: 'Reports', icon: 'mdi-chart-box-outline', route: '/reports' },
      { title: 'User Profile', icon: 'mdi-account-outline', route: '/user' },
      { title: 'Settings', icon: 'mdi-cog-outline', route: '/settings' },
      { title: 'About', icon: 'mdi-application-brackets-outline', route: '/about' }
    ]
  })
})
</script>
