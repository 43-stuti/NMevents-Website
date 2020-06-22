 <template>
 <span>
    <v-container class="Cover" fluid fill-width fill-height
                    v-bind:style ="heroHeight"
    >
        <v-container >
            <v-row align="center">
                <v-col v-bind:class="[Classes.CoverText]"
                        :cols= 7
                        :lg = 4
                        :md = 5
                        :sm = 7
                        :xl = 4
                >
                    Hi, we're 
                </v-col>
               
            </v-row>
            <v-row>
                <v-col v-bind:class="[Classes.CoverTextLight]"
                    :cols= 10
                    :lg = 6
                    :md = 6
                    :sm = 10
                    :xl = 6
                >
                    NM Creations. 
                     
                </v-col>
            </v-row>
        </v-container>
    </v-container>
    <v-container class="my-12">
        <v-container>
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
                    <v-row  v-bind:class="[Classes.SectionHeading]">
                        How we work
                    </v-row>
                    <v-row  v-bind:class="[Classes.SubText]">
                        We work closely with our clients to understand your requirements and craft an experience that is unique to you.
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
        </v-container>
    </v-container>
    <v-container class='Team' fluid fill-width>
        <v-container>
            <v-container class="my-12">
                <v-row  class="black--text">
                    Our Team
                </v-row>
                <v-row  class="text-h5 font-weight-bold mt-2 black--text">
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
                    <ImageCards 
                            :item="item" 
                            :key="i">
                    </ImageCards>
                    </v-col>
                </v-row>
            </v-container>
        </v-container>
    </v-container>
    <Footer></Footer>
 </span>
 </template>

<script>
import ImageCards from '@/components/Atoms/ImageCards.vue'
import Footer from '@/components/Molecules/HomePage/Footer.vue'
export default {
    name:'AboutPage',
    data()  {
        return {
            People:[
            {   
                id:"1",
                image:'/Aishwarya.jpeg',
                title:'Payal Kushwah ',
                description:'Hospitality Head'
            },
            {   
                id:"2",
                image:'/Natasha.jpeg',
                title:'Natasha',
                description:'CEO and Creative head'
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
                SubText : 'mt-4 text-h6 text-lg-h5 font-weight-bold text-left blue-grey--text text--darken-4',
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
      }
    },
    components:{
        ImageCards,
        Footer
    }
}
</script>
<style scoped>
    .Cover {
        background: linear-gradient(rgb(255, 251, 253) 10%,#ffffff 30%, rgb(235, 242, 245) 80%);
        height: 100%;
    }
    .Test {
        content: '';
        background :linear-gradient(to right, #F48FB1 20%, rgb(235, 129, 164) 100%);
        height: 6px;
        opacity : 0.9;
    }
    .Team {
        background-color:rgb(255, 245, 248)
    }
</style>