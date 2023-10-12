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
  <div  class="mihv">
   
   <Sidebar @toggle="active" id="sidebar"/>  
   <div class="content" :class="{'active': isActive}">
            <h1>Sobre mi</h1>
          <p>Por medio del presente portafolio, no solo expongo mis conocimientos, competencias, experiencias y expectativas, sino que además pretendo organizar las diferentes prácticas y proyectos que han marcado mi desarrollo profesional en el área del desarrollo web y el manejo de datos</p>
          <h2>Perfil</h2>
          <p>Manifiesto también mi interés ocupacional en el área, mi disposición para el aprendizaje, el trabajo en equipo, la asertividad, el compromiso y el mejoramiento continuo siempre tan necesario.<br>
          Manifiesto mi compromiso profesional y mis principios éticos a travez de mi matricula profesional con tarjeta copnia</p>
          <h2>Competencias de programación y desarrollo web</h2>
          <p>A contuniación menciono algunos de los lenguajes de programación y tecnologias de desarrollo web que he practicado:  </p>
          <ul>
            <li>DevC: C++</li>
            <li>VSCode: HTML, CSS, JavaScript, Phyton</li>
            <li>CCS C Compiler: C (microcontroladores PIC)</li>
            <li>Matlab y Simulink	Texnicenter: LaTeX</li>
            <li>Netbeans: Java, Spring-boot</li>
            <li>Git y Github</li>
            <li>Boostrap</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Angular</li>
            <li>Vue.js</li>
            <li>NodeJS</li>
            <li>SCRUM</li>
          </ul>
          <p>En la sección "mis proyectos" del presente portafolio se pueden encontrar algunos de mis trabajos más destacados. Sin embargo, también cuento con algunas prácticas en el área del manejo de datos y DevOps en la plataforma de Google Cloud SkillsBoost, las cuales pueden verificarse a continuación: 
          </p><a href="https://www.cloudskillsboost.google/public_profiles/a122512e-803a-4141-9549-be3b8f5e43be">ver insignias de google</a>
          <p>
            Mencionando mi experiencia laboral, el último proyecto remunerado en el cual he colaborado se trata de un aplicativo web SPA CRM para el seguimiento de productos y clientes para el grupo Vtek. En él, se utilizó principalmente desarrollo en HTML, CSS, JavaScript con uso de backend y base de datos Firestore, asumiendo el rol de programador backend y arquitecto en la interacción con el backend y las animaciones del frontend
          </p>
          <p>
          Actualmente me encuentro desarrollando mi tesis de grado de ingeniería electrónica, enfocada en este campo. En ella, debo desarrollar un prototipo de software web donde se presenta un dashboard especialmente diseñado para mostrar unos KPI derivados de una colección de datos organizada mediante Power BI.
          </p>
          <p>
          Mi portafolio web puede visitarse en el siguiente enlace, donde se encuentran otros enlaces útiles e información, como algunos de mis certificados.
          </p>

           <a href="https://gieribac.github.io/portafolio_hv/index.html">Enlace de repositios GitHub</a>

          <p>Este portafolio web constituye en si mismo una practiva del framework Vue.js versión 3 con typescript y scss, a continuación el  repositorio de codigo fuente puede ser consultado

          </p>

    
  </div>
  </div>
</template>
<style scoped lang="scss">
.mihv{
  background-color: $colorC;
  width: 100%;
  overflow-x: hidden;
  display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
}

.content {  
    position: relative;
    padding:0;
    margin:0;
    background-color: $colorC;

    left: 40px;
    padding-right: 40px;
    transition: all 250ms linear;
    height: 100vh;
    z-index: 1;
    font-size: $domine;
  
    h1 {
            color: black;
            text-shadow: 2px 2px 4px $colorE;
            padding: 1em 0;
            text-align: center;
            
        }
    h2 {
            color: $colorB;
            font-weight: bold;;
            padding: 0.6em 0;
            text-align: left;

    }
    p {
      padding: 0.4em 0;
    }
    a{
      padding: 0.3em  5%;
      color: $colorB;
      font-weight: bold;
      text-align: left;
      margin-left: 0;
      text-decoration: none;
      &:hover {
        color: $colorD;
      }
    }
    ul {
      padding: 0.15em  0% 0% 2em;

      
    }

    &.active {
        left: 200px;
        padding-right: 200px;
    }
}


@media (min-width: $xl) {
    .content {
        width: calc(($xxl - 40px)/$na);
        transition: all 200ms linear;
        &.active{
            width: calc(($xxl - 200px)/$na2);
        }
    }
}
@media (max-width: $xl) and (min-width: $lg) {//1200 - $lg: 992px;
    .content {
        width: calc(($xl - 40px)/$na);
        transition: all 200ms linear;
        &.active{
                width: calc(($xl - 200px)/$na2);
        }   
    }
}
@media (max-width: $lg) and (min-width: $md) {//$md: 768px;
  .content {
        width: calc(($lg - 40px)/$na);
        transition: all 200ms linear;
    &.active{
        width: calc(($lg - 200px)/$na2);
    }
  }
}
@media (max-width: $md) and (min-width: $sm){//$sm: 576px;$md: 768px;
    .content {
        width: calc(($sm - 40px));
        transition: all 200ms linear;
        &.active{
            width: calc(($sm - 100px));
        }
    }
}
@media (max-width: $sm) {//576px;
    
    .content{
        width: calc(($sm - 100px)/$na);
        left: 0;
        padding-right: 0;
        &.active {
        left: 0;
        padding-right: 0;
        width: calc(($sm - 300px));
        }
    }
}
</style>