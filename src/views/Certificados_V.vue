<script setup lang="ts">
 import Sidebar from '../components/Sidebar.vue';
 import {plusSlides} from '../cod/slider.ts';
 import {currentSlide} from '../cod/slider.ts'; 
 import {ref, Ref, onMounted} from 'vue';
 
  let isActive: Ref<boolean> = ref(false);
  const active =(m:boolean):void => {
      isActive.value = m;
  }
  const toggleClass = ():void => {
          isActive.value = !isActive.value;
  }
  onMounted(()=>{
    currentSlide(1,1);
    currentSlide(1,0);
  })  

</script>
<template>
  <div  class="certs">
   
   <Sidebar @toggle="active" id="sidebar"/>  
   <div class="principal contenido" :class="{'active': isActive}">
			 <nav class="nbar">
				 <ul>
					<li><a href="#pyd">Programación y Desarrollo</a></li>
					<li><a href="#otros">Otros</a></li>
				</ul>
			</nav>
			<h1 class="title_">Certificados</h1>

			<p id="pyd">Programación y Desarrollo</p><br>
			<div class="slideshow-container">
			  <div class="mySlides1">
				<div class="numbertext">1 / 7</div>
        <img src="/src/assets/certs/java_int_grafica.jpg" style="width:100%">
			  </div>
			
			  <div class="mySlides1">
				<div class="numbertext">2 / 7</div>
				<img src="/src/assets/certs/calidadDS.jpg" style="width:100%">
			  </div>
			
			  <div class="mySlides1">
				<div class="numbertext">3 / 7</div>
				<img src="/src/assets/certs/tecnicoLabDMinTic.jpg" style="width:100%">
			  </div>

			  <div class="mySlides1">
				<div class="numbertext">4 / 7</div>
				<img src="/src/assets/certs/cert_uj.jpg" style="width:100%">
			  </div>

			  <div class="mySlides1">
				<div class="numbertext">5 / 7</div>
				<img src="/src/assets/certs/cert_node.jpg" style="width:100%">
			  </div>

			  <div class="mySlides1">
				<div class="numbertext">6 / 7</div>
				<img src="/src/assets/certs/sem_rasperry_p.jpg" style="width:100%">
			  </div>

			  <div class="mySlides1">
				<div class="numbertext">7 / 7</div>
				<img src="/src/assets/certs/plc.jpg" style="width:100%">
			  </div>
			
			  <a class="prev" @click="plusSlides(-1, 0)">&#10094;</a>
			  <a class="next" @click="plusSlides(1, 0)">&#10095;</a>
			  <br>
			  <div style="text-align:center">
				<span class="dot" @click="currentSlide(1,0)"></span> 
				<span class="dot" @click="currentSlide(2,0)"></span> 
				<span class="dot" @click="currentSlide(3,0)"></span> 
				<span class="dot" @click="currentSlide(4,0)"></span> 
				<span class="dot" @click="currentSlide(5,0)"></span> 
				<span class="dot" @click="currentSlide(6,0)"></span>
				<span class="dot" @click="currentSlide(7,0)"></span>
			  </div>
			</div>
			<br><br>
			<p id="otros">Otros</p><br>
			<div class="slideshow-container">

				<div class="mySlides2">
					<div class="numbertext">1 / 10</div>
					<img src="/src/assets/certs/tecnologoMec.jpg" style="width:100%">
				  </div>

				  <div class="mySlides2">
					<div class="numbertext">2 / 10</div>
					<img src="/src/assets/certs/acta_gb.jpg" style="width:100%">
				  </div>

				  <div class="mySlides2">
					<div class="numbertext">3 / 10</div>
					<img src="/src/assets/certs/Diploma_Bachiller.jpg" style="width:100%">
				  </div>

				  <div class="mySlides2">
					<div class="numbertext">4 / 10</div>
					<img src="/src/assets/certs/edw1.jpg" style="width:100%">
				  </div>
	
				<div class="mySlides2">
					<div class="numbertext">5 / 10</div>
					<img src="/src/assets/certs/edw2.jpg" style="width:100%">
				</div>
				
				<div class="mySlides2">
					<div class="numbertext">6 / 10</div>
					<img src="/src/assets/certs/edw3.jpg" style="width:100%">
				</div>

				<div class="mySlides2">
					<div class="numbertext">7 / 10</div>
					<img src="/src/assets/certs/edw3.jpg" style="width:100%">
				</div>

				<div class="mySlides2">
					<div class="numbertext">8 / 10</div>
					<img src="/src/assets/certs/tarjeta_digital_copnia.jpg" style="width:100%">
				</div>
				
				<div class="mySlides2">
					<div class="numbertext">9 / 10</div>
					<img src="/src/assets/certs/cert_copnia.jpg" style="width:100%">
				</div>

				<div class="mySlides2">
					<div class="numbertext">10 / 10</div>
					<img src="/src/assets/certs/e_instalador.JPG" style="width:100%">
				</div>
			  

			  <a class="prev" @click="plusSlides(-1, 1)">&#10094;</a>
			  <a class="next" @click="plusSlides(1, 1)">&#10095;</a>
			</div>
			<br>
			  <div style="text-align:center">
				<span class="dot" @click="currentSlide(1,1)"></span> 
				<span class="dot" @click="currentSlide(2,1)"></span> 
				<span class="dot" @click="currentSlide(3,1)"></span> 
				<span class="dot" @click="currentSlide(4,1)"></span> 
				<span class="dot" @click="currentSlide(5,1)"></span> 
				<span class="dot" @click="currentSlide(6,1)"></span>
				<span class="dot" @click="currentSlide(7,1)"></span> 
				<span class="dot" @click="currentSlide(8,1)"></span> 
				<span class="dot" @click="currentSlide(9,1)"></span>
				<span class="dot" @click="currentSlide(10,1)"></span>  
			  </div>	
		</div>		
  </div>
</template>
<style scoped lang="scss">
.certs{
  background-color: $colorC;
  width: 100%;
  overflow-x: hidden;
}
.contenido {  
    position: relative;
    

    transition: all 250ms linear;
    max-height: 100%;
    z-index: 1;
    left: 40px;
    padding-right: 40px;
    text-align: center;
    &.active {
      left: 200px;
      padding-right: 200px;
    }
}

a {
  display: inline-block;
  padding: 10px 20px;
  background-color: $colorB;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
.principal {
  
  text-align: center;
  box-sizing:border-box;
  width: 100%;
  height: auto;
  color: black;
  font-family: $domine;
  padding: 3% 3%;
  .nbar li a {
    background-color: $colorA;
    color: white;
    font-weight: bold;
    border-radius: 15px;
    margin: 2px;
    &:hover{
      background-color: $colorD;
      color: black;
    }
  }
}


.title_ {
    color:#2c698d;
    padding: 1em 0 0 0;
}
.principal {box-sizing: border-box}
.principal body {font-family:$domine; margin:0}
.principal .mySlides1 , .principal .mySlides2 {
    display: none;
    max-height: 1100px;
    overflow: auto;
    border: 2px solid #272643; 
    border-radius: 15px;        
    scrollbar-color:#272643 #2c698d;
    scrollbar-width: 5px;
}

.principal img {vertical-align: middle;}
.principal li {
  list-style-type: none;
}

/* Slideshow container */
.principal .slideshow-container {
  max-width: 90%;
  position: relative;
  margin: auto; 
}

/* Next & previous buttons */
.principal .prev, .principal .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 10px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 15px 15px 0;
  user-select: none;
  background-color: $colorD;
  opacity: 0.5;
}

.principal h1{
    text-align:center;
    padding: 0.4em 7%;
    color: black;
    text-shadow: 2px 2px 4px $colorE;
}

/* Position the buttons*/
.principal .next {
  right: 20px;
  border-radius: 3px 0 0 3px;
}
.principal .prev {
    left: 3px;
    border-radius: 3px 0 0 3px;
  }

/* On hover, add a black background color with a little bit see-through */
.principal .prev:hover, .principal .next:hover {
  background-color: #2c698d;
}

/* Caption text */
.principal .text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.principal .numbertext {
  color: #2c698d;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.principal .dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #717171;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.principal .active, .principal .dot:hover {
  background-color: #272643;
}

/* Fading animation */
.principal .fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev, .next,.text {font-size: 11px}
}

@media (max-width: $sm) {//576px;
  img {
    max-width: 90%;
    max-height: 90%;
  }
  .contenido {
    left: 0;
    padding-right: 0;
    &.active {
    left: 0;
    padding-right: 0;
    }
  }
}


</style>