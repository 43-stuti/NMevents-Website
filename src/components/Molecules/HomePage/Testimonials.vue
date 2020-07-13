<template>
    <v-container fluid fill-width class="Testimonial" justify = 'center' align='center'>
      <v-container class="my-12">
        <v-container>
          <v-row  v-bind:class="[Classes.SectionHeading]">
              Testimonials
          </v-row>
          <v-row v-if = "clientComments.length" v-bind:class="[Classes.SectionSubHeading]" class="mb-8">
             What our clients have to say
          </v-row>
        </v-container>
        <v-row align="start">
          <v-carousel 
            v-bind:style ="containerHeight"
            hide-delimiter-background
            hide-delimiters
            show-arrows-on-hover
          >
              <v-carousel-item class =  "cara mt-2"
                  
                  v-for = "(item, i) in clientComments"
                  :item = "item"
                  :key="i"
              >
                <TestimonialCard :item="item" 
                            :key="i"></TestimonialCard>
    
              </v-carousel-item>
          </v-carousel>
         
        </v-row>


        <v-container class="mt-8">
          
          <v-row  v-if = "guestComments.length" v-bind:class="[Classes.SectionSubHeading]" class="mb-8">
              What our guests have to say.
          </v-row>
        </v-container>
        <v-row>
          <v-carousel
            v-bind:style ="containerHeight"
            hide-delimiter-background
            hide-delimiters
            show-arrows-on-hover
          >
              <v-carousel-item class =  "mt-2"
              v-bind:style ="containerHeight"
                  v-for = "(item, i) in guestComments"
                  :item = "item"
                  :key="i"
              >
                  <TestimonialCard :item="item" 
                            :key="i"></TestimonialCard>
              </v-carousel-item>
          </v-carousel>
         
        </v-row>
        
      </v-container>
    </v-container>
</template>  
<script>
import TestimonialCard from '@/components/Atoms/TestimonialCard.vue'
import _ from 'lodash';
  export default {
    name: 'Services',
    components : {
      TestimonialCard
    },
    data() {
      return{
         Classes: {
                SectionHeading : 'cyan--text text--darken-2 font-weight-medium',
                SectionSubHeading : 'text-h5 font-weight-light mt-2'
            }
      }
    },
    computed: {
      containerHeight() {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs':
          case 'sm':
            return {height : '550px'};
          default:
            return {height : '300px'};
        }
      },
      contents : function() {
            return this.$store.state.Testimonials
      },
      guestComments() {
        return _.filter(this.contents,function(f) {
          return f.Type == 'Guest'
        })
      },
      clientComments() {
        return _.filter(this.contents,function(f) {
          console.log('HMMM',f.Name,f.Type)
          return f.Type == 'Client'
        })
      },
      horizontalPosition() {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs':
          case 'sm':
            return 'center';
          default:
            return 'left';
        }
      }
    },
    methods: {
      getTestimonials() {
          this.$store.dispatch('getTestimonials')
      }
    },
    created() {
        this.getTestimonials()
    }
  }
</script>
<style scoped>
 .Testimonial {
   background: #FAFAFA;
   width: 100%
 }
</style>