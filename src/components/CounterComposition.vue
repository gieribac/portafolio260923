<script setup lang="ts">
    import { ref, Ref } from 'vue';
    let counter: Ref<number> = ref(0);
    
const addCounter = ():void => {
    counter.value++
}          
</script>
<template>
    <h1></h1>
    <h2></h2>

</template>
<style>

</style>