<template>
    <span>  
        <v-container class="Cover" fluid fill-width fill-height
             v-bind:style ="heroHeight"
        >
            <v-container >
               
                <v-row>
                    <v-col v-bind:class="[Classes.CoverTextLight]"
                        :cols= 12
                        :lg = 12
                        :md = 12
                        :sm = 12
                        :xl = 12
                    >
                        <div>
                            <span class="text-h5 text-sm-h5 text-md-h4 text-lg-h4 text-xl-h4 font-weight-medium text-left black--text">
                                {{activeEvent.Bride}}
                            </span>
                            <span v-if="activeEvent.EventType == 'Wedding'" class="text-h5 text-sm-h5 text-md-h4 text-lg-h4 text-xl-h4 font-weight-bold text-left ml-1 pink--text">
                                weds
                                
                            </span>
                            <div v-else class="text-h5 text-sm-h5 text-md-h4 text-lg-h4 text-xl-h4 font-weight-bold text-left ml-1 pink--text">
                                {{activeEvent.EventType}}
                            </div>
                            <span v-if="activeEvent.EventType == 'Wedding'" class="text-h5 text-sm-h5 text-md-h4 text-lg-h4 text-xl-h4 font-weight-medium text-left ml-1 black--text">
                                {{activeEvent.Groom}}
                            </span>
                        </div>
                        <div class="text-subtitle-1 font-weight-medium text-left mt-8 grey--text">
                            ~ {{activeEvent.Date}}
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-container>
        <v-overlay
            v-if = "Overlay"
            :opacity=1
           
          >
          <v-container>
            <v-row>
                <v-col  :cols = 10
                        :sm = 10
                        :md = 11
                        :lg = 11
                        :xl = 11
                >
                </v-col>
                <v-col  :cols = 2
                        :sm = 2
                        :md = 1
                        :lg = 1
                        :xl = 1> 
                    <v-btn fab small right class="mt-5 grey darken-1 d-flex"  @click.stop="zoom()" justify='end'>
                            <v-icon small color="white">close</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-carousel
                    hide-delimiter-background
                    hide-delimiters
                    show-arrows-on-hover
                    v-bind:style ="heroHeight"
                    >
                        <v-carousel-item
                            v-for = "(slide, i) in rearrangeArray"
                            :key="i"
                        >
                            <v-container fluid grid-list-md>
                                <v-row>
                                    <v-col 
                                    :cols = 12>
                                        <v-img :src="slide" contain
                                        v-bind:style ="carouselImage"></v-img>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-carousel-item>
                    </v-carousel>
            </v-row>
          </v-container>
        </v-overlay>
        <v-container>
            <span v-for = "(item,i) in images"
                :key = "i"
                :item = "item"
                >
                <div v-if="i%5 == 0" class="mt-12">
                    <v-row class="mt-n12">
                    <v-col class="d-flex child-flex" v-if="images && images.length"
                    :cols = 6>
                        <v-img :src="images[i]" @click="zoom(i + 0)" aspect-ratio="1"> 
                        </v-img>
                    </v-col>

                    <v-col  class="pa-0" v-if="images && images.length && images[i+1]"
                    :cols="6">
                        <v-row>
                            <v-col  class="d-flex child-flex" v-if="images[i+1]"
                                :cols = 6
                            >
                                <v-img :src="images[i+1]" @click="zoom(i + 1)" aspect-ratio="1"> 
                                </v-img>
                            </v-col>
                            <v-col  class="d-flex child-flex" v-if="images[i+2]"
                                :cols = 6
                            >
                                <v-img :src="images[i+2]" @click="zoom(i + 2)" aspect-ratio="1"> 
                                </v-img>
                            </v-col>
                        </v-row>
                        <v-row v-if="images[i+3]" aspect-ratio="1">
                            <v-col  class="d-flex child-flex" v-if="images[i+3]"
                                :cols = 6
                            >
                                <v-img :src="images[i+3]" @click="zoom(i + 3)" aspect-ratio="1"> 
                                </v-img>
                            </v-col>
                            <v-col  class="d-flex child-flex" v-if="images[i+4]"
                                :cols = 6
                            >
                                <v-img :src="images[i+4]" @click="zoom(i + 4)" aspect-ratio="1"> 
                                </v-img>
                            </v-col>
                        </v-row>
                    </v-col>
                    </v-row >
                    
                </div>
            </span>
        </v-container>
       <Footer></Footer>
    </span>
   
</template>
<script>
import _ from 'lodash';
import Footer from '@/components/Molecules/HomePage/Footer.vue'
export default {
    name:'ProjectPage',
    data()  {
        return {
            slug: this.$route.params.slug,
            TextStyles : [{
                color : "#000000"
            }],
            Overlay:false,
            Classes : {
                CoverText : 'text-h4 text-sm-h4 text-md-h2 text-lg-h2 text-xl-h1 font-weight-black text-left',
                CoverTextLight : 'text-h4 text-sm-h4 text-md-h2 text-lg-h2 text-xl-h1 font-weight-medium text-left pink--text text--darken-12',
                SubText : 'mt-4 text-h6 text-lg-h5 font-weight-medium text-left deep-purple--text text--darken-4',
                SectionHeading : 'grey--text text--darken-4',
                SectionSubHeading : 'text-h5 font-weight-bold mt-2',
                OverridingClass : 'text--white'
            },
            rearrangeArray : []
        }
    },
    methods: {
        getEvents() {
            this.$store.dispatch('getEvents')
        },
        zoom(index) {
            this.Overlay = !this.Overlay;
            if(index == 0) {
               this.rearrangeArray = this.images
            } else {
                let originalArray = _.cloneDeep(this.images);
                let splitArray = originalArray.splice(index);
                originalArray = _.reverse(originalArray);
                this.rearrangeArray = _.concat(splitArray,originalArray);
            }
        },
        getImages() {
            this.$store.dispatch('getGalleryImages')
        }
    },
    computed: {
        activeEvent : function() {
            return _.find(this.$store.state.EventImages, e => this.slug == e.slug )
        },
        images : function() {
            if(this.activeEvent) {
                return this.activeEvent.Images
            } else {
                return []
            }
            
        },
        mappedImages() {
            return _.flatten(
                        _.map(this.contents,'Images')
                    )
        },
        heroHeight() {
            switch (this.$vuetify.breakpoint.name) {
            case 'xs':
            case 'sm':
                return {height: '350px'};
            default:
                return {height: '450px'};
            }
        },
        carouselImage() {
            switch (this.$vuetify.breakpoint.name) {
            case 'xs':
            case 'sm':
                return {
                    height: '400px',
                    width: '300px'
                };
            default:
                return {
                    height: '500px',
                    width: '600px'
                };
            }
        }
    },
    created() {
        this.getEvents()
    },
    components:{
        Footer
    }
}

</script>
<style scoped>
    .Cover {
        height: 5%;
    }
</style>