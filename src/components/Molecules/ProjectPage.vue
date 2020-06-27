<template>
    <span>  
        <v-container class="Cover" fluid fill-width fill-height
             v-bind:style ="heroHeight"
        >
            <v-container >
                <v-row align-center>
                    <v-col v-bind:class="[Classes.CoverText]"
                            :cols= 12
                            :lg = 12
                            :md = 12
                            :sm = 12
                            :xl = 12
                    >
                        Creating memories
                    </v-col>
                </v-row>
                <v-row>
                    <v-col v-bind:class="[Classes.CoverTextLight]"
                        :cols= 12
                        :lg = 12
                        :md = 12
                        :sm = 12
                        :xl = 12
                    >
                        for a lifetime.
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
                                        <v-img :src="slide" 
                                        v-bind:style ="carouselImage"></v-img>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-carousel-item>
                    </v-carousel>
            </v-row>
          </v-container>
        </v-overlay>
        <v-container class="mt-12">
            <span v-for = "(item,i) in contents"
                :key = "i"
                :item = "item"
                >
                <div>
                    <v-row v-if="item.GroupName" class="my-12">
                        <v-col :cols = 10
                                :lg = 6
                                :xl = 6
                                :sm = 10
                                :md = 6>
                            <v-container>
                                <v-row v-bind:style = TextStyles[i%4]>
                                    {{item.GroupName}}
                                </v-row>
                                <v-row v-bind:class="[Classes.SectionSubHeading,item.styles]" v-bind:style = TextStyles[i%4]>
                                    {{item.GroupDescription}}
                                </v-row>
                            </v-container>
                        </v-col>
                    </v-row>
                    <v-row class="mt-n12">
                    <v-col class="d-flex child-flex" v-if="item.Images && item.Images.length"
                    :cols = 6>
                        <v-img :src="item.Images[0]" @click="zoom(5*i + 0)" aspect-ratio="1"> 
                        </v-img>
                    </v-col>

                    <v-col  class="mt-n2"
                    :cols="6" v-if="item.Images[1]">
                        <v-row>
                            <v-col  class="d-flex child-flex" v-if="item.Images[1]"
                                :cols = 6
                            >
                                <v-img :src="item.Images[1]" @click="zoom(5*i + 1)" aspect-ratio="1"> 
                                </v-img>
                            </v-col>
                            <v-col  class="d-flex child-flex" v-if="item.Images[2]"
                                :cols = 6
                            >
                                <v-img :src="item.Images[2]" @click="zoom(5*i + 2)" aspect-ratio="1"> 
                                </v-img>
                            </v-col>
                        </v-row>
                        <v-row v-if="item.Images[3]" aspect-ratio="1">
                            <v-col  class="d-flex child-flex" v-if="item.Images[3]"
                                :cols = 6
                            >
                                <v-img :src="item.Images[3]" @click="zoom(5*i + 3)" aspect-ratio="1"> 
                                </v-img>
                            </v-col>
                            <v-col  class="d-flex child-flex" v-if="item.Images[4]"
                                :cols = 6
                            >
                                <v-img :src="item.Images[4]" @click="zoom(5*i + 4)" aspect-ratio="1"> 
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
             TextStyles : [{
                color : "#000000"
            }],
            Overlay:false,
            Classes : {
                CoverText : 'text-h4 text-sm-h4 text-md-h2 text-lg-h2 text-xl-h1 font-weight-black text-left',
                CoverTextLight : 'text-h4 text-sm-h4 text-md-h2 text-lg-h2 text-xl-h1 font-weight-medium text-left amber--text text--darken-2',
                SubText : 'mt-4 text-h6 text-lg-h5 font-weight-medium text-left deep-purple--text text--darken-4',
                SectionHeading : 'grey--text text--darken-4',
                SectionSubHeading : 'text-h5 font-weight-bold mt-2',
                OverridingClass : 'text--white'
            },
            rearrangeArray : []

        }
    }, 
    methods: {
        zoom(index) {
            this.Overlay = !this.Overlay;
            if(index == 0) {
               this.rearrangeArray = this.mappedImages
            } else {
                let originalArray = _.cloneDeep(this.mappedImages);
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
        contents : function() {
             return this.$store.state.ProjectImages
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
                return {height: '550px'};
            default:
                return {height: '650px'};
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
        this.getImages()
    },
    components:{
        Footer
    }
}

</script>
<style scoped>
    .Cover {
        background-color:  rgba(255, 249, 253, 0.7); ;
        height: 14%;
    }
</style>