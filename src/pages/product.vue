<template>
  <div class="row">
    <div class="col-xs-10 offset-xs-1  q-mt-xl">
      <div class="text-center q-display-3 text-secondary text-bold uppercase">Our Products</div>
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
        '../assets/product1.jpg',
        '../assets/product2.jpg',
        '../assets/product3.jpg',
        '../assets/product4.jpg',
        '../assets/product5.jpg',
        '../assets/product6.jpg',
        '../assets/product7.jpg',
        '../assets/product8.jpg',
        '../assets/product9.jpg',
        '../assets/product10.jpg',
        '../assets/product11.jpg',
        '../assets/product12.jpg',
        '../assets/product13.jpg',
        '../assets/product14.jpg',
        '../assets/product15.jpg',
        '../assets/product16.jpg',
        '../assets/product17.jpg',
        '../assets/product18.jpg',
        '../assets/product19.jpg'

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
  box-shadow: 0px 17px 10px -10px rgba(0,0,0,0.4);
  transition: all ease-in-out 300ms;
  border: 1px solid #4EA2BD;
}

.galleryImage:hover {
  box-shadow: 0px 37px 20px -20px rgba(0,0,0,0.2);
  transform: translate(0px, -10px) scale(1.2);
  border: 5px solid #4EA2BD;
}

</style>
