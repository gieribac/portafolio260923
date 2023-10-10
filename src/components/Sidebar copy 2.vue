<script setup lang="ts">
  import { route, RouterLink } from 'vue-router';
  import { ref, Ref, computed, onMounted, defineEmits} from 'vue';

  const emit = defineEmits(["toggle"]);
    let isActive: Ref<boolean> = ref(false);
    const toggleClass = ():void => {
        isActive.value = !isActive.value;
        emit("toggle",isActive.value);
  }


  onMounted(()=> {
    const nodo: object = document.querySelector('.router-link-active');
    const father: object = nodo.parentNode;
    const nodoid: string = nodo.id;
    const num: number = parseInt(nodoid.charAt(nodoid.length - 1));
    console.log(num)
    const nodolivPre = document.querySelector(`#liv${num}`);
    const nodolivPos = document.querySelector(`#liv${num+1}`);
    nodolivPre.style['border-bottom-right-radius'] = '15px';
    nodolivPos.style['border-top-right-radius'] = '15px';
  })

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
        <div id="liv1" class="liv"></div>
        <div class="cont-li"><RouterLink id="li1" class="li" :to="{name:'sobremi'}">Sobre mi</RouterLink></div>
        <div id="liv2" class="liv"></div>
        <div class="cont-li"><RouterLink id="li2" class="li" :to="{name:'misproy'}">Mis proyectos</RouterLink></div>
        <div id="liv3" class="liv"></div>
        <div class="cont-li"><RouterLink id="li3" class="li" :to="{name:'misproy'}">Hoja de vida</RouterLink></div>
        <div id="liv4" class="liv"></div>
        <div class="cont-li"><RouterLink id="li4" class="li" :to="{name:'misproy'}">Certificados</RouterLink></div>
        <div id="liv5" class="liv"></div>
        <div class="cont-li"><RouterLink id="li5" class="li" :to="{name:'landingpage'}">Regresar</RouterLink></div>
        <div id="liv6" class="liv"></div>
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
    background-color: $colorD;
    left: -160px;
    transition: all 200ms linear;
    margin-top: 0px;
    display: inline;
    font-family: Century Gothic,'Roboto', sans-serif;
    .toggle-btn {
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
      background-color: $colorD;
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      span {
        display: block;
        width: 40px;
        font-size: 30px;
        margin: 0px;
        padding: 0px;
        cursor: pointer;
        transition: all 500ms linear;
      }      
      a {
        display: absolute;
        left: 150px;
        top: 150px;
        background-color: $colorD;
        margin-left: 0px;
        padding:8px;
        z-index:2;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
        text-decoration: none;
        color: black;
        width: 90px;
        transition: all 200ms linear;
        &:hover {
          font-weight: bold;
          color: $colorB;
        }
      }
    }
  }
  #sidebar.active {
    left: 0px;
    width: 200px;
    background-color: $colorC;
  }
  #sidebar ul {
    align-items:center;
    display:flex;
    flex-direction: column;
    height: 100%;
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
    padding: 8px 10px; 
    background-color: $colorD;
    width: 100%;
  }
  .logo {
    border-radius: 15px;
    display: block;
    margin: 25px auto; 
    width: 100px;
    height: 110px;
    border-style: solid;
    border-color: $colorE;
    background-color: $colorE;
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
  .cont-li{
    height: 2em;
    display:flex;
    width:230px;
    justify-content:center;
    align-items:center;
    background-color: $colorD;
    position:relative;
    right: 15px;
   
  }
  .li {
  width: 170px;
  margin: 0px;
  padding: 8px;
  border-radius: 15px;
  color: black;
  text-decoration:none;  
  height: 2em;
  text-align:center;
  position:relative;  
  right: -30px;
    &:hover {
      font-weight: bold;
      color: $colorB;
    }
  }
  .liv{
    width: 200px;
    margin: 0px;
    padding: 8px;
    color: black;
    text-decoration:none;  
    background-color: $colorD;
    height: 1em;
  }
  #liv6 {
    height:100%;
  }
  .router-link-active {
    font-weight: bold;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    margin-left: 0px;
    background-color: $colorC;

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
    font-size: 22px;
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
      font-size:22px;
      &:hover {
        font-weight: bold;
        color: $colorB
      }
    }
  }
  
  .sidebar .toggle-btn span {
    display: inline-block;
    width: 50px;
    height: 50px;
    font-size: 35px;
    font-weight: bold;
    cursor: pointer;
    margin: 0px;
    padding:5px;
    cursor: pointer;
    margin-right: 10px;
    border: solid;
    border-color: $colorD;
  }
  .sidebar.active .toggle-btn span {
    transform-origin: center;
    transform: rotate(90deg);
    padding:5px;
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
  }
  
  .sidebar ul li {
    list-style: none;
    padding: 0;
  }
  .logo {    
    border-radius: 6px;
    display: block;
    margin-bottom: 1em;
    width: 110px;
    height: 132px;
    border-style: solid;
    border-color: $colorD;
    background-color: $colorD;
    transition: all 200ms linear;
    position: relative;
    right: 80px;
    top: 70px;
    
  }
  .sidebar ul li.actual {
    font-weight: bold;
  }
  .li {
    text-decoration: none;
    color: black;
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
    font-size: 25px;
    cursor: default;
    &:hover {
      color: black;
    }
  }
    

}
</style>