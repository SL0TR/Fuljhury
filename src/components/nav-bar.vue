<template>
  <q-toolbar
    color="white"
  >
    <q-toolbar-title>
      <img class="fuljhury-logo" src="../statics/images/fuljhury-logo.png" alt="fuljhury logo">
    </q-toolbar-title>
  <q-btn-group class="text-primary nav-btns" v-if="this.$q.platform.is.desktop" flat>
    <q-btn class=" nav-btn" label="HOME" flat @click="$router.push('/')"/>
    <q-btn class=" nav-btn" label="COMPANY" flat @click="$router.push('/company')"/>
    <q-btn class=" nav-btn" label="FACTORY" flat @click="$router.push('/factory')"/>
    <q-btn class=" nav-btn" label="CERTIFICATIONS" flat @click="$router.push('/certifications')"/>
    <q-btn class=" nav-btn" label="PRODUCT" flat @click="$router.push('/product')"/>
    <q-btn class=" nav-btn" label="CONTACT US" flat @click="$router.push('/contact')"/>
  </q-btn-group>
  <q-layout-drawer class="text-primary" side="left" v-model="drawer">
    <div class="row">
      <div class="col-10 offset-1 q-mt-xl">
        <q-btn class="full-width" label="HOME" outline @click="$router.push('/')"/>
      </div>
      <div class="col-10 offset-1 q-mt-lg">
        <q-btn class="text-primary full-width" label="COMPANY" outline @click="$router.push('/company')"/>
      </div>
      <div class="col-10 offset-1 q-mt-lg">
        <q-btn class="text-primary full-width" label="FACTORY" outline @click="$router.push('/factory')"/>
      </div>
      <div class="col-10 offset-1 q-mt-lg">
        <q-btn class="text-primary full-width" label="CERTIFICATIONS" outline @click="$router.push('/certifications')"/>
      </div>
      <div class="col-10 offset-1 q-mt-lg">
        <q-btn class="full-width" label="PRODUCT" outline @click="$router.push('/product')"/>
      </div>
      <div class="col-10 offset-1 q-mt-lg">
        <q-btn class="full-width" label="CONTACT US" outline @click="$router.push('/contact')"/>
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

  .nav-btn {
    transition: all .3s ease-in-out;
  }

  .nav-btn:hover {
    background: #037001;
    color: #eee !important;
  }

  @media (max-width: 700px) {
    .nav-btns {
      display: none;
    }
  }

</style>
