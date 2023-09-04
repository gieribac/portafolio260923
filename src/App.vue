<script lang="ts" setup>
   import {ref, Ref, computed} from 'vue';
   const name: string = "Vue dinámico";
   let counter = ref(0);
   let list = ref<number[]> ([]);

 //methods
const increment = () => counter.value++;
const decrement = () => counter.value--;
const reset = () => counter.value = 0;
const pushear = () => {   
      list.value.push(counter.value);
}
const desactivar = computed(() => {
   return list.value.includes(counter.value)
})

const classCounter: Ref<string> = computed(() => {
   if (counter.value === 0) {
      return "zero";
   } else if (counter.value > 0) {
      return "positive";
   } else {return "negative"}
})
</script>

<template>
 <h1>Reactividad</h1>
 <h2 :class="classCounter">{{counter}}</h2>
 <button @click="increment">Aumentar</button>
 <button @click="decrement">Disminuir</button>
 <button @click="reset">Reiniciar</button>
 <button :disabled="desactivar" @click="pushear">Agregar</button>
 <ul>
    <li v-for = "n in list" :key="n">{{n}}</li>
    
 </ul>
</template>

<style>
 h1 {
   color: blue; }
 .zero{
   color: yellow; }
 .positive {
   color: green; }
 .negative {
   color: red; }

</style>
