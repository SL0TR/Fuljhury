<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <nav-bar/>
    </q-layout-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-layout-footer v-model="footer" >
      <q-toolbar>
        <q-toolbar-title>
          &copy; 2013 Fuljhury. All Rights Reserved.
        </q-toolbar-title>
          <div>Designed by &nbsp; </div>
          <a class="myprofile" href="https://www.facebook.com/Mohaimin94" target="_blank" rel="noopener">
            <q-btn
            outline
            size="sm"
            rounded
            label="Mohaimin Islam"
          />
          </a>
      </q-toolbar>
    </q-layout-footer>
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
  .myprofile {
    color: #eee;
  }

</style>
