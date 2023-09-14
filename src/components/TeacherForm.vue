<script setup lang="ts">
   import {ref, Ref, computed, reactive} from 'vue';
   import { useVuelidate } from '@vuelidate/core'
   import { required, helpers } from '@vuelidate/validators'
   interface Teacher {
      teacherName: string,
      surname: string,
      dni: string,
      subjects: Array<string>,
      doc: boolean
   }
   let teacher: Ref<Teacher> = ref({
      teacherName:'',
      surname:'',
      dni:'',
      subjects:[],
      doc:false
   })
   let listTeachers: Ref<Array<Teacher>> = ref([]);
   let subject: Ref<string> = ref('');
   const addTeacherSubject = (): void => {
      teacher.value.subjects.push(subject.value);
      subject.value="";
   }
   const addTeacher = (): void => {
      const teacherNR = { //objeto no reactivo para asegurar persistencia
         teacherName:teacher.value.teacherName,
         surname:teacher.value.surname,
         dni:teacher.value.dni,
         subjects:teacher.value.subjects,
         doc:teacher.value.doc
      }
      listTeachers.value.push(teacherNR);
      teacher.value.teacherName='';
      teacher.value.surname='';
      teacher.value.dni='';
      teacher.value.subjects=[];
      teacher.value.doc=false;
   }   

   //validaciones
   const alpha30: string = helpers.regex(/^[a-zA-ZÀ-ÿ\s]{1,30}$/);//hasta 30 letras o espacios
   const numeric6_10: string = helpers.regex(/^\d{6,10}$/);//de 6 a 10 digitos
   // const state = reactive ({
   //    teacherName:teacher.value.teacherName,
   //    surname:teacher.value.surname,
   //    dni:teacher.value.dni
   // })
   const teacherRules = {
      teacherName:{alpha30},
      surname:{alpha30},
      dni:{numeric6_10}
   }
   const v$ = useVuelidate(teacherRules, teacher);
   let arra: Ref<boolean[]> = ref([]);
   const validar = computed(() => {
      let list: boolean[]  = [];
      list.push(v$.value.teacherName.$error)
      list.push(v$.value.surname.$error);
      list.push(v$.value.dni.$error);
      list.push(teacher.value.teacherName.length < 1);
      list.push(teacher.value.surname.length < 1);
      list.push(teacher.value.dni.length < 1);
      console.log(list)
      return list.includes(true);
   })
   
   
</script>
<template>
   <div>
      <h3>Agregar profesor</h3>
      <div><label>Nombres: </label><input type="text" v-model="teacher.teacherName" @input="v$.teacherName.$touch"></div>
      <div><label>Apellidos: </label><input type="text" v-model="teacher.surname" @input="v$.surname.$touch()"></div>
      <div><label>DNI/No Doc: </label><input type="text" v-model="teacher.dni" @input="v$.dni.$touch()"></div>
      <div><label>Materias: </label><input type="text" v-model="subject"><button @click="addTeacherSubject()">Agregar</button></div>
      <div><ul>
         <li v-for="e in teacher.subjects" :key="e">{{e}}</li>
      </ul></div>
      <input type="checkbox" v-model="teacher.doc" >Documentación entregada
      <button :disabled="validar" @click="addTeacher()">Agregar</button>
   </div>
   <div><h3>Lista de profesores</h3>
   <ul>
      <li v-for="p in listTeachers" :key="p.dni">{{p}}</li>
   </ul></div>
   <p>{{v$.teacherName.$error}}</p>
   <p>{{v$.surname.$error}}</p>
   <p>{{v$.dni.$error}}</p>

</template>
<style scoped>

</style>