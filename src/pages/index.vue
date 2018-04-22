<template>
  <q-page class="homepage">
    <div class="row">
      <div class="col-12">
        <div class="text-center text-primary q-display-3 q-mt-md">Fulljhury</div>
      </div>
      <div class="col-4 offset-4">
        <hr>
      </div>
      <div class="col-12  q-mt-md">
        <div class="text-center q-headline text-primary">Ensuring quality one stitch at a time</div>
      </div>
      <div class="col-2 offset-5 q-mb-md">
        <hr>
      </div>
      <div class="col-10 offset-1 shadow-1 q-mt-lg">
        <q-card flat color="primary">
          <div class="row">
            <div class="col-lg-4">
              <div class="fit back-image profilePic"
                style="background-image: url(../assets/fuljhury-logo.png); "
              >
              </div>
            </div>
            <div class="col-lg-8">
              <q-card-title>
                <div>Ensuring quality one stitch at a time</div>
              </q-card-title>
              <q-card-main>
                <q-card-separator />
                <p class="text-bold mt-3">About Me: </p>
              </q-card-main>
              <q-card-separator />
              <q-card-actions>
                <p class="text-bold mt-3">About Me: </p>
              </q-card-actions>
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
  .profilePic {
    min-height: 400px;
  }

  .back-image{
    background-size: 100% 100%;
  }

</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
