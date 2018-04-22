<template>
  <q-toolbar
    color="white"
  >
    <q-toolbar-title>
      <img class="fuljhury-logo" src="../assets/fuljhury-logo.png" alt="fuljhury logo">
    </q-toolbar-title>
  <q-btn-group class="text-primary" v-if="this.$q.platform.is.desktop">
    <q-btn label="HOME" outline/>
    <q-btn-dropdown class="text-primary" label="AbOUT US" outline>
      <q-list link class="text-primary">
        <q-item>
          <q-item-main>
            <q-item-tile label>COMPANY</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-main>
            <q-item-tile label>FACTORY</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-main>
            <q-item-tile label>CERTIFICATIONS</q-item-tile>
          </q-item-main>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    <q-btn label="PRODUCT" outline/>
    <q-btn label="CONTACT" outline/>
  </q-btn-group>
  <q-layout-drawer class="text-primary" side="left" v-model="drawer">
    <div class="row">
      <div class="col-10 offset-1 q-mt-xl">
        <q-btn class="full-width" label="HOME" outline/>
      </div>
      <div class="col-10 offset-1 q-mt-lg">
      <q-btn-dropdown class="text-primary full-width" label="AbOUT US" outline>
        <q-list link class="text-primary">
          <q-item>
            <q-item-main>
              <q-item-tile label>COMPANY</q-item-tile>
            </q-item-main>
          </q-item>
          <q-item>
            <q-item-main>
              <q-item-tile label>FACTORY</q-item-tile>
            </q-item-main>
          </q-item>
          <q-item>
            <q-item-main>
              <q-item-tile label>CERTIFICATIONS</q-item-tile>
            </q-item-main>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      </div>
      <div class="col-10 offset-1 q-mt-lg">
        <q-btn class="full-width" label="PRODUCT" outline/>
      </div>
      <div class="col-10 offset-1 q-mt-lg">
        <q-btn class="full-width" label="CONTACT" outline/>
      </div>
    </div>
  </q-layout-drawer>
  <q-btn
    icon="menu"
    color="primary"
    v-if="this.$q.platform.is.mobile"
    @click="drawer = !drawer"
  />
  </q-toolbar>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style scoped>
  .fuljhury-logo {
    height: 3rem;
  }

</style>
