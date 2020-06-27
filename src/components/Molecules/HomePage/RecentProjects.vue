<template>
    <v-container fluid fill-width class="Testimonial">
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
                    <v-row align = "end">
                        <v-col  class="d-flex" :cols = 8
                            :lg = 6
                            :sm = 8
                            :md = 6
                            :xs = 8
                            >
                            <v-img :src="item.image" aspect-ratio="0.7"></v-img>
                        </v-col>
                        <v-col class="d-flex ml-n1" align = "end"
                            :cols = 2
                            :lg = 2
                            :sm = 4
                            :md = 2 >
                                <v-row class="overlap">
                                    <div class="text-h4 font-weight-medium text-left white--text">
                                        Nikita
                                    </div>
                                    <div class="text-h5 font-weight-bold text-left ml-1 pink--text">
                                        weds
                                    </div>
                                    <div class="text-h4 font-weight-medium text-left ml-1 white--text">
                                        Saurabh
                                    </div>
                                    <div class="text-subtitle-1 font-weight-medium text-left mt-8 grey--text">
                                        ~ 21-05-2020
                                    </div>
                                </v-row>
                               
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

  export default {
    name: 'RecentProjects',
    data() {
        return{
            slides:[
                {
                title: "Nikita weds Saurabh",
                description:'From Haldi, Mehandi, Phere to their first Makar Sankranti. We had the pleasure of giving them the authentic Marathi wedding experience they had dreamt of.',
                image: 'https://firebasestorage.googleapis.com/v0/b/nm-website-10062.appspot.com/o/Project1.jpeg?alt=media&token=3536e2b4-ad6f-436b-862f-67f2b87e2d64',
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
                image: 'https://firebasestorage.googleapis.com/v0/b/nm-website-10062.appspot.com/o/Project2.jpeg?alt=media&token=fa77c48e-b472-47fe-b376-db1740e4c35b',
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
                SectionHeading : 'cyan--text text--darken-2 font-weight-medium',
                SectionSubHeading : 'white--text text-h5 font-weight-bold mt-2'
            },
            spacing : "d-inline-flex"
        }
    }
  }
</script>
<style scoped>
 .Testimonial {
   background-color: rgb(44, 40, 40);
   width: 100%
 }
 .link {
     color: #2f69b4;
     text-decoration: none;
 }
 .underline { 
     height: 4px;
 }
 .overlap { 
     margin-bottom: 10px;
     z-index: 100;
 }
</style>