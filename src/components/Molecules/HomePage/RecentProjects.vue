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
            <v-row class="mt-8" justify="start">
                <v-col v-for = "item in slides" 
                            :item="item" 
                            :key="item.id"
                            :cols = 12
                            :lg = 6
                            :sm = 12
                            :md = 6
                            :xs = 12
                            >
                    <router-link 
                        :to= "{
                            name:'PROJECTPAGE',
                            params: {slug: item.slug}
                        }">
                        <v-row align = "end">
                            <v-col  class="d-flex" :cols = 7
                                :lg = 6
                                :sm = 6
                                :md = 6
                                :xs = 8
                                >
                                <v-img :src="item.image" aspect-ratio="0.7"></v-img>
                            </v-col>
                            <v-col class="d-flex ml-n1" align = "end"
                                :cols = 4
                                :lg = 2
                                :sm = 5
                                :md = 2 >
                                    <v-row class="d-block overlap">
                                        <div class=" d-block text-h6 text-sm-h6 text-md-h4 text-lg-h4 text-xl-h4 text-left white--text">
                                            {{item.Bride}}
                                        </div>
                                        <div class="d-block text-h6 text-sm-h6 text-md-h4 text-lg-h4 text-xl-h4 font-weight-bold text-left ml-1 pink--text">
                                            weds
                                        </div>
                                        <div class="d-block text-h6 text-sm-h6 text-md-h4 text-lg-h4 text-xl-h4 text-left ml-1 white--text">
                                            {{item.Groom}}
                                        </div>
                                        <div class="d-block text-subtitle-1 font-weight-medium text-left mt-8 grey--text">
                                            ~ {{item.Date}}
                                        </div>
                                    </v-row>
                                
                            </v-col>
                        </v-row>
                    </router-link>
                </v-col>
            </v-row>
            <v-row>

            <v-col class="mt-8" 
                :cols = 6
                :lg = 2
                :sm = 6
                :md = 3> 
                <div class="mt-4 d-flex">
                    <router-link class="link text-subtitle-2 font-weight-regular"
                    to="/projects" align="start">
                    <div class="underline my-2">
                        </div>
                        <div>
                        VIEW OUR WORK
                        
                        </div>
                        <div class="underline my-2">
                        </div>
                    </router-link>
                </div>
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
                slug: 'nikhita-saurabh',    
                Bride:"Nikhita",
                Groom:"Saurabh",
                Date: "21 Jan'20",
                description:'From Haldi, Mehandi, Phere to their first Makar Sankranti. We had the pleasure of giving them the authentic Marathi wedding experience they had dreamt of.',
                image: "https://firebasestorage.googleapis.com/v0/b/nm-website-10062.appspot.com/o/WhatsApp%20Image%202020-06-12%20at%201.50.28%20PM%20(1).jpeg?alt=media&token=b2d05440-fd7c-4b63-bc18-781c37cb3c7d",
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
                slug: 'mayura-jalay',
                Bride:"Mayura",
                Groom:"Jalay",
                Date: "22 Dec'19",
                description:"Fulfliing Ankita's desire for a fairy tale wedding. We curated the event with elegants elements, soothing lights and shimmer. A sparkly start to their forever.",
                image: "https://firebasestorage.googleapis.com/v0/b/nm-website-10062.appspot.com/o/WhatsApp%20Image%202020-06-14%20at%208.16.41%20PM.jpeg?alt=media&token=250e8c68-a3a6-4d2f-9286-2ca1e115cbfc",
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
                SectionSubHeading : 'text-h5 white--text font-weight-light mt-2'
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
     color: #ffffff;
     text-decoration: none;
 }
 .underline {
    background-color: #84FFFF;
    height: 1px;
 }
 .overlap { 
     margin-bottom: 10px;
     z-index: 100;
 }
 a {
    text-decoration: none;
    }
</style>