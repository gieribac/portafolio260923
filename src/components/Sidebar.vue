<script setup lang="ts">
import { RouterLink } from 'vue-router';

             
</script>
<template>
    <div class="sidebar">
        <h1>Sidebar</h1>
        <RouterLink class="intro" :to="{name:'landingpage'}">Regresar</RouterLink>
    </div>
</template>
<style scoped>
    .sidebar{
        border-style: solid;
        border-color: green;
    }
    .intro{

background-color: #272643;
color:#bae8e8;
padding: 0.5em 1em;
border-radius: 5px;
width: auto;
text-align: center;
grid-row: 9/10;
grid-column: 1/3;
margin: 2% auto;

}

.intro:hover {
background-color: #2c698d;
color: #272643;
padding: 0.5em 1em;
border-radius: 5px;
width: auto;
font-size: 110%;
margin:  2% auto;
grid-row: 9/10;
grid-column: 1/3;
width: auto;
}

</style>