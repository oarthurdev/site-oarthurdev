<template>
  <v-app>
    <v-container>
      <Menu />
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script>
import Menu from './components/Menu'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>
<style lang="scss">
a{
  text-decoration: none;
}
</style>