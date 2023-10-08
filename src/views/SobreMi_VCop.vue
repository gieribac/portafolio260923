<script setup lang="ts"> 
import Sidebar from '../components/Sidebar.vue';
import { ref, Ref} from 'vue';
let isActive: Ref<boolean> = ref(false);
const active =(m:boolean):void => {
    isActive.value = m
    console.log("alert: "+isActive.value)
}
const toggleClass = ():void => {
        isActive.value = !isActive.value;
    }
     
</script>
<template>
    <div  class="sobremi">
        <div @toggle="active" @click="toggleClass" :class="{'active': isActive}"  class="box"/>    
        <div class="content" :class="{'active': isActive}">
            <div class="content__body" :class="{'active': isActive}">			
                <h1>Sobre mi</h1>
                <p class="invitation">Reproduce el video para contarte algo más de mi</p>
                <div class="video">                
                    <iframe src="https://www.youtube.com/embed/cYdsANducKw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                    <p class="alt_">Cargando video</p>       
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.box{
    position: fixed;
    background-color:green;
    width: 200px;
    height: 100%;
}
.box.active {
  left: 0px;
  width: 200px;
}
.content {
    position: relative;
    padding:0;
    margin:0;
    background-color: red;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
    &.active {
        left: 200px;
        padding-right: 160px;
    }
    left: 40px;
    transition: all 250ms linear;
}
.content__body{
    position: relative; 
    margin: auto;
    transition: all 250ms linear;
    margin:0;
    padding:0;
    background-color: blue;
}
iframe{
    width: 560px;
    height: calc(560px*0.618);
}
@media (max-width: 1000px) {
    iframe{
    width: 480px;
    height: calc(480px*0.618);
    }
    .content__body{
        max-width: 500px;
    }
}

@media (max-width: 750px) {
    iframe{
    width: 360px;
    height: calc(360px*0.618);
    }
    .content__body{
        max-width: 500px;
    }
}


</style>