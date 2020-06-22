<template>
    <v-container fluid class="Testimonial" justify = 'center' align='center'>
      <v-container class="my-12" justify = 'center' align='center'>
         <v-container> 
          <v-row>
                <v-col
                    :cols = 12
                    :lg = 4
                    :sm = 12
                    :md = 4
                    :xl = 4
                >
                    <v-row  v-bind:class="[Classes.SectionSubHeading]">
                    NM Creations
                </v-row>
                <div class="mt-6 ml-n3">
                     <div class = "d-block" v-bind:class="[Classes.Description]"> Creating your best memories </div>
                   
                </div>
                </v-col>
                 <v-col
                    :cols = 6
                    :lg = 2
                    :sm = 6
                    :md = 2
                    :xl = 2
                >
                    <v-row  v-bind:class="[Classes.Title]">
                    Explore
                </v-row>
                <div class="mt-6 ml-n3"> 
                    <div class = "d-block" v-bind:class="[Classes.Description]" v-for="routes in links" 
                    v-bind:key="routes.id">
                        <router-link class = "spacing"
                        :to="`${routes.page}`">{{routes.text}}</router-link>
                    </div>
                </div>
                </v-col>

                <v-col
                    :cols = 6
                    :lg = 2
                    :sm = 6
                    :md = 2
                    :xl = 2
                >
                    <v-row  v-bind:class="[Classes.Title]">
                    Follow
                </v-row>
                <div class="mt-6 ml-n3">
                   <div class = "d-block" v-bind:class="[Classes.Description]"> 
                       <a href="https://www.facebook.com/nmcreationsforu/" class = "spacing" target="_blank"> Facebook </a>
                    </div>
                    <div class = "d-block" v-bind:class="[Classes.Description]"> 
                       <a href="https://instagram.com/nm.eventcreations_?igshid=1a48qfrr0w11n" class = "spacing" target="_blank"> Instagram </a>
                    </div>
                </div>
                </v-col>

                <v-col
                    :cols = 6
                    :lg = 2
                    :sm = 6
                    :md = 2
                    :xl = 2
                >
                    <v-row  v-bind:class="[Classes.Title]">
                    Visit
                </v-row>
                <div class="mt-6 ml-n3">
                     <div class = "d-block" v-bind:class="[Classes.Description]"> 1223 Flat 7, Albert Road, Gulmohar Colony </div>
                   
                </div>
                </v-col>
                 

        </v-row>
        <v-row class="mt-12">
            <div class="white--text font-weight-regular"> ISO 9001-2015 </div>
        </v-row>
         </v-container>
      </v-container>
    </v-container>
</template>  
<script>
  export default {
    name: 'Footer',
    data() {
      return{
         Classes: {
                SectionHeading : 'grey--text text--darken-4',
                SectionSubHeading : 'white--text text-h5 font-weight-black mt-2',
                Description : 'white--text body-2 font-weight-thin mt-2 text-left',
                Title : 'white--text subtitle-1 font-weight-bold mt-2'
            },
            links: [
                {
                id: 0,
                text: 'Home',
                page:'/'
                },
                {
                id: 1,
                text: 'About',
                page:'/About'
                },
                {
                id: 2,
                text: 'Projects',
                page:'/Projects'
                },
                {
                id: 3,
                text: 'Contact Us',
                page:'/ContactUs'
                }
            ]
      }
    }
  }
</script>
<style scoped>
 .Testimonial {
   background: #37474F;
   width: 100%
 }
 .spacing { 
      color: #FFFFFF;
  } 
</style>