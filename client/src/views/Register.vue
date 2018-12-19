<template>
  <div>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <h1> Register </h1>
        <v-text-field :value="registerEmail" @input="setRegisterEmail" label="Email" placeholder="Email"> </v-text-field>
        <v-text-field :value="registerPassword" @input="setRegisterPassword" label="Password" type="password" aria-autocomplete="new-password" placeholder="Password"> </v-text-field>

        <v-alert type="error" :value="registerError">
          {{registerError}}
        </v-alert>

        <v-btn color="green" dark @click="register">
          <v-icon>account_circle</v-icon>
          Register
        </v-btn>

      </v-flex>
    </v-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('authentication', [
      'registerEmail',
      'registerPassword',
      'registerError',
    ]),
  },
  methods: {
    ...mapMutations('authentication', [
      'setRegisterEmail',
      'setRegisterPassword',
    ]),
    ...mapActions('authentication', [
      'register',
    ]),
  },
};
</script>
