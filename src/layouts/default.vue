<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <nav-bar/>
    </q-layout-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import navBar from '../components/navBar'
export default {
  name: 'LayoutDefault',
  data () {
    return {
    }
  },
  components: {
    navBar
  }
}
</script>

<style scoped>
</style>
