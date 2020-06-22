<template>
  <div>
    <v-container fluid
      v-bind:style ="heroHeight"
    >
      <v-row class="HomeHero" justify = 'center' align='center' n-gutters> 
        <v-col class = "Three mt-n4 ml-n12" 
        :cols = 1
        :lg = 3
        :sm = 1
        :md = 3>
          <ThreeTest></ThreeTest>
        </v-col>
        <v-col class = "Welcome my-12" justify = "center" align = "center"
              :cols = 10
              :lg = 8
              :sm = 10
              :md = 7>
        
          <div>
            <v-row v-bind:class="[Classes.CoverText]" justify = 'center' align='center'>
              Crafting your dream events.
            </v-row>
            <v-row v-bind:class="[Classes.SubText] " justify = 'center' align='center'> 
              Marriages . Seminars . Concerts
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <RecentProjects></RecentProjects>
    <v-container class="mt-8">
      <Services></Services>
    </v-container>
      <Testimonials></Testimonials>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Testimonials from '@/components/Molecules/HomePage/Testimonials.vue'
import Services from '@/components/Molecules/HomePage/Services.vue'
import ThreeTest from '@/components/Molecules/HomePage/ThreeTest.vue'
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
        CoverText : 'text-h4 text-sm-h4 text-md-h2 text-lg-h2 text-xl-h1 font-weight-black text-center',
        SubText : 'mt-12 text-h6 text-lg-h5 font-weight-regular pink--text text--darken-1 text-center'
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
    background: linear-gradient( #f5f5f5 10%, #ffffff 40%, rgba(241, 227, 227, 0.7) 95%);
  }
  .Three {
       z-index: 0;
  }
  .Welcome {
       z-index: 1;
  }
</style>