<script setup lang="ts">
    import InfContacto from '../components/InfContacto.vue'
    import Presentacion from '../components/Presentacion.vue'

</script>
<template>
    
    <div class="container" >
        <Presentacion class="container__item"/>
        <InfContacto class="container__item cont"/>
       
    </div>
    
    
</template>
<style scoped lang="scss">
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }    
    .container{
        background-color: $colorC;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }    
</style>