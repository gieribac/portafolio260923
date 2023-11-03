<script setup lang="ts">
    import InfContacto from '../components/InfContacto.vue'
    import Presentacion from '../components/Presentacion.vue'

</script>
<template>
    <div id="cont">
        <div class="container" >
            <Presentacion class="container__item"/>
            <InfContacto class="container__item cont"/>
        
        </div>
    </div>
</template>
<style scoped lang="scss">
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }    

    .container{
        background-color: $p1;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
        height: min-content;
    }
    #cont{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        background-color: $p1;
    }
    @media (min-width: 1054px){
        #cont{ 
            height: 100vh;
        }   
    }
    @media only screen and (min-width: $lg) and (max-width: 1054px) {
        #cont{ 
            height: 100vh;
            padding-top: 40%
        } 
    }
</style>