<template>
  <div>
  <label for="name">Nombre:</label>
  <input id="name" type="text" v-model="state.name" @input="v$.name.$touch()">
  <span v-if="v$.name.$error">El nombre es requerido</span>
  <button v-show="!v$.name.$error" @click="save">Guardar</button>
  </div>
  </template>
  
  <script setup>
  import { useVuelidate } from '@vuelidate/core'
  import { required, helpers } from '@vuelidate/validators'
  import { reactive } from 'vue'
  
  // crear el objeto reactivo con la propiedad name
  const state = reactive({
  name: ''
  })
  
  // crear el objeto con las reglas de validación
  const alpha30 = helpers.regex(/^[a-zA-ZÀ-ÿ\s]{1,30}$/);
  const rules = {
  name: {
  required, alpha30
  }
  }
  const save = () => {alert(state.name)}
  // crear el objeto de validación
  const v$ = useVuelidate(rules, state)
  </script>