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
  
  <div  class="misproy">
   
   <Sidebar @toggle="active" id="sidebar"/>  
   <div class="principal contenido" :class="{'active': isActive}">
      <h1>Mis Proyectos</h1>
      <a class="principal_sub" href="https://github.com/gieribac" target="_blank">
        <br> Repositorio de Proyectos GitHub
        </a>
      <p>Esta sección muestra brevemente algunos proyectos y ejercicios de programación y desarrollo sobre los que he trabajado.
      </p>
      
      <p>Invito a visitar mi repositorio de github donde estos se incluyen, representando mi experiencia en el tema.
        
      </p>
      <div class="exproy"> 
        <h2>Aplicativo web CMR</h2>
        <p>A continuación se incluyen la vista de inicio de sesión y algunos de los sitios del perfil de administrador, dorector técnico y técnico coordinador</p>
        <div class="imagen">
        <img src="/src/assets/misproy/vtek/Administrador_CRM-40.jpg" alt="imagen">
        <br>
        <img src="/src/assets/misproy/vtek/Administrador_CRM-41.jpg" alt="imagen">
        <br>
        <img src="/src/assets/misproy/vtek/Administrador_CRM-44.jpg" alt="imagen">
        <br>
        <img src="/src/assets/misproy/vtek/director_tecnico_CRM-26.jpg" alt="imagen">
        <br>
        <img src="/src/assets/misproy/vtek/Tecnico_coordinador_CRM-17.jpg" alt="imagen">
        </div>
        <p>Este sitio web es una SPA con opciones como creación de varios usuarios con diferentes roles, adminsitración de información de clientes y generación reportes en PDF. Tecnologias utilizadas: Javascript en el fronted, backend Firestore</p>
        <a href="https://github.com/gieribac/proyecto_vtek.git" target="_blank">
        Repositorio proyecto CMR Vtek
        </a><br>
      </div>
        <div class="exproy"> 
        <h2>Landing page videos de publicidad</h2>
        <p>Realizada para exponer videos cortos publicitarios, para acceder hay que conocer el numero del telefono del candidato</p>
        <div class="imagen">
        <img src="/src/assets/misproy/lagencambio.jpg" alt="imagen">
        <br>
        </div>
        <p>Landing page publicitaria simple con fuentes personalizadas Tecnologias utilizadas: Javascript en el fronted, backend Firestore</p>
        <a href="https://github.com/gieribac/landingpage_laGenDelCambio.git" target="_blank">
        Repositorio landing page
        </a><br>
         
      </div>
      <div class="exproy"> 
        <h2>Sitio Web Veterinaria</h2>
        <div class="imagen">
        <img src="/src/assets/misproy/DPFronted_.jpg" alt="imagen">
        <br>
        <img src="/src/assets/misproy/DPFronted.jpg" alt="imagen">
        <br>
        <img src="/src/assets/misproy/DPB.jpg" alt="imagen">
        </div>
        <p>Aplicación web SPA para una veterinaria, incluye fronted en angular, api en spring boot y base de datos mongoDB</p>
        <a href="https://github.com/gieribac/crud_springboot.git" target="_blank">
        API REST
        </a><br>
        <a href="https://github.com/gieribac/proyect_angular_veterinaria.git" target="_blank">
          Fronted
          </a>
         
      </div>
      <div class="exproy"> 
        <h2>Pagina web Segunda Vuelta</h2>
        <div class="imagen">
        <img src="/src/assets/misproy/sevu.jpg" alt="imagen">
        </div>
        <p>Pagina web Html-Css 
        <a href="https://github.com/gieribac/Segunda_Vueltav1.git" target="_blank">
        <br> Repositorio Pagina Web
        </a>
        </p> 
      </div>
      <div class="exproy"> 
        <h2>Memofichas</h2>
        <div class="imagen">
        <img src="/src/assets/misproy/py1.jpg" alt="imagen">
        </div>
        <p>Aplicación web sencilla para configuración de 5 memofichas, basada en Html, Css y JavaScript.
        <a href="https://github.com/gieribac/memofichas/tree/master" target="_blank">
        <br> Repositorio Memofichas
        </a>
        </p> 
      </div>
      <div class="exproy"> 
        <h2>Biblioteca_Libros</h2>
        <div class="imagen">
        <img src="/src/assets/misproy/pjs1.jpg" alt="imagen">
        </div>
        <p>Practica de Js utilizando programación funcional y expresiones regulares
        <a href="https://github.com/gieribac/biblioteca01.git" target="_blank">
        <br> Practica JavaScript
        </a>
        </p> 
      </div>
      <div class="exproy"> 
        <h2>Practicas de Interfaz Grafica de Java</h2>
        <div class="imagen">
        <img src="/src/assets/misproy/calc_java.jpg" alt="imagen">
        <br>
        <img src="/src/assets/misproy/cStr.jpg" alt="imagen">
        </div>
        <p>En primer lugar se muestra una calculadora y en segundo lugar una utilidad que sirve para convertir strings en un formato personalizado, util para los titulos de las normas apa.
        <a href="https://github.com/gieribac/practicas_IntG_Java.git" target="_blank">
        <br> Practicas Interfaz Grafica Java
        </a>
        </p> 
      </div>
      <div class="exproy"> 
        <h2>Practica de Python</h2>
        <div class="imagen">
        <img src="/src/assets/misproy/pPhy.jpg" alt="imagen">
        </div>
        <p>Practica algoritmica con phyton donde se pide optimización
        <a href="https://github.com/gieribac/Ejercicio_B_Phyton.git" target="_blank">
        <br> Practica Python
        </a>
        </p> 
      </div>
    </div>
  </div>

</template>
<style scoped lang="scss">
.misproy {
    width: 100%;
    overflow-x: hidden;
}
.contenido {  
    position: relative;
    background-color: $p1;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
    max-height: 100%;
    z-index: 1;
    left: 40px;
    padding-right: 40px;
    text-align: center;
    transition: left 250ms ease;
    &.active {
      left: 200px;
      transition: left 250ms ease;
      padding-right: 200px;
    }
}

.principal img {  
    border: $a2 2px solid;
    max-width: 90%;
    border-radius: 15px;
}

.principal h1{
    text-align:center;
    padding: 0.4em 7%;
    color: $a1;
    text-shadow: 3px 3px 3px black;
}

.principal_sub {
    padding: 0;
    margin: 0;
    border: 0;
    display:block;
    text-align: center;
}

.principal h2{
    text-align:center;
    padding: 0.3em 2%;
    color: $a2;
}

.principal p{
  padding: 0.3em  5%;
  color: $s2;
}

.principal a {
  padding: 0.3em  5%;
  color: $a2;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: $a1;
  }
}

.principal .exproy{
  position: relative;
  top: 0;
	bottom: 0;
	left: 0;
	right: 0;
  text-align: center;
  padding: 5%;
}

@media (max-width: $sm) {//576px;
  img {
    max-width: 90%;
    max-height: 90%;
  }
  .contenido {
    left: 0;
    padding-right: 0;
    top: 45px;
    &.active {
    left: 0;
    padding-right: 0;
    top: 190px;
    }
  }
}
</style>