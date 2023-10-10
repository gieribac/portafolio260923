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
  <div  class="misproy">
   
   <Sidebar @toggle="active" id="sidebar"/>  
   <div class="content" :class="{'active': isActive}">
  </div>
  </div>
</template>
<style scoped lang="scss">

a {
  display: inline-block;
  padding: 10px 20px;
  background-color: $colorC;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
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
}

</style>