<template>
  <v-app>
    <v-container>
      <v-toolbar app>
        <v-toolbar-title class="headline text-uppercase">
          <span>OARTHUR.</span>
          <span class="font-weight-light">DEV</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          flat
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
        >
          <span class="mr-2">Home</span>
        </v-btn>
        <v-btn
          flat
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
        >
          <span class="mr-2">About Me</span>
        </v-btn>
        <v-btn
          flat
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
        >
          <span class="mr-2">Portfolio</span>
        </v-btn>
        <v-btn
          flat
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
        >
          <span class="mr-2">Contact Me</span>
        </v-btn>
      </v-toolbar>

      <v-content>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      //
    }
  }
}
</script>
