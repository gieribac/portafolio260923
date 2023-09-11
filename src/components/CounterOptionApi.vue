<script lang="ts">
import { defineComponent } from 'vue';
export default  defineComponent ({
    name: 'CounterOptionApi',
    components: {},//si se necesitara importar otros componentes como se hizo en 
    // PostContainer para llamar a PostBtn, se indican aqui (hay que importar previamente) 
    data(){
        let counter:number = 0;
        return {counter}
    },
    methods: {
        addCounter () {
            this.counter++;
        },
    },
    // props:{},   si aplica
    // computed:{}, si aplica
})
</script>
<template>
    <h2>Contador Option Api</h2>
    <h3>{{counter}}</h3>
    <button @click="addCounter">Incrementar</button>
</template>
<style>
h2 {
    Color:red;
}
</style>