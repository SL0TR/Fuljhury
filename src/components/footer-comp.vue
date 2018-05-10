<template>
  <q-toolbar class="footer flex justify-between">
    <div>
      &copy; 2018 Fuljhury. All Rights Reserved.
    </div>
      <div class="flex row items-center">
        <div class="q-body-1">Developed by &nbsp; </div>
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
