<template>
  <v-container>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>OARTHUR.</span>
        <span class="font-weight-light">DEV</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/">
        <v-btn
          flat
        >
          <span class="mr-2">Home</span>
        </v-btn>
      </router-link>
      <router-link to="about-me">
        <v-btn
          flat
        >
          <span class="mr-2">About Me</span>
        </v-btn>
      </router-link>
      <router-link to="portfolio">
        <v-btn
          flat
        >
          <span class="mr-2">Portfolio</span>
        </v-btn>
      </router-link>
      <router-link to="contact-me">
        <v-btn
          flat
        >
          <span class="mr-2">Contact Me</span>
        </v-btn>
      </router-link>
    </v-toolbar>
  </v-container>
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