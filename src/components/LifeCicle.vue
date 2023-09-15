<script setup lang="ts">
    //https://vuejs.org/api/composition-api-lifecycle.html
    import {onMounted, onUpdated } from 'vue';

    //onMounted    
    onMounted(() => {
        console.log("mounted")
    })

    //onUpdated   
    onUpdated(() => {
        console.log("mounted")
    })

</script>
<template>
    <h1></h1>
    <h2></h2>

</template>
<style>

</style>