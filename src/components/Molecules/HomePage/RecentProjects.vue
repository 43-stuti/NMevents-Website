<template>
    <v-container fluid fill-width class="Testimonial mt-12">
        <v-container fluid fill-width class="my-12">
            <v-container>
                <v-row  v-bind:class="[Classes.SectionHeading]">
                    Our Recent Projects
                </v-row>
                <v-row  v-bind:class="[Classes.SectionSubHeading]">
                    Together we explored the stars.
                </v-row>
        </v-container>
        <v-container justify="start">
            <v-row class="mt-8" justify="start"
                    
            >
                <v-col v-for = "item in slides" 
                            :item="item" 
                            :key="item.id"
                            :cols = 12
                            :lg = 6
                            :sm = 12
                            :md = 6
                            :xs = 12
                            >
                    <v-row>
                        <v-col  class="d-flex" :cols = 12
                            :lg = 5
                            :sm = 12
                            :md = 5
                            :xs = 12
                            >
                            <v-img :src="item.image" aspect-ratio="0.8"></v-img>
                        </v-col>
                        <v-col class="d-flex mt-n6 mt-sm-n6 mt-xl-0 mt-md-0 mt-lg-0
                                             ml-md-n6 ml-lg-n6 ml-xl-n6"
                            :cols = 12
                            :lg = 7
                            :sm = 12
                            :md = 7 >
                            <Cards :item = item
                                     :spacing = "spacing"
                            >
                                  
                                 </Cards>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row>

                <v-col class="mt-8"  offset-md="10">
              <router-link class="link text-subtitle-2 font-weight-regular"
                to="/projects">VIEW OUR WORK</router-link>
              
            </v-col>
            </v-row>
        </v-container>
        </v-container>
    </v-container>
</template>

<script>
import Cards from '@/components/Atoms/Cards.vue'

  export default {
    name: 'RecentProjects',
    components:{
        Cards
    },
    data() {
        return{
            slides:[
                {
                title: "Nikita weds Saurabh",
                description:'From Haldi, Mehandi, Phere to their first Makar Sankranti. We had the pleasure of giving them the authentic Marathi wedding experience they had dreamt of.',
                image: '/Project1.jpeg',
                styles:{
                     card : {
                     'background-color' : "#6d7994"
                        },
                        title : {
                        color : "#ffffff"
                        },
                        description : {
                        color : "#ffffff"
                        }
                    }
                },
                {
                title: 'Ankita weds Ashirwad',
                description:"Fulfliing Ankita's desire for a fairy tale wedding. We curated the event with elegants elements, soothing lights and shimmer. A sparkly start to their forever.",
                image: '/Project2.jpeg',
                styles:{
                         card : {
                            'background-color' : "#B44772"
                        },
                        title : {
                        color : "#FAFAFA"
                        },
                        description : {
                        color : "#FAFAFA"
                        }
                    }
                }
            ],
            Classes: {
                SectionHeading : 'grey--text text--darken-4',
                SectionSubHeading : 'text-h5 font-weight-bold mt-2'
            },
            spacing : "d-inline-flex"
        }
    }
  }
</script>
<style scoped>
 .Testimonial {
background: linear-gradient(rgba(151, 57, 57, 0) 70%,#F5F5F5 100%);
   width: 100%
 }
 .link {
     color: #2f69b4;
     text-decoration: none;
 }
 
</style>