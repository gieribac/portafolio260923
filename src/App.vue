<!-- proyecto lista de compras  -->

<script lang="ts" setup>
   import {ref, Ref, computed} from 'vue';
   const name: string = "Lista de Compras";
      
interface Product {
   name: string;
   prince: number;
   amount: number;
 }
let listProducts = ref<Product[]> ([]);

let nombreP: Ref<string> = ref("");
let cantidadP: Ref<number> = ref(1);
let precioP: Ref<number> = ref(1);

 //methods
 const  add = () => {
   let value1: string = nombreP.value;
   let value2: number = cantidadP.value;
   let value3: number = precioP.value;
   if (value1) {   
      let producto: Product = {
         name: value1,
         prince: value2,
         amount: value3
      }
      listProducts.value.push(producto);
      nombreP.value = "";
      cantidadP.value = 1;
      precioP.value = 1;
   }
}
const totalizar = computed(() => {
   let total: number = 0;
   for (let p of listProducts.value) {
      total += p.amount*p.prince;
   }
   return total;
})
</script>
<template>
 <h1>{{name}}</h1>
 
 <input placeholder="Producto" type="text" v-model="nombreP" @keyup.enter="add">
 
 <button @click="add">Agregar</button>

 
<ul>
   <li><h3 class="prod">PRODUCTO</h3>
   <h3 class="cant">CANTIDAD</h3>
   <h3 class="val">VALOR UNITARIO</h3></li>
   <li v-for="e of listProducts" :key="e.name">
      <div class="prod">{{e.name}}: 
      </div>
      <div class="cant"><input placeholder="Cantidad" type="number" v-model="e.amount" @keyup.enter="add">
         <button @click="e.amount++">+</button>
         <button @click="e.amount = 1">Reset</button>
      </div>
      <div class="val">
         <input placeholder="Precio Unitario" type="text" v-model="e.prince" @keyup.enter="add">
            <button @click="e.prince++">+</button>
            <button @click="e.prince = 1">Reset</button>  
      </div>        
      
   </li>
</ul>
<h2>Total: {{totalizar}}</h2>
</template>

<style>
 h1 {
   color: blue; }

li {
   display: grid;
   grid-template-areas:
    "prod cant val";
  grid-template-columns: repeat(3, 1fr);
  /* column-gap: 20px; */
  padding: 1ch;
}

.prod {
   grid-area: prod;
}
.cant {
   grid-area: cant;
}
.val {
   grid-area: val;
}


</style>
