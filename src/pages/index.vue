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
        </div>
      </div>
      <div class="col-6 offset-3 q-mb-md">
        <hr>
      </div>
      <div class="col-12  q-mt-md">
        <div class="text-center q-headline text-primary">Ensuring quality one stitch at a time</div>
      </div>
      <div class="col-2 offset-5 q-mt-md">
        <hr>
      </div>
      <div class="col-lg-6 offset-lg-3 col-xs-10 offset-xs-1 q-mt-md q-mb-md">
        <q-card>
          <q-card-title>
            <div class="text-primary q-display-1">We are Fuljhury</div>
          </q-card-title>
          <q-card-separator />
          <q-card-main>
            <div class="q-subheading q-mb-md">Fuljhury Group holds its place as one of the leading knitwear manufacturers of Bangladesh, consisting of Knittex Industries Ltd. and Fuljhury Spinning Mills Ltd. (under construction)</div>
            <q-card-separator />
            <div class="q-subheading q-mb-md q-mt-md">With its top-notch internationally certified quality maintenance, invaluable experience and undeterred reliability, Fuljhury Group has set the highest possible standard in knitwear exports.</div>
            <q-card-separator />
            <div class="q-subheading q-mb-md q-mt-md">Browse our About Us pages to get to know us more. Alternately download our company profile</div>
          </q-card-main>
        </q-card>
      </div>
      <div class="col-lg-6 offset-lg-3 col-xs-10 offset-xs-1 q-mt-md q-mb-md">
        <q-card>
          <q-card-title>
            <div class="text-primary">We welcome an opportunity to talk to you.</div>
            <div slot="subtitle">Just press Contact Us to send us a message</div>
            <div slot="right" class="row items-center">
              <q-btn label="Contact Us" color="primary"/>
            </div>
          </q-card-title>
        </q-card>
      </div>
      <div class="col-xs-10 offset-xs-1  q-mt-lg">
        <div class="text-center q-display-1 text-primary">Featured Certifications</div>
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
  .profilePic {
    min-height: 150px;
  }

  .back-image{
    background-size: 100% 100%;
  }

  .q-carousel-slide {
    background-size: 100% 100% !important;
  }

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
  }

  @media (min-width: 1700px) {
    .profilePic {
      min-height: 200px;
    }
  }

</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
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
