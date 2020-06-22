<template>
  <v-container fluid fill-width class="Testimonial mt-12" justify = 'center' align='center'>
    <v-container justify = 'center' align='center'>
       <v-row  v-bind:class="[Classes.SectionHeading]">
            Our Services
        </v-row>
        <v-row  v-bind:class="[Classes.SectionSubHeading]">
            Here is how we can help you
        </v-row>
      <v-row class="mt-8 ml-n8">
        <v-col v-for="item in services" 
                        :item="item" 
                        :key="item.id"
                        :cols = 12
                        :lg = 3
                        :sm = 12
                        :md = 4
                        >
            <Cards :item="item" 
                  :key="item.id"
                  :outline="outline"
                  :spacing = "spacing" />
         </v-col>
        <v-col 
        :cols = 12
        :lg = 3
        :sm = 12
        :md = 3
         class="font-weight-regular ml-4"> 
            We also provide digital engagement for the dear ones who can't attend
            <div class="mt-4">
              <router-link class="link text-subtitle-2 font-weight-regular"
                to="/contactUs">GET IN TOUCH</router-link>
              
            </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
  import Cards from '@/components/Atoms/Cards.vue'
  export default {
    name: 'Services',
    components : {
      Cards
    },
    data() {
      return{
        services:[
         {
          id : 1,
          title: 'Brand Events',
          description:'',
          styles:{
            card : {
              'background-color' : "#FFFFFF"
            },
            title : {
              color : "#D81B60"
            },
            description : {
              color : "#000000"
            }
          }
        }, {
          id : 2,
          title: 'Weddings',
          description:'',
          styles:{
            card : {
              'background-color' : "#FFFFFF"
            },
            title : {
              color : "#e6416d"
            },
            description : {
              color : "#000000"
            }
          }
        }, {
          id : 3,
          title: 'Live Shows',
          description:'',
          styles:{
            card : {
              'background-color' : "#FFFFFF"
            },
            title : {
              color : "#e6416d"
            },
            description : {
              color : "#000000"
            }
          }
        }, {
          id : 4,
          title: 'Parties',
          description:'',
          styles:{
            card : {
              'background-color' : "#FFFFFF"
            },
            title : {
              color : "#D81B60"
            },
            description : {
              color : "#000000"
            }
          }
        }, {
          id : 5,
          title: 'Seminars',
          description:'',
          styles:{
            card : {
              'background-color' : "#FFFFFF"
            },
            title : {
              color : "#D81B60"
            },
            description : {
              color : "#000000"
            }
          }
        }
      ],
      outline : true,
      spacing : "ma-4",
      Classes: {
                SectionHeading : 'grey--text text--darken-4',
                SectionSubHeading : 'text-h5 font-weight-bold mt-2'
              }
      }
    }
  }
</script>
<style scoped>
 .Testimonial {
   width: 100% 
 }
 .link {
     color: #2f69b4;
     text-decoration: none;
 }
</style>