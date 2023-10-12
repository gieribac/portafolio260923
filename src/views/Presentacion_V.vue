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
    <div  class="presentacion">
        <Sidebar @toggle="active" id="sidebar"/>    
        <div class="content" :class="{'active': isActive}">
            <div>			
                <h1>Presentación</h1>
                <p class="invitation">Reproduce el video para presentarme</p>                             
                    <iframe :class="{'active': isActive}" src="https://www.youtube.com/watch?v=Yx26Q8eNeWo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                    <p class="alt_">Cargando video</p>      
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.presentacion {
    width: 100%;
    overflow-x: hidden;
}
.content {
    position: relative;
    margin:0;
    background-color: $colorC;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
    left: 40px;
    padding-right: 40px;
    transition: all 200ms linear;
    height: 100vh;
    z-index: 1;
    transition: all 200ms linear;
    > div {
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
    }
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
            color: black;
            text-shadow: 2px 2px 4px $colorE;
        }
    }
}

@media (min-width: $xl) {
    iframe {
        width: calc(($xxl - 40px)/$na);
        height: calc(($xxl - 40px)/$na/1.77);
        transition: all 200ms linear;
        &.active{
            width: calc(($xxl - 200px)/$na);
            height: calc(($xxl - 200px)/$na/1.77);
        }
    }
}
@media (max-width: $xl) and (min-width: $lg) {//1200 - $lg: 992px;
    iframe {
        width: calc(($xl - 40px)/$na);
        height: calc((($xl - 40px)/$na)/1.77);
        transition: all 200ms linear;
        &.active{
                width: calc(($xl - 200px)/$na);
                height: calc((($xl - 200px)/$na)/1.77);
        }   
    }
}
@media (max-width: $lg) and (min-width: $md) {//$md: 768px;
  iframe {
        width: calc(($lg - 40px)/$na);
        height: calc(($lg - 40px)/$na/1.77);
        transition: all 200ms linear;
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
        transition: all 200ms linear;
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