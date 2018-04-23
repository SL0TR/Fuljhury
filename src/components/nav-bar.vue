<template>
  <q-toolbar
    color="white"
  >
    <q-toolbar-title>
      <img class="fuljhury-logo" src="../assets/fuljhury-logo.png" alt="fuljhury logo">
    </q-toolbar-title>
  <q-btn-group class="text-primary nav-btns" v-if="this.$q.platform.is.desktop" outline>
    <q-btn label="HOME" outline @click="$router.push('/')"/>
    <q-btn-dropdown class="text-primary" label="ABOUT US" outline>
      <div class="row">
        <div class="col-12 text-center">
          <q-btn class="text-primary full-width" label="COMPANY" flat @click="$router.push('/company')"/>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center">
          <q-btn class="text-primary full-width" label="FACTORY" flat @click="$router.push('/factory')"/>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center">
         <q-btn class="text-primary full-width" label="CERTIFICATIONS" flat @click="$router.push('/certifications')"/>
        </div>
      </div>
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
        <q-btn-dropdown class="text-primary full-width" label="ABOUT US" outline>
          <div class="row">
            <div class="col-12 text-center">
              <q-btn class="text-primary" label="COMPANY" flat @click="$router.push('/company')"/>
            </div>
          </div>
          <div class="row">
            <div class="col-12 text-center">
              <q-btn class="text-primary" label="FACTORY" flat @click="$router.push('/factory')"/>
            </div>
          </div>
          <div class="row">
            <div class="col-12 text-center">
            <q-btn class="text-primary" label="CERTIFICATIONS" flat @click="$router.push('/certifications')"/>
            </div>
          </div>
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
    class="text-primary"
    v-if="this.$q.platform.is.mobile"
    @click="drawer = !drawer"
  />
  </q-toolbar>
</template>

<script>
export default {
  name: 'navBar',
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

  .q-item {
    text-align: center;
  }

  @media (max-width: 700px) {
    .nav-btns {
      display: none;
    }
  }

</style>
