<template>
    <div>
    <v-container class="d-inline-flex pa-0 ma-0">
        <v-row 
          :justify="horizontalPosition" 
          align="center">
          <v-col class="mt-6"
                  :cols = 4
                  :lg = 2
                  :sm = 4
                  :md = 2
                  :xl = 2
                  
                  >
            <v-avatar :size="imageHeight">
                    <img alt="Avatar" :src = "item.Image">
            </v-avatar>
          </v-col>
           
          <v-col class="black--text font-weight-regular mt-4 ml-4 ml-lg-n8 ml-md-n8 ml-xl-n8" 
                      :cols = 10
                      :lg = 7
                      :sm = 10
                      :md = 7> 
            <v-row  class = "text-h3 text-lg-h2 font-weight-thin cyan--text text--darken-2 text-center"
           
                  >
                  "
          </v-row>
            <v-row class="ml-6 mt-n8">
              {{item.Comment}}
            </v-row >
            <v-row class="text-uppercase mt-4 caption cyan--text text--darken-2 font-weight-bold ml-6">
               ~ {{item.Name}}
            </v-row>
          </v-col>
      </v-row>
    </v-container>  
    </div>
</template>

<script>
  export default {
    name: 'Templates',
    props : ['item'],
    computed: {
      horizontalPosition() {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs':
          case 'sm':
            return 'center';
          default:
            return 'left';
        }
      },
      imageHeight() {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs':
          case 'sm':
            return '80px';
          default:
            return '120px';
        }
      }
    }
  }
</script>
<style scoped>
.underline {
   background-color: #D81B60;
    height: 0.5px;
   }
</style>