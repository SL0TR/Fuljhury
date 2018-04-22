<template>
  <q-page class="homepage">
    <div class="row">
      <div class="col-12">
        <q-carousel
          arrows
          height="50vh"
          infinite
          autoplay
          quick-nav
          class="round-borders shadow-1"
        >
          <q-carousel-slide img-src="../assets/company_cover_1.jpg">
            <div class="absolute-bottom custom-caption"></div>
          </q-carousel-slide>
          <q-carousel-slide img-src="../assets/heading2.jpg">
            <div class="absolute-bottom custom-caption"></div>
          </q-carousel-slide>
          <q-carousel-slide img-src="../assets/heading3.jpg">
            <div class="absolute-bottom custom-caption"></div>
          </q-carousel-slide>
        </q-carousel>
      </div>
      <div class="col-xs-8 offset-xs-2 col-lg-4 offset-lg-4 q-mt-lg">
        <div class="row">
          <div class="col-12">
            <div class="fit back-image profilePic"
              style="background-image: url(../assets/fuljhury-logo.png); "
            >
            </div>
          </div>
          <div class="col-8 offset-2 q-mb-md">
            <hr>
          </div>
          <div class="col-12  q-mt-md">
            <div class="text-center q-headline text-primary">Ensuring quality one stitch at a time</div>
          </div>
          <div class="col-4 offset-4 q-mt-md">
            <hr>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
  .profilePic {
    min-height: 150px;
  }

  .back-image{
    background-size: 100% 100%;
  }

  .q-carousel-slide {
    background-size: 100% 100% !important;
  }

  @media (max-width: 700px) {
    .profilePic {
      min-height: 150px;
    }
  }

  @media (min-width: 1700px) {
    .profilePic {
      min-height: 200px;
    }
  }

</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
