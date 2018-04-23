<template>
  <q-toolbar
    color="white"
  >
    <q-toolbar-title>
      <img class="fuljhury-logo" src="../assets/fuljhury-logo.png" alt="fuljhury logo">
    </q-toolbar-title>
  <q-btn-group class="text-primary nav-btns" v-if="this.$q.platform.is.desktop">
    <q-btn label="HOME" outline @click="$router.push('/')"/>
    <q-btn-dropdown class="text-primary" label="AbOUT US" outline split>
      <q-list link class="text-primary">
        <q-item>
          <q-item-main>
            <q-item-tile label @click="$router.push('/company')">COMPANY</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-main>
            <q-item-tile label @click="$router.push('/factory')">FACTORY</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-main>
            <q-item-tile label @click="$router.push('/certifications')">CERTIFICATIONS</q-item-tile>
          </q-item-main>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    <q-btn label="PRODUCT" outline @click="$router.push('/product')"/>
    <q-btn label="CONTACT" outline @click="$router.push('/contact')"/>
  </q-btn-group>
  <q-layout-drawer class="text-primary" side="left" v-model="drawer">
    <div class="row">
      <div class="col-10 offset-1 q-mt-xl">
        <q-btn class="full-width" label="HOME" outline @click="$router.push('/')"/>
      </div>
      <div class="col-10 offset-1 q-mt-lg">
      <q-btn-dropdown class="text-primary full-width" label="AbOUT US" outline>
        <q-list link class="text-primary">
          <q-item>
            <q-item-main>
              <q-item-tile label @click="$router.push('/company')">COMPANY</q-item-tile>
            </q-item-main>
          </q-item>
          <q-item>
            <q-item-main>
              <q-item-tile label @click="$router.push('/factory')">FACTORY</q-item-tile>
            </q-item-main>
          </q-item>
          <q-item>
            <q-item-main>
              <q-item-tile label @click="$router.push('/certifications')">CERTIFICATIONS</q-item-tile>
            </q-item-main>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      </div>
      <div class="col-10 offset-1 q-mt-lg">
        <q-btn class="full-width" label="PRODUCT" outline @click="$router.push('/product')"/>
      </div>
      <div class="col-10 offset-1 q-mt-lg">
        <q-btn class="full-width" label="CONTACT" outline @click="$router.push('/contact')"/>
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

  @media (max-width: 700px) {
    .nav-btns {
      display: none;
    }
  }

</style>
