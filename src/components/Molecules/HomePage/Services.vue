<template>
  <v-container fluid fill-width class="Testimonial">
    <v-container class ="my-8" justify = 'center' align='center'>
      <v-container>
        <v-row  v-bind:class="[Classes.SectionHeading]">
              Our Services
          </v-row>
          <v-row  v-bind:class="[Classes.SectionSubHeading]">
              Here is how we can help you
          </v-row>
        <v-row class="mt-12" >
          <v-col v-for="item in services" 
                          :item="item" 
                          :key="item.id"
                          :cols = 12
                          :lg = 4
                          :sm = 12
                          :md = 5
                          class="d-inline-block mt-12"
                          >
              <v-row>
                <div class="text-h1 font-weight-black text-left pink--text text--darken-4">
                    {{item.id}}
                </div> 
              </v-row>
              <v-row class="Overlap mt-n12">
                <div class="text-h3 font-weight-medium text-left white--text">
                    {{item.title}}
                </div> 
              </v-row>
              <v-row class="mt-5">
                <v-col 
                    :cols = 12
                    :lg = 7
                    :sm = 12
                    :md = 7>
                
                  <div class="text-subtitle-2 text-left white--text">
                      We also provide digital engagement for the dear ones who can't attend.
                      We also provide digital 
                  </div>
                </v-col>
              </v-row>
          </v-col>
          <v-col 
          :cols = 12
          :lg = 3
          :sm = 12
          :md = 5
          class="font-weight-regular ml-4 mt-5"> 
              We also provide digital engagement for the dear ones who can't attend
              <div class="mt-4">
                <router-link class="link text-subtitle-2 font-weight-regular"
                  to="/contactUs">GET IN TOUCH</router-link>
                
              </div>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    name: 'Services',
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
                SectionHeading : 'pink--text text--darken-4 font-weight-bold',
                SectionSubHeading : 'white--text text-h5 font-weight-bold mt-2'
              }
      }
    }
  }
</script>
<style scoped>
 .Testimonial {
   width: 100%;
   background-color: rgb(88, 12, 44);
 }
 .link {
     color: #2f69b4;
     text-decoration: none;
 }
</style>