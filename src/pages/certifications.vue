<template>
  <div class="row">
    <div class="col-xs-8 offset-xs-2 col-lg-4 offset-lg-4 q-mt-lg flex justify-center items-center">
      <img class="fulljhury-logo" src="../assets/fuljhury-logo.png" alt="fulljhury-logo ">
    </div>
    <div class="col-6 offset-3 q-mb-md">
      <hr>
    </div>
    <div class="col-xs-10 offset-xs-1  q-mt-lg">
      <div class="text-center q-display-1 text-secondary text-bold">Our Certifications</div>
    </div>
    <div class="col-2 offset-5 q-mt-sm">
      <hr>
    </div>
    <div class="col-lg-8 offset-lg-2 col-sm-6 offset-sm-3 q-mt-xl q-mb-xs" v-for="(cert,id) in certificates" :key="id">
      <q-card class="project m-4">
        <div class="row projectContent">
          <div class="col-lg-3 col-xs-10  projectPicContainer">
            <a :href="cert.link" target="_blank" rel="noopener">
              <div class="fit back-image cert-logo shadow-4"
              :style="{ backgroundImage : 'url('+ cert.img + ')'}"
              >
              </div>
            </a>
          </div>
          <div class="col-lg-9">
            <div class="q-ml-md">
              <q-card-main>
                {{ cert.subDetail }}
                <a href="https://www.sedexglobal.com/products-services/auditors/" target="_blank" rel="noopener"><q-btn v-if="cert.smeta" class="q-ml-xs" color="primary" flat >SMETA</q-btn></a>
              </q-card-main>
            </div>
            <q-card-separator />
            <q-card-actions class="q-ml-lg">
              {{ cert.detail }}
            </q-card-actions>
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PageCertifications',
  data () {
    return {
      certificates: [
        {
          link: 'http://www.bsci-intl.org/',
          img: '../assets/cert1_sm.jpg',
          detail: 'Knittex Industries Ltd. completed an audit by BSCI from 2011 onwards. The report is available on the BSCI website for DBID - 25883.',
          subDetail: 'The Business Social Compliance Initiative (BSCI) is a leading business-driven initiative for companies committed to improving working conditions in the global supply chain.'
        },
        {
          link: 'https://www.oeko-tex.com/en/manufacturers/manufacturers.xhtml',
          img: '../assets/cert2_sm.jpg',
          detail: 'The Oeko-Tex Standard 100 is an international certification system for textile raw materials, intermediate and end products at all stages of production. This certificate ensures that the manufacturing process doesn\'t involve harmful substances which are prohibited or regulated by law.',
          subDetail: 'Knittex Industries Ltd. successfully met all the criteria required for this standard and received their authorization from 2011 onwards.'
        },
        {
          link: 'http://www.sedexglobal.com/',
          img: '../assets/cert5_sm.jpg',
          detail: 'Sedex is a membership organisation for businesses committed to continuous improvement of the ethical performance of their supply chains. Sedex enables member companies to efficiently manage the ethical and responsible practices of their global supply chains, generating transparency through the provision of a data exchange',
          subDetail: 'Knittex Industries Ltd. is registered at the Sedex website and have successfully met the requirements of the SMETA audit.',
          smeta: 'https://www.sedexglobal.com/products-services/auditors/'
        },
        {
          link: 'http://www.bgmea.com.bd/',
          img: '../assets/cert3_sm.jpg',
          detail: 'The Bangladesh Garment Manufacturers and Exporters Association (BGMEA) is the apex trade body that represents the export oriented woven knit and sweater garment manufacturers and exporters of the country. The fundamental objective of BGMEA is to establish a healthy business environment for a close and mutually beneficial relationship between the manufacturers, exporters and importers in the process ensuring a steady growth in the foreign exchange earnings of the country.',
          subDetail: 'In accordance with the guideline of Bangladesh Labour Law 2006, BGMEA, in association with GTZ, has given Knittex Industries Ltd. a grade A score.'
        },
        {
          link: 'http://www.bkmea.com/',
          img: '../assets/cert4_sm.jpg',
          detail: 'Bangladesh Knitwear Manufacturers & Exporters Association (BKMEA) has given Knittex Industries Ltd. an "A" grade, which is the highest in their rating system.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.cert-logo {
  cursor: pointer;
  position: absolute;
  border: .35rem solid #4EA2BD;
  background-color: #fff;
}

.project {
  position: relative;
  height: 210px;
  margin-bottom: 2em;
}

.projectPicContainer {
  position: relative;
  height: 120%;
  bottom: 10%;
  left: 1em;
}

.projectContent {
  height: 100%;
}

.q-chip{
  margin: 0 10px;
}

a {
  color: black;
}

@media (max-width: 770px) {
  .project {
    height: 500px;
    margin-bottom: 2em;
    margin: 2rem 0;
  }

  .projectPicContainer {
    position: relative;
    height: 30%;
    top: 0;
    left: 2rem;
  }

}
</style>
