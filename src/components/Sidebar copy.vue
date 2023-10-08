<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, Ref, defineEmits} from 'vue';
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
        <span>&#9776</span><RouterLink  class="intro" :to="{name:'landingpage'}">Regresar</RouterLink>
      </div>
      <ul>	
        <li>
          <img src="src/assets/logo.png" alt="Logo gio" class="logo">
        </li>
        <li class="actual">SOBRE MI</li>
        <li><a href="../../proy/html/proy.html">MIS PROYECTOS</a></li>
        <li><a href="../../cv/html/cv.html">HOJA DE VIDA</a></li>
        <li><a href="../../cert/html/cert.html">HOJA DE VIDA</a></li>
        <li><RouterLink class="intro" :to="{name:'landingpage'}">Regresar</RouterLink></li>
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
  position: fixed;
  width: 200px;
  height: 100%;
  background: $colorC;
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

.actual{
  color:#fff
}
#sidebar ul {
  padding-right: 30px;
}
#sidebar.active ul {
  padding-right: 0px;
}
#sidebar ul li {
  
  list-style: none;
  padding: 15px 10px;
  
  text-align: center;
}
#sidebar ul li a{ color: #272643}
.logo {
  border-radius: 15px;
  display: block;
  margin: 25px auto; 
  width: 120px;
  height: 140px;
  border-style: solid;
  border-color: $colorD;
  background-color: $colorD;
}

#sidebar .toggle-btn {
  position: absolute;
  left: 160px;
  top: 0px;
  text-align: center;
  height: 40px;
  margin: 0px;
  padding: 0px;
  
  
}
#sidebar .toggle-btn.active{
  position: absolute;
  left: 160px;
  top: 0px;
  cursor: pointer;
  width: 40px;
  margin: 0px;
  padding: 0px
} 
#sidebar.active .toggle-btn span {
transform: rotate(90deg);
color: $colorB;
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

#sidebar ul li.actual{
  color:#fff
}

#sidebar ul li a:hover {
  background-color: #bae8e8;
  color:#464583 ;
  border-radius: 5px;
  width: 100%;
  font-size: 110%;
} 

@media (max-width: $sm){
  // .sidebar{
  //   background-color: red;
  //   width: 100vw;
  // }
    #sidebar {
    position: fixed;
    width: 100vw;
    margin:0;
    padding:0;
    background: $colorC;
    display:block;
    left:0;

    transition: all 250ms linear;
    margin-top: 0px;
    display: inline;
    transition: all 500ms linear;
  }

  #sidebar.active {
    position: fixed;
    width: 100vw;
    margin:0;
    padding:0;
    background: $colorC;
    display:block;
    left:0;
  }
  #sidebar > ul{
    display:none;
  }
  #sidebar.active > ul{
    display:block;
    transition: all 500ms linear;
  }
    #sidebar .toggle-btn {
    position: relative;
    transition: all 500ms linear;
    text-align: center;
    
  }
  #sidebar .toggle-btn.active{
    // position: relative;

    // cursor: pointer;
    
  }
  #sidebar .toggle-btn > a{
      display:block
    }
  #sidebar .toggle-btn.active > a{
      display:none
    }
}
</style>