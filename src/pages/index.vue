<template>
  <q-page class="homepage">
    <div class="row">
      <div class="col-xs-8 offset-xs-2 col-lg-4 offset-lg-4 q-mt-lg">
        <div class="row">
          <div class="col-12">
            <div class="fit back-image profilePic"
              style="background-image: url(../assets/fuljhury-logo.png); "
            >
            </div>
          </div>
        </div>
      </div>
      <div class="col-12  q-mt-md">
        <div class="text-center q-headline text-primary">Ensuring quality one stitch at a time</div>
      </div>
      <div class="col-2 offset-5 q-mb-md">
        <hr>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
  .profilePic {
    min-height: 250px;
  }

  .back-image{
    background-size: 100% 100%;
  }

  @media (max-width: 700px) {
    .profilePic {
      min-height: 150px;
    }
  }

</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
