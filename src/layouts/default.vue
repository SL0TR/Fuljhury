<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <navBar/>
    </q-layout-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <footer-comp/>
  </q-layout>
</template>

<script>
import navBar from '../components/nav-bar'
import footerComp from '../components/footer-comp'

export default {
  name: 'LayoutDefault',
  data () {
    return {
    }
  },
  components: {
    'navBar': navBar,
    footerComp
  }
}
</script>

<style>
  @font-face {
  font-family: 'bignoodletitling';
  src: url('../statics/fonts/bignoodletitling-webfont.woff') format('woff'), /* Modern Browsers */
       url('../statics/fonts/BigNoodleTitling.ttf')  format('truetype'), /* Safari, Android, iOS */
  }

  .q-layout-page-container {
    min-height: calc(100vh - 50px) !important;
  }

  .myprofile {
    color: #eee;
  }

  /* GLOBAL STYLES */
  .fulljhury-logo {
    width: 70%;
    height: 80%;
  }

  .back-image{
    background-size: 100% 100%;
  }

  .line-height {
    line-height: 1.5rem;
  }

  .featured-header {
    font-family: 'bignoodletitling', sans-serif;
  }

</style>
