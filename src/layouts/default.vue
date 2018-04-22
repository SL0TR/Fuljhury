<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="white"
      >
        <q-toolbar-title>
          <img class="fuljhury-logo" src="../assets/fuljhury-logo.png" alt="fuljhury logo">
        </q-toolbar-title>
      <q-btn-group class="text-light-blue">
        <q-btn label="HOME" outline/>
        <q-btn-dropdown class="text-light-blue" label="AbOUT US" outline>
          <q-list link>
            <q-item>
              <q-item-main>
                <q-item-tile label>COMPANY</q-item-tile>
                <q-item-tile label>FACTORY</q-item-tile>
                <q-item-tile label>CERTIFICATIONS</q-item-tile>
              </q-item-main>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn label="PRODUCT" outline/>
        <q-btn label="CONTACT" outline/>
      </q-btn-group>
      </q-toolbar>
    </q-layout-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'LayoutDefault',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .fuljhury-logo {
    height: 3rem;
  }

</style>
