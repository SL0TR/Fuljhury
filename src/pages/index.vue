<template>
  <q-page class="homepage">
    <div class="row">
      <div class="col-12">
        <q-carousel
          arrows
          height="calc(100vh - 61px)"
          infinite
          autoplay
          quick-nav
          handle-arrow-keys
          :easing="overshoot"
          class="round-borders shadow-1"
          color="secondary"
        >
          <q-carousel-slide img-src="../assets/fuljhury-new-bg.jpg"></q-carousel-slide>
          <q-carousel-slide img-src="../assets/slide-image-4.JPG"></q-carousel-slide>
          <q-carousel-slide img-src="../assets/slide-image-5.JPG"></q-carousel-slide>
          <q-carousel-slide img-src="../assets/slide-image-3.JPG"></q-carousel-slide>
          <q-carousel-slide img-src="../assets/slide-image-2.JPG"></q-carousel-slide>
        </q-carousel>
      </div>
      <!-- <div class="col-xs-8 offset-xs-2 col-lg-4 offset-lg-4 q-mt-lg flex justify-center items-center">
        <img class="fulljhury-logo" src="../assets/fuljhury-logo.png" alt="fulljhury-logo ">
      </div>
      <div class="col-6 offset-3 q-mb-md">
        <hr>
      </div> -->
      <div class="col-xs-10 offset-xs-1  q-mt-xl">
      <div class="text-center q-headline text-secondary text-bold text-italic">Ensuring quality one stitch at a time.</div>
      </div>
      <div class="col-2 offset-5 q-mt-sm">
        <hr>
      </div>
      <div class="col-lg-8 offset-lg-2 col-xs-10 offset-xs-1 q-mt-xl q-mb-xl">
        <q-card>
          <q-card-title>
            <div class="text-primary q-headline text-center">We are Fuljhury</div>
          </q-card-title>
          <q-card-separator />
          <q-card-main>
            <div class="q-subheading q-mb-md text-center line-height">Fuljhury Group holds its place as one of the leading knitwear manufacturers of Bangladesh, consisting of Knittex Industries Ltd. and Fuljhury Spinning Mills Ltd. (under construction)</div>
            <q-card-separator />
            <div class="q-subheading q-mb-md q-mt-md text-center line-height">With its top-notch internationally certified quality maintenance, invaluable experience and undeterred reliability, Fuljhury Group has set the highest possible standard in knitwear exports.</div>
            <q-card-separator />
            <div class="q-subheading q-mb-md q-mt-md text-center line-height">Browse our About Us pages to get to know us more. Alternately download our company profile</div>
          </q-card-main>
        </q-card>
      </div>
      <div class="col-lg-6 offset-lg-3 col-xs-12 q-mt-xl q-mb-xl">
        <q-card>
          <q-card-title>
            <div class="text-primary">We welcome an opportunity to talk to you.</div>
            <div slot="subtitle">Just press Contact Us to send us a message</div>
            <div slot="right" class="row items-center">
              <q-btn label="Contact Us" color="secondary"  @click="$router.push('/contact')"/>
            </div>
          </q-card-title>
        </q-card>
      </div>
      <div class="col-xs-10 offset-xs-1  q-mt-lg">
        <div class="text-center q-display-1 text-secondary text-bold">Featured Certifications</div>
      </div>
      <div class="col-2 offset-5 q-mt-sm">
        <hr>
      </div>
      <div class="col-lg-10 offset-lg-1 col-xs-10 offset-xs-1 q-mt-md q-mb-md">
        <a v-for="(logo,key) in featuredCert" :key="key" :href="logo.url" target="_blank" rel="noopener">
        <img class="feature-cert-logo"  :src="logo.imgLogo" alt="image">
        </a>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
  .q-carousel-slide {
    position: relative;
  }

  /* .q-carousel-slide::after {
    content: "";
    background:  linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6));
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  } */

  /* .fulljhury-logo {
    position: absolute;
    height: 15rem;
    width: 25rem;
    top: 32vh;
    opacity: .7;
  } */

  .feature-cert-logo {
    width: 18%;
    margin-left: 2%;
  }

  @media (max-width: 700px) {
    .profilePic {
      min-height: 150px;
    }

    .feature-cert-logo {
      width: 100%;
    }

    .fulljhury-logo {
      width: 15rem;
      height: 8rem;
    }
  }

  @media (min-width: 1700px) {
    /* .profilePic {
      min-height: 200px;
    } */
  }

</style>

<script>
import { easing } from 'quasar'
export default {
  name: 'PageHome',
  data () {
    return {
      overshoot: easing.overshoot,
      featuredCert: [
        {
          url: 'http://www.bsci-intl.org/',
          imgLogo: '../assets/cert1_sm.jpg'
        },
        {
          url: 'https://www.oeko-tex.com/en/manufacturers/manufacturers.xhtml',
          imgLogo: '../assets/cert2_sm.jpg'
        },
        {
          url: 'http://www.bgmea.com.bd/',
          imgLogo: '../assets/cert3_sm.jpg'
        },
        {
          url: 'http://www.bkmea.com/',
          imgLogo: '../assets/cert4_sm.jpg'
        },
        {
          url: 'https://www.sedexglobal.com/',
          imgLogo: '../assets/cert5_sm.jpg'
        }
      ]
    }
  }
}
</script>
