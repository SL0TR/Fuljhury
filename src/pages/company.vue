<template>
  <div class="row">
    <div class="col-xs-10 offset-xs-1  q-mt-lg">
      <div class="text-center q-display-3 text-secondary text-bold uppercase featured-header">Our Company</div>
    </div>
    <div class="col-2 offset-5 q-mt-sm q-mb-lg">
      <hr>
    </div>
    <div class="company-bg">
    </div>
    <div class="col-lg-8 offset-lg-2 col-xs-10 offset-xs-1 q-mt-md q-mb-md">
      <q-card>
        <q-card-title>
          <div class="text-primary q-headline text-center">Company Profile</div>
        </q-card-title>
        <q-card-separator />
        <q-card-main>
          <div class="q-subheading q-mt-md q-mb-md ">
            <span class="text-bold">Knittex Industries Ltd.</span> is a sister concern of <span class="text-bold"> Fuljhury Group.</span> The company produces the best
            quality garment products starting from square one, raw cotton, and through knitting, dying,
            finishing and printing, finally producing various types of clothing which meet international
            demands.
          </div>
          <q-card-separator/>
          <div class="q-subheading q-mt-md q-mb-md line-height">
            Knittex is one of the leading manufacturer & supplier of knit products with a wide range of t-shirts, polo shirts, vests, shorts etc. in various qualities of fabrics for children, men’s &amp; ladies. We have been involved in the textiles/garment industry for over 30 years. and have a long list of clients from all over the world including the US, Canada and mainly Europe.
          </div>
          <q-card-separator/>
          <div class="q-subheading q-mt-md q-mb-md line-height">
            By the passion, determination and experience of the executives and managers, and the dedication of more than 1500 employees working in a self-sustained and state of the art, fully compliant
            production facility, Knittex has become a bright example of the ever-growing and promising
            garments sector of Bangladesh, proudly representing the country in the global garments market.
          </div>
        </q-card-main>
      </q-card>
    </div>
    <div class="col-xs-10 offset-xs-1  q-mt-xl">
      <div class="text-center q-display-1 text-secondary text-bold uppercase featured-header">Board of Directors</div>
    </div>
    <div class="col-2 offset-5 q-mt-sm">
      <hr>
    </div>
    <div class="col-lg-10 offset-lg-1 col-xs-10 offset-xs-1 q-mt-xl q-mb-xl">
      <div class="img-wrapper shadow-1" v-for="(director,key) in boardDirectos" :key="key">
        <img  class="director-img"  :src="director.img" alt="image" v-bind:class="{ imgTop : key === 1 || key === 2 }">
        <div class="img-text full-width text-primary text-bold q-pa-sm q-headline text-italic">{{ director.name }}</div>
      </div>
    </div>
    <div class="col-12 text-center  text-secondary q-display-1 q-mt-xl text-bold uppercase featured-header">Bank Details</div>
    <div class="col-2 offset-5 q-mt-sm">
      <hr>
    </div>
    <div class="col-lg-12 col-xs-12 q-mt-xl q-mb-xl">
      <div class="text-center q-mb-md q-title text-primary">Agrani Bank Limited</div>
      <div class="text-center q-mb-md">Foreign Exchange Branch </div>
      <div class="text-center q-mb-md">Tel: +880-2-9560832, 9552319, 7176449</div>
      <div class="text-center q-mb-md">Fax: +880-2-9567185</div>
      <div class="text-center">SWIFT: AGBKBDDH006</div>
    </div>
    <div class="col-lg-8 offset-lg-2 col-xs-10 offset-xs-1 q-mt-xl q-mb-xl">
      <q-card>
        <q-card-title>
          <div class="text-primary q-headline text-center">Name of Companies</div>
        </q-card-title>
        <q-card-separator />
        <q-card-main>
          <div class="q-subheading q-mb-md"> <q-icon color="secondary" size="25px" name="navigate next" /> Knittex Industries Ltd.: 100% Export Oriented Composite Knit Garments (Knitting, Dyeing, Finishing, Printing &amp; Garments).</div>
          <div class="q-subheading q-mb-md q-mt-md"> <q-icon color="secondary" size="25px" name="navigate next" /> Fuljhury Spinning Mills Ltd. (under construction): 100% cotton knit yarn production.</div>
        </q-card-main>
      </q-card>
    </div>
    <div class="col-lg-8 offset-lg-2 col-xs-10 offset-xs-1 q-mt-md q-mb-xl">
      <q-card>
        <q-card-title>
          <div class="text-primary q-headline text-center">Corporate Social Responsibility</div>
        </q-card-title>
        <q-card-separator />
        <q-card-main>
          <div class="q-subheading q-mb-md text-center line-height">As a prominent entity in the growing RMG sector of Bangladesh, Fuljhury group strongly believes in the principles of Corporate Social Responsibility. As a part of that, the group has ensured a work environment which is respectful of the essential rights and safety of the workers providing the necessary facilities and meeting international standards. This includes dining halls, prayer areas, childcare area, health and safety equipment and much more in order to ensure a fully internationally compliant working atmosphere. The group also thrives continuously towards making their manufacturing workflow environmentally friendly which includes minimised wastage, an Effluent Treatment Plant (ETP,) steam recovery system and much more.</div>
          <q-card-separator />
          <div class="q-subheading q-mb-md q-mt-md text-center line-height">The group is also committed to the general welfare of the society, participating in various social activities for the common good of the under-privileged. Through the <span class="text-bold"> Nurjahan-Salam Foundation (NSF)</span>, Fuljhury Group aims to create a platform to support the destitute. Moreover, the group is also determined to provide necessary shelter and education to poor and orphan children through <span class="text-bold"> Hakro Shishu Niketon while providing free healthcare facilities through the Babar Ullah Fakir Free Clinic </span> and a free kindergarten school (BFKG). Fuljhury takes part in these activities and many more as means of aiding the society and upholding its responsibilities as a corporate group.</div>
          <q-card-separator />
        </q-card-main>
      </q-card>
    </div>
    <div class="col-12 text-center  text-secondary q-display-1 q-mt-xl text-bold uppercase featured-header">Sister concern</div>
    <div class="col-2 offset-5 q-mt-sm">
      <hr>
    </div>
    <div class="col-lg-12 col-xs-12 q-mt-xl q-mb-xl">
      <div class="text-center q-mb-md text-primary q-headline">Deutsch Bangla Textil Vertriebs GmbH </div>
      <div class="text-center q-mb-md">Address: Eckerngarten 6 D-34497 Korbach-Lelbach</div>
      <div class="text-center q-mb-md">Phone: +49 (56 31) 91 52 55</div>
      <div class="text-center q-mb-md">Tel: +49 (171) 286 16 02</div>
      <div class="text-center q-mb-md">Fax: +49 ( 56 31) 77 77</div>
      <div class="text-center">Email: info@deutsch-bangla.de</div>
    </div>
    <div class="col-lg-12 col-xs-12 q-mt-xl q-mb-xl">
      <div class="text-center q-mb-md text-primary q-headline">SEALIONS</div>
      <div class="text-center q-mb-md">Contact person: Mr Shitu Chowdhury</div>
      <div class="text-center q-mb-md">Email: sealions5@gmail.com</div>
      <div class="text-center">Phone: +39 331 3038611</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PageCompany',
  data () {
    return {
      boardDirectos: [
        {
          name: 'Mrs. Shireen Shamsun Nahar',
          img: '../statics/images/director_0.jpg'
        },
        {
          name: 'Md. Asadul Haq',
          img: '../statics/images/director_1.jpg'
        },
        {
          name: 'M. Ehsanul Haq',
          img: '../statics/images/director_2.jpg'
        },
        {
          name: 'Md. Riajul Haq',
          img: '../statics/images/director_3.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .q-carousel-slide {
    position: relative;
    /* border: 5px solid #4EA2BD; */
  }

  /* .q-carousel-slide::after {
    content: "";
    background:  linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.4));
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  } */

  .company-bg {
    background: url('../statics/images/company-front.png');
    width: 100vw;
    height: 65vh;
    background-size: 100% 100%;
    background-attachment: fixed;
  }

  .img-wrapper {
    display: inline-block;
    width: 20%;
    margin-left: 5%;
    margin-bottom: 2.5rem;
    border-radius: 50%;
    position: relative;
    text-align: center;
    cursor: pointer;
    box-shadow: 0px 17px 10px -10px rgba(0,0,0,0.4);
    transition: all ease-in-out 300ms;
  }

  .img-wrapper img {
    width: 100%;
    position: relative;
    border-radius: 50%;
    top: .5rem;
  }

  .img-text {
    position: absolute;
    top: 0;
    height: 101.8%;
    width: 100%;
    border-radius: 50%;
    background: rgba(0,0,0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease-in-out 300ms;
  }

  .img-wrapper:hover .img-text {
    opacity: 0;
  }

  .img-wrapper:hover {
    box-shadow: 0px 37px 20px -20px rgba(0,0,0,0.2);
    transform: translate(0px, -10px) scale(1.2);
  }

  .imgTop {
    top: .25rem !important;
  }

  @media (max-width: 700px) {
    .img-wrapper {
      width: 90%;
    }
  }
</style>
