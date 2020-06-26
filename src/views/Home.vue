<template>
  <div>
    <v-container fluid class="HomeHero" fill-width fill-height
      v-bind:style ="heroHeight"
    >
    <v-row class="Flowers">
        <ThreeTest/>
      </v-row>
      <v-container align="center">
        <v-row align="center"> 
          <v-col class = "Welcome my-12" align = "center"
                :cols = 10
                :lg = 8
                :sm = 10
                :md = 7>
          
            <div>
              <v-row  v-bind:class="[Classes.CoverText]" align='center'>
                Crafting your dream events.
              </v-row>
              <v-row v-bind:class="[Classes.SubText] " align='center'> 
                Marriages . Seminars . Concerts
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-container>
      
    </v-container>
    <RecentProjects></RecentProjects>
      <Services></Services>
      <Testimonials></Testimonials>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Testimonials from '@/components/Molecules/HomePage/Testimonials.vue'
import Services from '@/components/Molecules/HomePage/Services.vue'
import ThreeTest from '@/components/Molecules/HomePage/ThreePetal.vue'
import RecentProjects from '@/components/Molecules/HomePage/RecentProjects.vue'
import Footer from '@/components/Molecules/HomePage/Footer.vue'
export default {
  name: 'Home',
  components: {
    Services,
    ThreeTest,
    Testimonials,
    RecentProjects,
    Footer
  },
  data() {
    return {
      Classes : {
        CoverText : 'text-h4 text-sm-h4 text-md-h2 text-lg-h2 text-xl-h1 font-weight-black text-left',
        CoverTextLight : 'text-h4 text-sm-h4 text-md-h4 text-lg-h4 text-xl-h1 font-weight-regular text-left pink--text text--darken-1 mt-4',
        SubText : 'mt-12 text-h6 text-lg-h5 font-weight-regular pink--text text--darken-1 text-left'
      }
    }
  },
  computed: {
      heroHeight() {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs':
          case 'sm':
            return {height: '550px'};
          default:
            return {height: '650px'};
        }
      }
    }
}
</script>

<style>

  
  .HomeHero {
    height: 100%;
    z-index: -1;
    background: linear-gradient( #f5f5f5 10%, #ffffff 40%, rgba(241, 227, 227, 0.7) 95%);
  }
  .Flowers {
       z-index: 0;
       position: absolute;
  }
  .Welcome {
       z-index: 1;
  }
</style>