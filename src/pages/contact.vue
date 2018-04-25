<template>
  <div class="row">
    <div class="col-xs-8 offset-xs-2 col-lg-4 offset-lg-4 q-mt-xs flex justify-center items-center">
      <img class="fulljhury-logo" src="../assets/fuljhury-logo.png" alt="fulljhury-logo ">
    </div>
    <div class="col-6 offset-3 q-mb-md">
      <hr>
    </div>
    <div class="col-xs-10 offset-xs-1  q-mt-xl">
      <div class="text-center q-display-1 text-secondary text-bold q-mb-xs">Contact Us</div>
    </div>
    <div class="col-2 offset-5 q-mb-lg">
      <hr>
    </div>
    <div class="col-lg-8 offset-lg-2 col-xs-10 offset-xs-1">
      <iframe class="full-width gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.7074618220704!2d90.40172571539047!3d23.864519590323276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c42f37c4861d%3A0x8b6399e840210f2a!2s4+Road-13%2C+Dhaka+1230!5e0!3m2!1sen!2sbd!4v1524685101466" width="800" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
    <div class="col-xs-10 offset-xs-1  q-mt-xl">
      <div class="text-center q-headline text-secondary text-bold">We'd love to hear from you.</div>
    </div>
    <div class="col-2 offset-5 q-mt-sm">
      <hr>
    </div>
    <div class="col-lg-4 offset-lg-4 col-xs-10 offset-xs-1">
      <form action="https://formspree.io/yomaimsj@gmail.com"
      method="POST">
        <div class="col-lg-8  col-xs-10 offset-xs-1 q-mb-lg q-mt-xl">
          <q-input class="full-width" v-model="contact.name" float-label="Name" type="text" name="name"/>
        </div>
        <div class="col-lg-8  col-xs-10 offset-xs-1 q-mb-lg">
          <q-input v-model="contact.email" float-label="Email" suffix="@email.com" type="email" name="_replyto"/>
        </div>
        <div class="col-lg-8  col-xs-10 offset-xs-1 q-mb-lg">
          <q-input v-model="contact.message" float-label="Message" type="textarea" :max-height="500" name="message"/>
        </div>
        <div class="col-lg-8  flex items-center justify-center q-mb-xl">
          <q-btn color="secondary" label="Send" icon="send" size="lg" @click="sendEmail" type="submit" value="Send"/>
        </div>
      </form>
    </div>
    <div class="col-12 q-mt-xl">
      <div class="row">
        <div class="col-lg-6 border-right col-xs-12">
          <div class="col-12">
            <div class="row">
              <div class="col-lg-10 offset-lg-2 col-xs-12 q-mb-md q-mt-xl">
                <div class="text-center q-headline text-primary">Head Office Address:</div>
              </div>
              <div class="col-lg-10 offset-lg-2 col-xs-12">
                <div class="text-center q-subheading q-mb-xl">House 4, Road 13, Sector 4, Uttara Model Town Dhaka-1230 Bangladesh</div>
              </div>
              <div class="col-lg-10 offset-lg-2 col-xs-12 q-mb-md">
                <div class="text-center q-headline text-primary">Phone:</div>
              </div>
              <div class="col-lg-10 offset-lg-2 col-xs-12">
                <div class="text-center q-subheading q-mb-xl">+880-28960734, 8931748 <br/> 8922801, 8922859, 8932989</div>
              </div>
              <div class="col-lg-10 offset-lg-2 col-xs-12 q-mb-md">
                <div class="text-center q-headline text-primary">Fax:</div>
              </div>
              <div class="col-lg-10 offset-lg-2 col-xs-12">
                <div class="text-center q-subheading q-mb-xl">+880-2-8960749, 8932987</div>
              </div>
              <div class="col-lg-10 offset-lg-2 col-xs-12 q-mb-md">
                <div class="text-center q-headline text-primary">Factory Address:</div>
              </div>
              <div class="col-lg-10 offset-lg-2 col-xs-12">
                <div class="text-center q-subheading q-mb-xl">Plot 247-252, Baimile, Konabari, Gazipur, Bangladesh</div>
              </div>
              <div class="col-lg-10 offset-lg-2 col-xs-12 q-mb-md">
                <div class="text-center q-headline text-primary">Phone:</div>
              </div>
              <div class="col-lg-10 offset-lg-2 col-xs-12">
                <div class="text-center q-subheading q-mb-xl">+8802 9297233 , 9297220</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xs-12 border-top">
          <div class="col-12">
            <div class="row">
              <div class="col-lg-10 col-xs-12 q-mb-md q-mt-xl">
                <div class="text-center q-headline text-primary">Sister concern:</div>
              </div>
              <div class="col-lg-10 col-xs-12">
                <div class="text-center q-subheading q-mb-xl">Deutsch Bangla Textil Vertriebs GmbH Eckerngarten 6 D-34497 Korbach-Lelbach</div>
              </div>
              <div class="col-lg-10 col-xs-12 q-mb-md">
                <div class="text-center q-headline text-primary">Phone:</div>
              </div>
              <div class="col-lg-10 col-xs-12">
                <div class="text-center q-subheading q-mb-xl">+49 (56 31) 91 52 55</div>
              </div>
              <div class="col-lg-10 col-xs-12 q-mb-md">
                <div class="text-center q-headline text-primary">Mobile:</div>
              </div>
              <div class="col-lg-10 col-xs-12">
                <div class="text-center q-subheading q-mb-xl">+49 (171) 286 16 02</div>
              </div>
              <div class="col-lg-10 col-xs-12 q-mb-md">
                <div class="text-center q-headline text-primary">Fax:</div>
              </div>
              <div class="col-lg-10 col-xs-12">
                <div class="text-center q-subheading q-mb-xl">+49 ( 56 31) 77 77</div>
              </div>
              <div class="col-lg-10 col-xs-12 q-mb-md">
                <div class="text-center q-headline text-primary">Email :</div>
              </div>
              <div class="col-lg-10 col-xs-12">
                <div class="text-center q-subheading q-mb-xl">info@deutsch-bangla.de</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PageContact',
  data () {
    return {
      contact: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    sendEmail () {
      let json = JSON.stringify(this.contact)
      console.log(json)
      this.$axios.post('https://formspree.io/yomaimsj@gmail.com', json)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.gmap {
  border: 5px solid #4EA2BD !important;
  border-radius: .2rem;
}

.border-right {
  border-right: 2px solid #32BE61;
}

@media (max-width: 700px) {
  .border-right {
    border: none;
  }

  .border-top {
    border-top: 2px solid #32BE61;
  }
}

</style>
