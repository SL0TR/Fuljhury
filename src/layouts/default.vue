<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <navBar/>
    </q-layout-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-toolbar class="footer flex justify-between">
      <div class="footer">
        &copy; 2018 Fuljhury. All Rights Reserved.
      </div>
        <div class="flex row items-center">
          <div>Developed by &nbsp; </div>
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
import navBar from '../components/nav-bar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
    }
  },
  components: {
    'navBar': navBar
  }
}
</script>

<style>
  .q-layout-page-container {
    min-height: calc(100vh - 50px) !important;
  }

  .myprofile {
    color: #eee;
  }

  /* GLOBAL STYLES */
  .fulljhury-logo {
    width: 80%;
    height: 80%;
  }

  .back-image{
    background-size: 100% 100%;
  }

  .footer {
    margin-top: 1rem;
  }

  @media (max-width: 700px) {
    .footer {
      flex-direction: column;
      justify-content: space-around;
      padding: .5rem 0;
    }

    .footer div {
      margin: .1rem 0;
    }

  }

</style>
