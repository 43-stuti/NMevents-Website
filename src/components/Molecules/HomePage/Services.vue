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
        <v-row class="mt-12" align="end">
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
                <div class="WaterEffect text-h4 text-sm-h4 text-md-h2 text-lg-h2 text-xl-h2 font-weight-bold text-left">
                    {{item.id}}
                </div> 
              </v-row>
              <v-row class="Overlap mt-n5 mt-sm-n5 mt-md-n8 mt-lg-n8">
                <div class="text-h6 text-sm-h6 text-md-h4 text-lg-h4 text-xl-h4 font-weight-medium text-left white--text">
                    {{item.title}}
                </div> 
              </v-row>
              <v-row class="mt-2 ml-n6">
                <v-col 
                    :cols = 12
                    :lg = 7
                    :sm = 12
                    :md = 7>
                
                  <div class="text-subtitle-2 font-weight-thin text-left white--text">
                      {{item.description}}
                  </div>
                </v-col>
              </v-row>
          </v-col>
          <v-col 
          :cols = 12
          :lg = 3
          :sm = 11
          :md = 4
          class="ml-4"
           > 
            <v-row align="end" class="mt-12 ml-n6 ml-sm-n6">
              <div class="text-subtitle-2 font-weight-thin white--text">
                We also provide digital engagement for the dear ones who can't attend
              
              </div>
              <div class="mt-2">
                <router-link class="link text-subtitle-2 font-weight-regular"
                  to="/contactUs" align="end">
                  <div class="underline my-2">
                      </div>
                    <div>
                      GET IN TOUCH
                      
                    </div>
                    <div class="underline my-2">
                      </div>
                  </router-link>
              </div>
            </v-row>
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
          description:'Brand promotions and promotional events',
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
          description:'Decor, Catering, Sound and Culture specific events',
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
          description:'Concerts, Award, Dance and Music shows',
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
          description:'Birthdays, Kitty, Engagements and special requirements',
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
          description:'Workshops and Corporate events',
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
                SectionHeading : 'cyan--text text--accent-1 font-weight-medium',
                SectionSubHeading : 'white--text text-h5 font-weight-thin mt-2'
              }
      }
    }
  }
</script>
<style scoped>
 .Testimonial {
   width: 100%;
   background-color:  rgb(71, 4, 32);
 }
 .WaterEffect {
   color: #5c062a;
 }
 .link {
     color: #ffffff;
     text-decoration: none;
 }
 .underline {
   background-color: #84FFFF;
  height: 1px;
 }
</style>