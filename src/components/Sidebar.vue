<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import { ref, Ref, computed, onMounted, defineEmits} from 'vue';

  const emit = defineEmits(["toggle"]);
    let isActive: Ref<boolean> = ref(false);
    const toggleClass = ():void => {
        isActive.value = !isActive.value;
        emit("toggle",isActive.value);
        console.log("click")
  }
</script>
<template>
  <div :class="{'active': isActive}" class="sidebar">
    <div :class="{'active': isActive}" id="sidebar">
      <div @click="toggleClass" :class="{'active': isActive}" class="toggle-btn">
        <span>&#9776</span><div id="a"><RouterLink  :to="{name:'landingpage'}"><p><span class="material-symbols-outlined">home</span>Regresar</p></RouterLink></div> 
      </div>
      <ul>	
        <li class="li-logo" @click="toggleClass">
          <img src="/src/assets/logo.png" alt="Logo gio" class="logo">
        </li>        
          <div class="cont-li">
            <RouterLink class="li" :to="{name:'presentacion'}">
              <p><span class="material-symbols-outlined">play_lesson</span>Presentación</p>
            </RouterLink></div>        
        <div class="cont-li">
          <RouterLink class="li" :to="{name:'sobremi'}">
            <p><span data-v-7d622f5c="" class="material-symbols-outlined">badge</span>Sobre mi</p>
          </RouterLink></div>        
        <div class="cont-li">
          <RouterLink class="li" :to="{name:'misproy'}">
            <p><span class="material-symbols-outlined">folder_open</span>Mis proyectos</p>
          </RouterLink></div>        
        <div class="cont-li">
          <RouterLink class="li" :to="{name:'cert'}">
            <p><span class="material-symbols-outlined">developer_guide</span>Certificados</p>
          </RouterLink></div>        
        <div class="cont-li">
          <RouterLink class="li" :to="{name:'landingpage'}">
            <p><span class="material-symbols-outlined">home</span>Regresar</p>
          </RouterLink></div>        
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
p{
  display: flex;
  align-items: center;
      
}
#sidebar.active .toggle-btn span {
transform: rotate(90deg);
color: black;
&:hover {
      color: black;
    }
}
@media (min-width: $sm){
  #sidebar {
    position: fixed;
    width: 200px;
    height: 100%;
    background-color: $colorC;
    left: -160px;
    transition: all 200ms linear;
    margin-top: 0px;
    display: inline;
    font-family: $domine;
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
    position: relative;
    right: 30px;
    display:none;
  }
  #sidebar.active ul {
    padding-right: 0px;
    transition: all 200ms linear;
    display:inline-block;
  }
  #sidebar ul li {    
    text-align: left;        
  }
  .li-logo {
    padding: 8px 10px; 
    position: relative;
    width: 100%;
    left: 30px;
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
  #a {
    width: 100%;
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
    width:200px;
    justify-content:center;
    align-items:center;
    background-color: $colorC;
    position:relative;
    right: 15px;
  }
  .active .cont-li{
    height: 2em;
    display:flex;
    width:200px;
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
    text-align:left;
    position:relative;  
    top: -13x;
    right: -60px;
    
    &:hover {
        font-weight: bold;
        color: $colorB;
    }
  }
  
  #sidebar .active > ul > .cont-li 
  .router-link-active {
    font-weight: bold;
    margin-left: 0px;
    background-color: $colorC;
    transition: all 200ms linear;    
    &::before {
      content: "";
      background-color: $colorD;
      border-bottom-right-radius: 15px;
      height: 100vh;
      position:absolute; 
      bottom:100%; 
      z-index:-1;
      width: 200px;
      margin: 0px;
      left:-30px;
    }
    &::after {
      content: "";
      background-color: $colorD;
      border-top-right-radius: 15px;
      height: 100vh;
      position:absolute; 
      top:100%; 
      width: 200px;
      margin: 0px;
      left:-30px;
    }
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

  .sidebar .toggle-btn > span {
    position: relative;
    bottom: 5px;
  }
  .sidebar .toggle-btn.active > span {
    position: relative;
    bottom: -2px;
  }
  .sidebar.active .toggle-btn  p {
    display:none;
  }
  .sidebar ul {
    transition: all 200ms linear;
    display: none;
    > .cont-li >.li > p{
      display: flex;
      align-items: center;
      height: 1.3em;
    }
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