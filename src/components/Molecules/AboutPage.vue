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
                            :lg = 4
                            :md = 5
                            :sm = 12
                            :xl = 4
                            align = "center"
                    >
                        Hi, we're 
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
                        NM Creation. 
                        
                    </v-col>
                </v-row>
            </v-container>
        </v-container>
    </v-container>
     
    <v-container class="Work" fluid fill-width>
        <v-container class="my-12 ">
        <v-row>
            <v-col
            :cols = 5>
                <v-img src="/About2.jpg" aspect-ratio="1.9"></v-img>
            </v-col>
            <v-col
            :cols = 12
            :xl = 5
            :lg = 5
            :md = 5
            :sm = 12
            >
                <v-container>
                    <v-row class="cyan--text text--accent-1">
                        How we work
                    </v-row>
                    <v-row  class="text-h5 font-weight-thin mt-2 white--text">
                       Our success is a result of the tireless diligence of the team to ensure that every component of the event works in a planned manner. 
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
        </v-container>
    </v-container>
   
   <v-container class="my-12" fluid fill-width>
        <v-container class="my-12">
            <v-container>
                <v-row>
                    <v-col
                        :cols = 12
                        :lg = 5
                        :sm = 12
                        :md = 5
                        :xl = 6>
                        <v-row  class="pink--text text--darken-1 font-weight-bold">
                            Who we are
                        </v-row>
                        <v-row  class="text-h5 font-weight-light mt-4 black--text">
                            Founded in 2015, with the motivation to bridge the gap between professional and innovation-driven event management.
                        </v-row>
                        
                    </v-col>
                    <v-col  class = "mt-xs-12 mt-sm-12" offset-md="2"  offset-lg="2"  offset-xl="2"
                        :cols = 12
                        :lg = 5
                        :sm = 12
                        :md = 5
                        :xl = 6>
                        <v-row class="mt-md-n8 mt-lg-n8 mt-xl-n8">
                            <div class="text-h2 text-lg-h1 font-weight-black text-left pink--text text--darken-1">
                                5
                            </div> 
                        </v-row>
                        <v-row  class="text-subtitle-2 font-weight-regular black--text">
                            Yrs in the Industry
                        </v-row>
                        <v-row  class="mt-8">
                            <div class="text-h2 text-lg-h1 font-weight-black text-left pink--text text--darken-1">
                                20
                            </div> 
                        </v-row>
                        <v-row  class="text-subtitle-2 font-weight-regular black--text">
                            Members strong team
                        </v-row>
                    </v-col>
                    
                </v-row>
            </v-container>
        </v-container>
    </v-container>
    <v-container class='Team' fluid fill-width>
        <v-container>
            <v-container class="my-12">
                <v-row class="cyan--text text--accent-1">
                    Our Team
                </v-row>
                <v-row  class="text-h5 font-weight-light mt-2 white--text">
                    Meet our creative superheroes.
                </v-row>
                <v-row class="mt-10">
                    <v-col v-for = "(item,i) in People" class="mr-12 px-0"
                        :key="i"
                        :item= "item"
                        :cols = 12
                        :lg = 3
                        :sm = 12
                        :md = 3
                        :xl = 3
                    >
                    <v-row align = "end">
                        <v-col  class="d-flex" 
                            :cols = 8
                            :lg = 8
                            :sm = 8
                            :md = 8
                            :xs = 8
                            >
                            <v-img :src="item.image" :aspect-ratio="imageRatio"></v-img>
                        </v-col>
                        <v-col class="d-flex ml-n1" align = "end"
                            :cols = 4
                            :lg = 4
                            :sm = 4
                            :md = 4 >
                                <v-row class="Overlap">
                                    <div class="text-h6 text-sm-h6 text-md-h4 text-lg-h4 text-xl-h4 font-weight-regular text-left white--text">
                                        {{item.title}}
                                    </div>
                                    <div class="text-subtitle-2 font-weight-medium text-left cyan--text text-accent-2">
                                        {{item.description}}
                                    </div>
                                </v-row>
                               
                        </v-col>
                    </v-row>
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
export default {
    name:'AboutPage',
    data()  {
        return {
            People:[
            {   
                id:"1",
                image:'/Aishwarya.jpeg',
                title:'Payal',
                description:'Hospitality Head'
            },
            {   
                id:"2",
                image:'/Natasha.jpeg',
                title:'Natasha',
                description:'CEO and Creative'
            },
            {   
                id:"3",
                image:'/Avinash.jpeg',
                title:'Avinash',
                description:'FnB Head'
            }
            ],
            Classes : {
                CoverText : 'text-h4 text-sm-h4 text-md-h2 text-lg-h2 text-xl-h1 font-weight-black text-left',
                CoverTextLight : 'text-h4 text-sm-h4 text-md-h2 text-lg-h2 text-xl-h1 font-weight-regular text-left pink--text text--darken-1',
                SubText : 'mt-4 text-h6 text-lg-h5 font-weight-thin text-left white--text',
                SectionHeading : 'grey--text text--darken-4',
                SectionSubHeading : 'text-h5 font-weight-bold mt-2',
                OverridingClass : 'text--white'
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
      },
       imageRatio() {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs':
          case 'sm':
            return '1';
          default:
            return '0.5';
        }
      }
    },
    components:{
        Footer,
        ThreeTest
    }
}
</script>
<style scoped>
    .Flowers {
       z-index: 0;
       position: absolute;
       margin-top: -100px;
  }
    .Cover {
        background-color:  rgba(255, 249, 253, 0.7);
        height: 100%;
        z-index: -1
    }
    .Test {
        content: '';
        background :linear-gradient(to right, #F48FB1 20%, rgb(235, 129, 164) 100%);
        height: 6px;
        opacity : 0.9;
    }
    .Team {
        background-color:  rgb(71, 4, 32);
    }
    .Work {
        background-color: rgb(44, 40, 40);
    }
    .Overlap { 
     margin-left: -30px;
     z-index: 100;
    }
</style>