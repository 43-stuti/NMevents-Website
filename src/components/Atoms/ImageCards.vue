<template>
    <v-card class="px-0 ml-0" tile flat color="#FFF5F8">
       
            <v-img class="px-0 mx-0"
                 aspect-ratio="1.2"
                :src="item.image"
            >
               
            </v-img>
            <v-card-title class="text-left px-0 mx-0">
                {{item.title}}
            </v-card-title>
            <v-card-text class="text-left px-0 mx-0">
                <div>{{item.description}}</div>
            </v-card-text>
        
    </v-card>
</template>

<script>
export default {
    name:"ImageCards", 
    props:['item']
}
</script>

<style scoped>

</style>