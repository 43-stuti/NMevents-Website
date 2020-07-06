<template>
    <span>  
        <v-container class="Cover" align="center" fluid fill-width fill-height
                    v-bind:style ="heroHeight"
    >
        <v-row class="mt-n12">
        <v-col class="Flowers" 
                :cols = 12
                :lg = 12
                :xs = 12
                :sm = 12
                :md = 7>
          <ThreeTest branches=true> </ThreeTest>
        </v-col>
      </v-row>
        <v-container align="center">
            <v-container align="center" class="mt-n12 mb-12">
                <v-row align="center">
                    <v-col v-bind:class="[Classes.CoverText]"
                            :cols= 12
                            :lg = 12
                            :md = 12
                            :sm = 12
                            :xl = 12
                            align = "center"
                    >
                        Memories created
                    </v-col>
                
                </v-row>
                <v-row>
                    <v-col v-bind:class="[Classes.CoverTextLight]"
                        :cols= 12
                        :lg = 7
                        :md = 7
                        :sm = 12
                        :xl = 7
                    >
                        for a lifetime. 
                        
                    </v-col>
                </v-row>
            </v-container>
        </v-container>
    </v-container>
        <v-container fluid fill-width class="Testimonial">
        <v-container fluid fill-width class="my-12">
            <v-container>
                <v-row  v-bind:class="[Classes.SectionHeading]">
                    Our Projects
                </v-row>
                <v-row  v-bind:class="[Classes.SectionSubHeading]">
                    Together we explored the stars.
                </v-row>
        </v-container>
        <v-container justify="start">
            <v-row class="mt-8" justify="start"
                    
            >
                <v-col v-for = "item in contents" 
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
                            <v-col  class="d-flex" :cols = 8
                                :lg = 6
                                :sm = 6
                                :md = 6
                                :xs = 8
                                >
                                <v-img :src="item.CoverImage" aspect-ratio="0.7"></v-img>
                            </v-col>
                            <v-col class="d-flex ml-n1" align = "end"
                                :cols = 4
                                :lg = 2
                                :sm = 5
                                :md = 2 >
                                    <v-row class="d-block overlap">
                                        <div class="d-block text-h6 text-sm-h6 text-md-h4 text-lg-h4 text-xl-h4 text-left white--text">
                                            {{item.Bride}}
                                        </div>
                                        <div v-if="item.EventType == 'Wedding'" class="d-block text-h6 text-sm-h6 text-md-h4 text-lg-h4 text-xl-h4 font-weight-bold text-left ml-1 pink--text">
                                            weds
                                        </div>
                                        <div v-else class="d-block text-h6 text-sm-h6 text-md-h4 text-lg-h4 text-xl-h4 font-weight-bold text-left ml-1 white--text">
                                            {{item.EventType}}
                                        </div>
                                        <div v-if="item.EventType == 'Wedding'" class="d-block text-h6 text-sm-h6 text-md-h4 text-lg-h4 text-xl-h4 text-left ml-1 white--text">
                                            {{item.Groom}}
                                        </div>
                                        <div class="text-subtitle-1 font-weight-medium text-left mt-8 grey--text">
                                            ~ {{item.Date}}
                                        </div>
                                    </v-row>
                            </v-col>
                        </v-row>
                    </router-link>
                </v-col>
            </v-row>
        </v-container>
        </v-container>
    </v-container>
       <Footer></Footer>
    </span>
   
</template>
<script>
import Footer from '@/components/Molecules/HomePage/Footer.vue'
import ThreeTest from '@/components/Molecules/HomePage/ThreePetal.vue'
import _ from 'lodash';
export default {
    name:'AllProjects',
    data()  {
        return {
             TextStyles : [{
                color : "#000000"
            }],
            Overlay:false,
            Classes : {
                CoverText : 'text-h4 text-sm-h4 text-md-h2 text-lg-h2 text-xl-h1 font-weight-black text-left',
                CoverTextLight : 'text-h4 text-sm-h4 text-md-h2 text-lg-h2 text-xl-h1 font-weight-medium text-left pink--text text--darken-12',
                SubText : 'mt-4 text-h6 text-lg-h5 font-weight-medium text-left deep-purple--text text--darken-4',
                SectionHeading : 'cyan--text text--darken-2 font-weight-medium',
                SectionSubHeading : 'text-h5 white--text font-weight-light mt-2',
                OverridingClass : 'text--white'
            },
            rearrangeArray : []

        }
    }, 
    methods: {
        getEvents() {
            this.$store.dispatch('getEvents')
        }
    },
    computed: {
        contents : function() {
             return _.sortBy(this.$store.state.EventImages, ['SNo'])
        },
        heroHeight() {
            switch (this.$vuetify.breakpoint.name) {
            case 'xs':
            case 'sm':
                return {height: '550px'};
            default:
                return {height: '650px'};
            }
        }
    },
    created() {
        this.getEvents()
    },
    components:{
        Footer,
        ThreeTest
    }
}

</script>
<style scoped>
    .Cover {
        background-color:  rgba(255, 249, 253, 0.7); ;
        height: 14%;
    }
    .Testimonial {
        background-color: rgb(44, 40, 40);
        width: 100%
    }
    a {
    text-decoration: none;
  }
</style>