<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import { ref, Ref,onMounted, defineEmits} from 'vue';

  const emit = defineEmits(["toggle"]);
    let isActive: Ref<boolean> = ref(false);
    const toggleClass = ():void => {
        isActive.value = !isActive.value;
        emit("toggle",isActive.value);
  }
  
  // const elementosHijos = document.document.getElementsByClassName('router-link-active');
  // const elementoPadre = elementosHijos[0].parentNode;
  // elementoPadre.classList.add('active');

  
  

  
  

</script>
<template>
  <div :class="{'active': isActive}" class="sidebar">
    <div :class="{'active': isActive}" id="sidebar">
      <div @click="toggleClass" :class="{'active': isActive}" class="toggle-btn">
        <span>&#9776</span><div id="a"><RouterLink  :to="{name:'landingpage'}">Regresar</RouterLink></div> 
      </div>
      <ul>	
        <li class="li-logo" @click="toggleClass">
          <img src="/src/assets/logo.png" alt="Logo gio" class="logo">
        </li>
        <RouterLink class="li" :to="{name:'sobremi'}">Sobre mi</RouterLink>
        <RouterLink class="li" :to="{name:'misproy'}">Mis proyectos</RouterLink>
        <RouterLink class="li" :to="{name:'misproy'}">Hoja de vida</RouterLink>
        <RouterLink class="li" :to="{name:'misproy'}">Certificados</RouterLink>
        <RouterLink class="li" :to="{name:'landingpage'}">Regresar</RouterLink>
      </ul>
    </div>        
  </div>
</template>
<style lang="scss" scoped>
    * {
  margin: 0px;
  padding: 0px;
}
#sidebar {
  z-index:2;
}
  @media (min-width: $sm){
  #sidebar {
    position: fixed;
    width: 200px;
    height: 100%;
    background: $colorD;
    left: -160px;
    transition: all 250ms linear;
    margin-top: 0px;
    display: inline;
    font-family: Century Gothic,'Roboto', sans-serif;
    
  }
  #sidebar.active {
    left: 0px;
    width: 200px;
  }
  #sidebar ul {
    align-items:center;
    display:flex;
    flex-direction: column;
  }
  #sidebar.active ul {
    padding-right: 0px;
    transition: all 200ms linear;
  }
  #sidebar ul li {    
    list-style: none;   
    text-align: left;  
      
  }
  .li-logo {
    padding: 15px 10px; 
  }
  .logo {
    border-radius: 15px;
    display: block;
    margin: 25px auto; 
    width: 120px;
    height: 140px;
    border-style: solid;
    border-color: $colorE;
    background-color: $colorE;
  }
  #sidebar .toggle-btn {
    position: absolute;
    left: 160px;
    top: 0px;
    text-align: center;
    height: 40px;
    margin: 0px;
    padding: 0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    #a {
      display: absolute;
      left: 150px;
      top: 150px;
      background-color: $colorD;
      margin-left: 0px;
      padding:8px;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      z-index:2;
      a {
        text-decoration: none;
        color: black;
      }      
      width: 90px;
      &:hover {
        font-weight: bold;
        color: black;
      }
    }
  }
  .active > #a {
    display: none;
  }
  #sidebar .toggle-btn .active {
    position: absolute;
    left: 160px;
    top: 0px;
    cursor: pointer;
    width: 40px;
    margin: 0px;
    padding: 0px; 
  }
  #sidebar.active .toggle-btn span {
  transform: rotate(90deg);
  color: black;
  &:hover {
        color: black;
      }
  }
  #sidebar .toggle-btn span {
    display: block;
    width: 40px;
    font-size: 30px;

    margin: 0px;
    padding: 0px;
    cursor: pointer;
    transition: all 500ms linear;
  } 
  .li {
  width: 130px;
  margin-top: 15px;
  padding: 10px;
  border-radius: 15px;
  color: black;
  text-decoration:none;  
    &:hover {
      font-weight: bold;
      color: $colorB;
    }
  }
  .router-link-active {
    font-weight: bold;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    margin-left: 0px;
    background-color: $colorC;
    width: 170px;
    position:relative;
    right: -20px;
    &:hover {
      font-weight: bold;
      cursor: default;
      color: black;
    }
  }  
}
@media (max-width: $sm){ 
  .sidebar {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: min-content;
    background-color: $colorD;
    overflow-y: auto;
    font-size: 12px;
    overflow-y: hidden;
  }
  .sidebar .toggle-btn {
    position: relative;
    top: 0;
    left: 0;
    color: black;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    a {
      text-decoration: none;
      color: black;
      font-size:14px;
      &:hover {
        font-weight: bold;
        color: $colorB
      }
    }
  }
  
  .sidebar .toggle-btn span {
    display: inline-block;
    width: 40px;
    height: 40px;
    font-size: 20px;
    cursor: pointer;
    margin: 0px;
    padding:5px;
    cursor: pointer;
    transition: all 200ms linear;
    margin-right: 10px;
    border: solid;
    border-color: $colorD;
  }

  .sidebar.active .toggle-btn span {
    transform-origin: center;
    transform: rotate(90deg);
    padding:5px;
    transition: all 200ms linear;
  }


  .sidebar ul {
    display: none;
    
  }

  .sidebar.active ul{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 140px;
    transition: all 200ms linear;
  }
  
  .sidebar ul li {
    list-style: none;
    padding: 0;
  }
  .logo {    
    border-radius: 6px;
    display: block;
    margin-bottom: 1em;
    width: 100px;
    height: 120px;
    border-style: solid;
    border-color: $colorD;
    background-color: $colorD;
    transition: all 200ms linear;
    position: relative;
    right: 80px;
    top: 30px;
    
  }
  .sidebar ul li.actual {
    font-weight: bold;
  }
  .li {
    text-decoration: none;
    color: #000;
    position: relative;
    bottom: 85px;     
    left: 70px;
    &:hover {
      color: $colorB;
      font-weight: bold;
    }
  }
  .router-link-active {
    font-weight: bold;
    font-size: 16px;
    cursor: default;
  }

}
</style>