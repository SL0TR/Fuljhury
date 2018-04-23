<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <nav-bar/>
    </q-layout-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-toolbar class="footer flex justify-between">
      <div class="footer">
        &copy; 2018 Fuljhury. All Rights Reserved.
      </div>
        <div class="flex row">
          <div>Designed by &nbsp; </div>
          <a class="myprofile" href="https://www.facebook.com/Mohaimin94" target="_blank" rel="noopener">
            <q-btn
            outline
            size="sm"
            rounded
            label="Mohaimin Islam"
          />
          </a>
        </div>
    </q-toolbar>
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

  @media (max-width: 700px) {
    .footer {
      flex-direction: column;
      justify-content: space-around;
    }

    .footer div {
      margin: .1rem 0;
    }

  }

</style>
