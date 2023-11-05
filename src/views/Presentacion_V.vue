<script setup lang="ts"> 
    import Sidebar from '../components/Sidebar.vue';
    import Tetris from '../components/Tetris.vue';
    import {ref, Ref} from 'vue';
    let isActive: Ref<boolean> = ref(false);
    let flag: Ref<boolean> = ref(true);
    const player = () => {
        flag.value=false;
    }
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
                <p class="invitation">Reproduce el video para ver presentación</p> 
                    <img v-if="flag" @click="player" src="src/assets/misproy/play.jpg" alt="click para reproducir" class="iframe" style="cursor: pointer">                            
                    <iframe v-else="flag" :class="{'active': isActive}" class="iframe" src="https://www.youtube.com/embed/lN2i53jiA84?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe> 
                    <p id="game">Juega tetris, puedes usar los botones del costado derecho o las teclas 'R', 'P' y las flechas.</p>
                    <Tetris id="tetris"/>    
            </div>
            
        </div>
    </div>
</template>
<style lang="scss" scoped>

#game {
    margin-top: 2em;
}
p {
    font-family: $domine;
    color: $s2;
}
.presentacion {
    width: 100%;
    overflow-x: hidden;
}
.content {
    position: relative;
    margin:0;
    background-color: $p1;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
    left: 40px;
    padding-right: 40px;
    
    z-index: 1;
    
    
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
            font-size: $domine;
            
        }
        h1 {
            color: $a1;
            text-shadow: 3px 3px 3px black;
            font-size: $domine;
        }
    }
}
.iframe{
    border-radius: 15px;
}
@media (min-width: $xl) {
    .iframe{
        width: calc(($xxl - 40px)/$na);
        height: calc(($xxl - 40px)/$na/1.77);
        
        &.active{
            width: calc(($xxl - 200px)/$na);
            height: calc(($xxl - 200px)/$na/1.77);
        }
    }
}
@media (max-width: $xl) and (min-width: $lg) {
    .iframe{
        width: calc(($xl - 40px)/$na);
        height: calc((($xl - 40px)/$na)/1.77);
        
        &.active{
                width: calc(($xl - 200px)/$na);
                height: calc((($xl - 200px)/$na)/1.77);
        }   
    }
}
@media (max-width: $lg) and (min-width: $md) {
  .iframe{
        width: calc(($lg - 40px)/$na);
        height: calc(($lg - 40px)/$na/1.77);
        
    &.active{
        width: calc(($lg - 200px)/$na);
        height: calc(($lg - 200px)/$na/1.77);
    }
  }
}
@media (max-width: $md) and (min-width: $sm){
    .iframe{
        width: calc(($md - 40px)/$na);
        height: calc(($md - 40px)/$na/1.77);
        
        &.active{
            width: calc(($md - 200px)/$na);
            height: calc(($md - 200px)/$na/1.77);
        }
    }
}
@media (max-width: $sm) {
    .iframe{
        width: calc(($sm - 40px)/$na);
        height: calc(($sm - 40px)/$na/1.77);
    }
    .content{
        left: 0;
        padding-right: 0;
        top: 50px;
        &.active {
            left: 0;
            padding-right: 0;
            top: 190px;
        }
    }
}
@media only screen and (orientation: portrait) and (max-width: $sm) {
  #tetris {
    width: 100vw;
    margin-left: 0;
  }
}
</style>