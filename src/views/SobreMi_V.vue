<script setup lang="ts"> 
    import Sidebar from '../components/Sidebar.vue';
    import {ref, Ref} from 'vue';
    let isActive: Ref<boolean> = ref(false);
    const active =(m:boolean):void => {
        isActive.value = m;
    }
    const toggleClass = ():void => {
            isActive.value = !isActive.value;
        }
</script>
<template>
    <div  class="sobremi">
        <Sidebar @toggle="active" id="sidebar"/>    
        <div class="content" :class="{'active': isActive}">
            <div>			
                <h1>Sobre mi</h1>
                <p class="invitation">Reproduce el video para contarte algo más de mi</p>                             
                    <iframe :class="{'active': isActive}" src="https://www.youtube.com/watch?v=Yx26Q8eNeWo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                    <p class="alt_">Cargando video</p>      
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>

.content {
    position: relative;
    padding:0;
    margin:0;
    background-color: $colorC;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
    left: 40px;
    padding-right: 40px;
    transition: all 250ms linear;
    height: 100vh;
    z-index: 1;
    &.active {
        left: 200px;
        padding-right: 200px;
    }
    > div {        
        > * {
            text-align:center;
            padding: 0.2em;
            
        }
        h1 {
                color: $colorE;
            }
    }
}

@media (min-width: $xl) {
    iframe {
        width: calc(($xxl - 40px)/$na);
        height: calc(($xxl - 40px)/$na/1.77);
        transition: all 250ms linear;
        &.active{
            width: calc(($xxl - 200px)/$na);
            height: calc(($xxl - 200px)/$na/1.77);
        }
    }
}
@media (max-width: $xl) and (min-width: $lg) {//1200
    iframe {
        width: calc(($xl - 40px)/$na);
        height: calc((($xl - 40px)/$na)/1.77);
        transition: all 250ms linear;
        &.active{
                width: calc(($xl - 200px)/$na);
                height: calc((($xl - 200px)/$na)/1.77);
        }   
    }
}
@media (max-width: $lg) and (min-width: $md) {
  iframe {
        width: calc(($lg - 40px)/$na);
        height: calc(($lg - 40px)/$na/1.77);
        transition: all 250ms linear;
    &.active{
        width: calc(($lg - 200px)/$na);
        height: calc(($lg - 200px)/$na/1.77);
    }
  }
}
@media (max-width: $md) and (min-width: $sm){//$sm: 576px;$md: 768px;
    iframe {
        width: calc(($md - 40px)/$na);
        height: calc(($md - 40px)/$na/1.77);
        transition: all 250ms linear;
        &.active{
            width: calc(($md - 200px)/$na);
            height: calc(($md - 200px)/$na/1.77);
        }
    }
}
@media (max-width: $sm) {//576px;
    iframe {
        width: calc(($sm - 40px)/$na);
        height: calc(($sm - 40px)/$na/1.77);
    }
    .content{
        left: 0;
        padding-right: 0;
        &.active {
        left: 0;
        padding-right: 0;
        }
    }
}
</style>