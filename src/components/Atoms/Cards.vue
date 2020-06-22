<template> 
  <v-card v-bind:class="[spacing]" flat tile :outlined = 'outline'> 
    <div v-bind:style = item.styles.card>
    <v-container fluid align="center">
      <v-row class="mx-3 mt-2" align="center">
        <v-card-title>
          <div class="text-h6 font-weight-bold" v-bind:style = item.styles.title>
              {{item.title}}
          </div>
        </v-card-title>
        <v-card-text>
          <div class="descrption font-weight-regular mt-lg-2" v-bind:style = item.styles.description>
            {{item.description}} 
          </div>
        </v-card-text>
      </v-row>
    </v-container>  
    </div>
  </v-card>
</template>

<script>
  export default {
    name: 'Cards',
    props: ['item','outline','spacing'],
    data() {
      return {
        arrangeClass : "d-inline-flex"
      }
    }
    
  
  }
</script>
<style scoped>
  .descrption {
    line-height : 1.8;
  }
</style>