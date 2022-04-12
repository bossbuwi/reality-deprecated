<template>
  <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <v-form
      v-if="!isAuth"
      id="login"
      @submit.prevent="submitForm"
    >
      <v-container>
        <validation-provider
          v-slot="{ errors }"
          name="Username"
          rules="required"
        >
          <v-text-field
            class="mb-4"
            v-model="user.username"
            :error-messages="errors"
            label="Username"
            prepend-inner-icon="mdi-account"
            required
          >
          </v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="Password"
          rules="required"
        >
          <v-text-field
            class="mb-4"
            type="password"
            v-model="user.password"
            :error-messages="errors"
            label="Password"
            prepend-inner-icon="mdi-key"
            required
          >
          </v-text-field>
        </validation-provider>
        <v-btn
          type="submit"
          block
          :disabled="invalid"
          elevation="2"
          :loading="loading"
        >
          Login
        </v-btn>
      </v-container>
    </v-form>
    <v-list
      v-if="isAuth"
    >
      <v-list-item
        href="#"
        @click="logout"
      >
        <v-list-item-icon>
          <v-icon>mdi-exit-to-app</v-icon>
        </v-list-item-icon>
        Log out
      </v-list-item>
    </v-list>
  </validation-observer>
</template>

<script lang="ts">
import Vue from 'vue'
import { extend, setInteractionMode, ValidationObserver, ValidationProvider } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

setInteractionMode('aggressive')

extend('required', {
  ...required,
  message: '{_field_} can not be empty.'
})

export default Vue.extend({
  name: 'LoginForm',

  components: {
    ValidationObserver,
    ValidationProvider
  },

  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      loading: false,
      isAuth: false,
      token: ''
    }
  },

  methods: {
    submitForm () {
      this.loading = true

      //  Put server connection, authentication and everything else here
      // The code below is just a placeholder for a simulated login and server connection
      setTimeout(() => {
        this.loading = false
        this.isAuth = true
      }, 100)
    },

    logout () {
      // Put cleanup codes here then reload the page
      this.$router.go(0)
    }
  }
})
</script>
