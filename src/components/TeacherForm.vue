<script setup lang="ts">
   import {ref, Ref} from 'vue';
   interface Teacher {
      teacherName: string,
      surname: string,
      dni: string;
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
   
</script>
<template>
   <div>
      <h3>Agregar profesor</h3>
      <div><label>Nombres: </label><input type="text" v-model="teacher.teacherName"></div>
      <div><label>Apellidos: </label><input type="text" v-model="teacher.surname"></div>
      <div><label>DNI/No Doc: </label><input type="text" v-model="teacher.dni"></div>
      <div><label>Materias: </label><input type="text" v-model="subject"><button @click="addTeacherSubject()">Agregar</button></div>
      <div><ul>
         <li v-for="e in teacher.subjects" :key="e">{{e}}</li>
      </ul></div>
      <input type="checkbox" v-model="teacher.doc" >Documentación entregada
      <button @click="addTeacher()">Agregar</button>
   </div>
   <div><h3>Lista de profesores</h3>
   <ul>
      <li v-for="p in listTeachers" :key="p.dni">{{p}}</li>
   </ul></div>
</template>
<style scoped>

</style>