<template>
  <div class="row">
    <div class="col-xs-8 offset-xs-2 col-lg-4 offset-lg-4 q-mt-xs flex justify-center items-center">
      <img class="fulljhury-logo" src="../assets/fuljhury-logo.png" alt="fulljhury-logo ">
    </div>
    <!-- <div class="col-6 offset-3 q-mb-xs">
      <hr>
    </div> -->
    <div class="col-lg-8 offset-lg-2 col-xs-12">
      <q-carousel
        arrows
        height="65vh"
        infinite
        autoplay
        quick-nav
        handle-arrow-keys
        class="round-borders shadow-1"
        color="secondary"
      >
        <q-carousel-slide img-src="../assets/slide-image-1.JPG"></q-carousel-slide>
        <q-carousel-slide img-src="../assets/slide-image-2.JPG"></q-carousel-slide>
        <q-carousel-slide img-src="../assets/slide-image-3.JPG"></q-carousel-slide>
        <q-carousel-slide img-src="../assets/slide-image-6.JPG"></q-carousel-slide>
        <q-carousel-slide img-src="../assets/slide-image-7.JPG"></q-carousel-slide>
        <q-carousel-slide img-src="../assets/slide-image-9.JPG"></q-carousel-slide>
        <q-carousel-slide img-src="../assets/slide-image-10.JPG"></q-carousel-slide>
        <q-carousel-slide img-src="../assets/slide-image-11.JPG"></q-carousel-slide>
        <q-carousel-slide img-src="../assets/slide-image-12.JPG"></q-carousel-slide>
        <q-carousel-control
          slot="control-button"
          slot-scope="carousel"
          position="bottom-right"
          :offset="[18, 22]"
        >
          <q-btn
            round dense push
            color="secondary"
            :icon="carousel.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="carousel.toggleFullscreen()"
          />
        </q-carousel-control>
      </q-carousel>
    </div>
    <div class="col-xs-10 offset-xs-1  q-mt-xl">
      <div class="text-center q-display-2 text-secondary text-bold">Our Factory</div>
    </div>
    <div class="col-2 offset-5 q-mt-sm">
      <hr>
    </div>
    <div class="col-10 offset-1 q-mt-lg q-mb-lg q-title">
      <div class="text-center q-mb-xl q-mt-xl">As a leading knit garments facility (vertical knit composite), Knittex Industries Ltd. a Ltd. company, has established itself in Bangladesh as a prominent supplier of knit garments in 1990. Currently, over 1,500 people are working with 75 people at management positions.</div>
    </div>
    <div class="col-lg-4 offset-lg-4 col-xs-10 offset-xs-1 q-mt-lg q-mb-xl">
      <q-card>
        <q-card-title>
          <div class="text-primary q-display-1 text-center">The divisions of Knittex Industries Ltd. are:</div>
        </q-card-title>
        <q-card-separator />
        <q-card-main>
          <div class="q-subheading q-mb-md text"> <q-icon color="secondary" size="25px" name="navigate next" /> Knitting Section</div>
          <q-card-separator />
          <div class="q-subheading q-mb-md q-mt-md"> <q-icon color="secondary" size="25px" name="navigate next" /> Dyeing Section</div>
          <q-card-separator />
          <div class="q-subheading q-mb-md q-mt-md"> <q-icon color="secondary" size="25px" name="navigate next" /> Dyeing Finishing Section</div>
          <q-card-separator />
          <div class="q-subheading q-mb-md q-mt-md"> <q-icon color="secondary" size="25px" name="navigate next" />  Knit Garment Manufacturing</div>
          <q-card-separator />
          <div class="q-subheading q-mb-md q-mt-md"> <q-icon color="secondary" size="25px" name="navigate next" />Garment Printing Section</div>
          <q-card-separator />
          <div class="q-subheading q-mb-md q-mt-md">(All above sections are situated in one premise)</div>
        </q-card-main>
      </q-card>
    </div>
    <div class="col-xs-10 offset-xs-1  q-mt-xl">
      <div class="text-center q-display-1 text-secondary text-bold">Key Features of the Knittex Industries Ltd. Factory</div>
    </div>
    <div class="col-2 offset-5 q-mt-sm q-mb-xl">
      <hr>
    </div>
    <div class="col-lg-10 offset-lg-1 col-xs-12  q-mt-lg q-mb-md">
      <q-tabs class="shadow-1">
      <!-- Tabs - notice slot="title" -->
      <q-tab default slot="title" name="tab-1" label="Factory features"/>
      <q-tab slot="title" name="tab-2" label="technology &amp; system"/>
      <q-tab slot="title" name="tab-3" label="financial systems &amp; controls"/>
      <q-tab slot="title" name="tab-4" label="auxiliary/capital machinery"/>
      <q-tab slot="title" name="tab-5" label="fulfillment of standard requirements"/>
      <q-tab slot="title" name="tab-6" label="environmental commitments"/>

      <!-- Targets -->
      <q-tab-pane name="tab-1">
        <q-card class="shadow-0">
          <q-card-main>
            <div class="q-subheading q-mb-md"> <q-icon color="secondary" size="25px" name="navigate next" /> Sample &amp; Product Development Center: Professionally managed and run by fashion merchandising experts and equipped with required modern machinery &amp; CAD.</div>
            <q-card-separator />
            <div class="q-subheading q-mb-md q-mt-md"> <q-icon color="secondary" size="25px" name="navigate next" /> Laboratory: Equipped with spectrophotometer, data color and other relevant apparatus, equipment for lab-dip and fabric quality development.</div>
            <q-card-separator />
            <div class="q-subheading q-mb-md q-mt-md"> <q-icon color="secondary" size="25px" name="navigate next" /> Testing Machines: Color fastness to washing, Rubbing Tester perspiration and pilling testers. Knit Garment Manufacturing</div>
            <q-card-separator />
            <div class="q-subheading q-mb-md q-mt-md text-bold"> <q-icon color="secondary" size="25px" name="navigate next" /> Technology &amp; Production :</div>
            <q-card-separator />
            <div class="q-subheading q-mb-md q-mt-md q-ml-lg"> <q-icon color="secondary" size="25px" name="navigate next" /> Sophisticated technology, machinery &amp; equipment</div>
            <div class="q-subheading q-mb-md q-mt-md q-ml-lg"> <q-icon color="secondary" size="25px" name="navigate next" /> Production process technology acquired</div>
            <div class="q-subheading q-mb-md q-mt-md q-ml-lg"> <q-icon color="secondary" size="25px" name="navigate next" /> Employment, training &amp; human resource development schemes executed</div>
          </q-card-main>
        </q-card>
      </q-tab-pane>
      <q-tab-pane name="tab-2">
        <q-card class="shadow-0">
          <q-card-main>
            <div class="q-subheading q-mb-md"> <q-icon color="secondary" size="25px" name="navigate next" /> All hardware/software - in place</div>
            <q-card-separator />
            <div class="q-subheading q-mb-md q-mt-md"> <q-icon color="secondary" size="25px" name="navigate next" /> Email for communication with overseas &amp; regional offices.</div>
            <q-card-separator />
            <div class="q-subheading q-mb-md q-mt-md"> <q-icon color="secondary" size="25px" name="navigate next" /> LAN server</div>
            <q-card-separator />
            <div class="q-subheading q-mb-md q-mt-md"> <q-icon color="secondary" size="25px" name="navigate next" /> Data backup facility</div>
            <q-card-separator />
            <div class="q-subheading q-mb-md q-mt-md"> <q-icon color="secondary" size="25px" name="navigate next" /> WAN between head office and factory (25 km)</div>
            <q-card-separator />
            <div class="q-subheading q-mb-md q-mt-md"> <q-icon color="secondary" size="25px" name="navigate next" /> System analyst, programmers employed - Developing Systems and Designing need based software</div>
            <q-card-separator />
            <div class="q-subheading q-mb-md q-mt-md"> <q-icon color="secondary" size="25px" name="navigate next" /> Management Reports on Production, Marketing, Statutory &amp; Management Accounts and MIS with web base ERP Solution</div>
            <q-card-separator />
            <div class="q-subheading q-mb-md q-mt-md"> <q-icon color="secondary" size="25px" name="navigate next" /> CCTV installed to cover all CT-PAT requirements</div>
            <q-card-separator />
            <div class="q-subheading q-mb-md q-mt-md"> <q-icon color="secondary" size="25px" name="navigate next" /> Latest PA system installed to cover entire premises</div>
          </q-card-main>
        </q-card>
      </q-tab-pane>
      <q-tab-pane name="tab-3">
        <q-card class="shadow-0">
          <q-card-main>
            <div class="q-subheading q-mb-md"> <q-icon color="secondary" size="25px" name="navigate next" /> Budget, Statutory &amp; Management Accounts</div>
            <q-card-separator />
            <div class="q-subheading q-mb-md q-mt-md"> <q-icon color="secondary" size="25px" name="navigate next" /> Periodical Internal &amp; Annual External Audit.</div>
            <q-card-separator />
            <div class="q-subheading q-mb-md q-mt-md"> <q-icon color="secondary" size="25px" name="navigate next" /> Level of Authorities &amp; Compliance</div>
            <q-card-separator />
            <div class="q-subheading q-mb-md q-mt-md"> <q-icon color="secondary" size="25px" name="navigate next" /> Documentation, Recording &amp; Controls with full dependence on Hardware &amp; Software</div>
          </q-card-main>
        </q-card>
      </q-tab-pane>
      <q-tab-pane name="tab-4">
        <q-card class="shadow-0">
          <q-card-main>
            <div class="q-subheading q-mb-md"> <q-icon color="secondary" size="25px" name="navigate next" /> Prime Power Generator GAS Operated 1125 KVA, 1 Set, Brand – Waukesha, USA origin</div>
            <q-card-separator />
            <div class="q-subheading q-mb-md q-mt-md"> <q-icon color="secondary" size="25px" name="navigate next" /> Industrial GAS Fired Boiler, 6.00 TPH each, 2 Sets, Taiwan/German origin &amp; Diesel Generator 750 × 1</div>
            <q-card-separator />
            <div class="q-subheading q-mb-md q-mt-md"> <q-icon color="secondary" size="25px" name="navigate next" /> Industrial Air Compressor, 7.45 C, 2 sets USA origin</div>
            <q-card-separator />
            <div class="q-subheading q-mb-md q-mt-md"> <q-icon color="secondary" size="25px" name="navigate next" /> Effluent Treatment Plant (ETP)</div>
            <q-card-separator />
            <div class="q-subheading q-mb-md q-mt-md"> <q-icon color="secondary" size="25px" name="navigate next" /> Deep tube well</div>
            <q-card-separator />
            <div class="q-subheading q-mb-md q-mt-md"> <q-icon color="secondary" size="25px" name="navigate next" /> Fire Fighting Equipments</div>
            <q-card-separator />
          </q-card-main>
        </q-card>
      </q-tab-pane>
      <q-tab-pane name="tab-5">
        <q-card class="shadow-0">
          <q-card-main>
            <div class="q-subheading q-mb-md text-bold"> <q-icon color="secondary" size="25px" name="navigate next" /> Knittex Industries Ltd.'s promises are not only for our products and quality; we also want to be known for taking responsibility for our business. This means :</div>
            <q-card-separator />
            <div class="q-subheading q-mb-md q-mt-md q-ml-md"> <q-icon color="secondary" size="25px" name="navigate next" /> Knittex Industries Ltd. is trying to create a better environment, better social and working conditions in the country</div>
            <q-card-separator />
            <div class="q-subheading q-mb-md q-mt-md q-ml-md"> <q-icon color="secondary" size="25px" name="navigate next" /> Knittex Industries Ltd. business principles are sound, and we care about today's and tomorrow's environment</div>
          </q-card-main>
        </q-card>
      </q-tab-pane>
      <q-tab-pane name="tab-6">
        <q-card class="shadow-0">
          <q-card-main>
            <div class="q-subheading q-mb-md text-bold"> <q-icon color="secondary" size="25px" name="navigate next" /> Environmental Commitments :</div>
            <q-card-separator />
            <div class="q-subheading q-mb-md q-mt-md q-ml-md"> <q-icon color="secondary" size="25px" name="navigate next" /> Knittex Industries Ltd. has set-up / invested considerable amount in Effluent Treatment Plant (ETP) so that the industrial waste produced from our dyeing mill and washing plant can be cleaned from hazardous chemicals before draining it out from the factory</div>
            <q-card-separator />
            <div class="q-subheading q-mb-md q-mt-md text-bold"> <q-icon color="secondary" size="25px" name="navigate next" /> Social Compliance Developments :</div>
            <q-card-separator/>
            <div class="q-subheading q-mb-md q-mt-md q-ml-md"> <q-icon color="secondary" size="25px" name="navigate next" /> Knittex Industries Ltd. has acquired internationally recognized compliance certifications from Oeko-Tex, BSCI, SEDEX etc</div>
            <q-card-separator />
            <div class="q-subheading q-mb-md q-mt-md text-bold"> <q-icon color="secondary" size="25px" name="navigate next" /> Green Factory :</div>
            <q-card-separator/>
            <div class="q-subheading q-mb-md q-mt-md q-ml-md"> <q-icon color="secondary" size="25px" name="navigate next" /> As a part of the green factory, we have planted a lot of trees around our factory premise, we have also set up the system of steam recovery and now getting prepared for setting up of the water reuse system in place</div>
          </q-card-main>
        </q-card>
      </q-tab-pane>
    </q-tabs>
    </div>
    <div class="col-12 text-center  text-secondary q-display-1 q-mt-xl text-bold">Factory Info</div>
    <div class="col-2 offset-5 q-mt-sm">
      <hr>
    </div>
    <div class="col-lg-8 offset-lg-2 col-xs-12">
      <div class="row">
        <div class="col-lg-6 col-xs-12 q-mt-xl q-mb-xl">
          <div class="text-center q-mb-md q-title text-primary">Factory Area:</div>
          <div class="text-center q-mb-md">(a) Total Land: 2018.995 DC </div>
          <div class="text-center q-mb-md">(b) Floor Area: 200,000sq.ft (Approx)</div>
        </div>
        <div class="col-lg-6 col-xs-12 q-mt-xl q-mb-xl">
          <div class="text-center q-mb-md q-title text-primary">Manpower(Approx)</div>
          <div class="text-center q-mb-md">Officer and Technician : </div>
          <div class="text-center q-mb-md">Staff and Others : 225</div>
          <div class="text-center q-mb-md">Workers Skilled/Unskilled : 1200</div>
          <div class="text-center q-mb-md">Total : 1525</div>
        </div>
      </div>
    </div>
    <div class="col-xs-10 offset-xs-1  q-mt-xl">
      <div class="text-center q-display-1 text-secondary text-bold">Production Information :</div>
    </div>
    <div class="col-2 offset-5 q-mt-sm">
      <hr>
    </div>
    <div class="col-10 offset-1">
      <table class="q-mt-lg q-mb-lg bg-primary">
        <thead class="bg-primary shadow-4">
          <tr>
            <th class="text-left"><div class="q-subheading text-bold text-white"> UNITS </div></th>
            <th class="text-left "><div class="q-subheading text-bold text-white">PRODUCT/FEATURE</div></th>
            <th class="text-center "><div class="q-subheading text-bold text-white">CAPACITY/MONTH</div></th>
            <th class="text-right"><div class="q-subheading text-bold text-white">REMARKS</div></th>
          </tr>
        </thead>
        <tbody class="shadow-1 bg-white">
          <tr class="border-btm" v-for="(item, id) in productionInfo" :key="id">
            <td class="text-left border" width="20%">
              <div class="q-subheading  q-mb-md"> {{ item.unit }} </div>
            </td>
            <td class="border" width="30%">
              <div class="q-subheading  q-mb-lg" v-for="(product, id) in item.product" :key="id"><q-icon color="secondary" size="25px" name="navigate next" /> {{ product }} </div>
            </td>
            <td class="text-center border" width="20%">
              <div class="q-subheading  q-mb-md" v-for="(capacity, id) in item.capacity" :key="id"> {{ capacity }} </div>
            </td>
            <td class="text-right border" width="30%">
              <div class="q-subheading q-mb-md" v-for="(remarks, id) in item.remarks" :key="id"> {{ remarks }} </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PageFactory',
  data () {
    return {
      productionInfo: [
        {
          unit: 'Knit Garment Facility',
          product: [
            'Basic t-shirts',
            'Polo shirts',
            'Rugby polo',
            'Turtle Necks',
            'Sportswear',
            'Sleepwear',
            'Loungewear',
            'Essential wear',
            'All types of men"s boxers',
            'Briefs, vests, innerwear, thermals etc'

          ],
          capacity: [
            'Polo Shirt- 20,800 Dzn.',
            'T-shirt &amp; others- 33,800 Dzn'
          ],
          remarks:
            [
              '612 Sewing Machines of Japanese /Chinese/ Malaysian origin.',
              'Cutting Floor = 18,000 sq. ft.',
              'Sewing Floor = 18,000 × 2 = 36,000 sq. ft',
              'Finishing Floor= 18,000 sq. ft.'
            ]
        },
        {
          unit: 'Dyeing &amp; Finishing Plant',
          product: [
            'Computerized color matching by Data Color Spectrophotometer',
            'Dyeing in all ranges, computerized',
            'manual dyeing process from lab dyeing, sample dyeing to production process.',
            '100% cotton, CVC, P/C, 100% PES fabric up to 130 c–tubular knit fabrics.',
            'Due to short processing times, gentle care for the fabricsis taken',
            'We use Azo free / Environmentally friendly European chemicals and dyestuff',
            'All type of piques'

          ],
          capacity: [
            '260 Tonnes'
          ],
          remarks:
            [
              'Established with latest generation Taiwanese and Italian Knit Circular Machines.'
            ]
        },
        {
          unit: 'Knit Garment Facility',
          product: [
            'Basic t-shirts',
            'Polo shirts',
            'Rugby polo',
            'Turtle Necks',
            'Sportswear',
            'Sleepwear',
            'Loungewear',
            'Essential wear',
            'All types of men"s boxers',
            'Briefs, vests, innerwear, thermals etc'

          ],
          capacity: [
            'Dyeing 208 Tonnes',
            'Finishing 200 Tonnes'
          ],
          remarks:
            [
              'Established with latest generation Fong’s, Tung Shing &amp; Dong Num and Tubetex finishing machines of US origin'
            ]
        },
        {
          unit: 'Garment Printing',
          product: [
            'All types of screen print'

          ],
          capacity: [
            '16,000 Dzn'
          ],
          remarks:
            []
        }
      ]
    }
  }
}
</script>

<style scoped>
.q-carousel-slide {
  position: relative;
  z-index: 10;
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

th, td {
  padding: 16px;
}

.border {
  border-right: 1px solid #bdc3c7;
  border-bottom: 1px solid #bdc3c7;
}

table {
  border-spacing: 0;
}

td:last-of-type {
  border-right: none;
}

</style>
