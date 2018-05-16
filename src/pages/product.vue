<template>
  <div class="row">
    <div class="col-xs-10 offset-xs-1  q-mt-xl">
      <div class="text-center q-display-3 text-secondary text-bold uppercase featured-header">Our Products</div>
    </div>
    <div class="col-2 offset-5 q-mt-sm">
      <hr>
    </div>
    <div class="col-lg-10 offset-lg-1 col-xs-12 flex wrap items-center justify-center q-mt-lg">
      <gallery :images="images" :index="index" @close="index = null"></gallery>
      <div
        class="galleryImage round-borders"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>
    </div>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery'

export default {
  name: 'PageProducts',
  data () {
    return {
      images: [
        '../statics/images/product-1.png',
        '../statics/images/product-2.png',
        '../statics/images/product-3.png',
        '../statics/images/product-4.png',
        '../statics/images/product-5.png',
        '../statics/images/product-6.png',
        '../statics/images/product-7.png',
        '../statics/images/product-8.png',
        '../statics/images/product-9.png'

      ],
      index: null
    }
  },
  components: {
    'gallery': VueGallery
  }
}
</script>

<style scoped>

.galleryImage {
  background-size: 100% 100%;
  display: inline-block;
  height: 400px;
  width: 300px ;
  margin: 2rem;
  transition: all ease-in-out 300ms;
}

.galleryImage:hover {
  transform: translate(0px, -10px) scale(1.2);
  cursor: pointer;
}

</style>
