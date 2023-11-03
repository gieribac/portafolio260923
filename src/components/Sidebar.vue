<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import { ref, Ref, computed, onMounted, defineEmits} from 'vue';

  const emit = defineEmits(["toggle"]);
    let isActive: Ref<boolean> = ref(false);
    const toggleClass = ():void => {
        isActive.value = !isActive.value;
        emit("toggle",isActive.value);
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
p {
  display: flex;
  align-items: center;
  color: $p1;
  height: 100%;
}
.router-link-exact-active{
  cursor: default;
  p{
    color: $p2;
  }
} 
#sidebar.active .toggle-btn span {
  transform: rotate(90deg);
  color: $p1;
  font-weight: bold;
  right: 5px;
  cursor: pointer;
} 
#sidebar .toggle-btn span {
    cursor: pointer;
}
.logo {

  border-radius: 15px;
  border-style: solid;
    border-color: $colorE;
    background-color: $colorE;
}
@media (min-width: $sm) {
  #sidebar {
    position: fixed;
    width: 200px;
    height: 100%;
    background-color: $p1;
    left: -160px;
    margin-top: 0;
    display: inline;
    font-family: $domine;
  }

  #sidebar.active {
    left: 0;
    width: 200px;
    background-color: $p1;
    .toggle-btn {
      right: 30px;
    }
  }

  #sidebar .toggle-btn {
    position: absolute;
    left: 152px;
    top: 0;
    text-align: center;
    height: 40px;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: $p2;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    padding: 0 10px;
  }

  #sidebar .toggle-btn span {
    display: block;
    width: 40px;
    font-size: 30px;
    margin: 0;
    padding: 0;
    transition: all 500ms linear;
    position: relative;
    z-index: 2;
  }

  #sidebar .toggle-btn a {
    display: relative;
    left: 160px;
    top: 150px;
    margin-left: 0;
    text-align: right;
    padding: 8px;
    z-index: 2;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    text-decoration: none;
    width: 90px;
    transition: all 200ms linear;
  }

  #sidebar ul {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    right: 30px;
    display: none;
  }

  #sidebar.active ul {
    padding-right: 0;
    transition: all 200ms linear;
    display: inline-block;
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
    display: block;
    margin: 25px auto;
    width: 100px;
    height: 110px;
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
    top: 0;
    width: 40px;
    margin: 0;
    padding: 0;
  }

  .cont-li {
    height: 2em;
    display: flex;
    width: 200px;
    justify-content: center;
    align-items: center;
    background-color: $p1;
    position: relative;
    right: 15px;
  }

  .active .cont-li {
    height: 2em;
    display: flex;
    width: 200px;
    justify-content: center;
    align-items: center;
    background-color: $p2;
    position: relative;
    right: 15px;
  }

  .li {
    width: 170px;
    margin: 0;
    padding: 8px;
    border-radius: 15px;
    text-decoration: none;
    height: 2em;
    text-align: left;
    position: relative;
    top: -13x;
    right: -60px;
  }

  .li:hover {
    font-weight: bold;
    color: $colorB;
  }

  #sidebar .active > ul > .cont-li .router-link-active {
    font-weight: bold;
    margin-left: 0;
    background-color: $p1;
    transition: all 200ms linear;
  }

  #sidebar .active > ul > .cont-li .router-link-active::before,
  #sidebar .active > ul > .cont-li .router-link-active::after {
    content: "";
    background-color: $p2;
    height: 100vh;
    position: absolute;
    width: 200px;
    margin: 0;
    left: -30px;
  }

  #sidebar .active > ul > .cont-li .router-link-active::before {
    border-bottom-right-radius: 15px;
    bottom: 100%;
    z-index: -1;
  }

  #sidebar .active > ul > .cont-li .router-link-active::after {
    border-top-right-radius: 15px;
    top: 100%;
  }
}
@media (max-width: $sm){ 
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: min-content;
    background-color: $p2;
    overflow-y: auto;
    font-size: 22px;
    overflow-y: hidden;
  }
  .sidebar .toggle-btn {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    a {
      text-decoration: none;
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
    margin: 0px;
    padding:5px;
    margin-right: 10px;
    border: solid;
    border-color: $p2;
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
    > .cont-li >.li > p {
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
    display: block;
    margin-bottom: 1em;
    width: 100px;
    height: 120px;
    transition: all 200ms linear;
    position: relative;
    right: 80px;
    top: 60px;  
  }
  .sidebar ul li.actual {
    font-weight: bold;
  }
  .li {
    text-decoration: none;
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
    p {
      color: $p1;
    }
    cursor: default;
  }
  .cont-li{
    position: relative;
    bottom: 15%;
    right: -22%;
    transform: translate(-50%)

  }
}

</style>