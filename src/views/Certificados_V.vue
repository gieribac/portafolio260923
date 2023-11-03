<script setup lang="ts">
 import Sidebar from '../components/Sidebar.vue';
 import {plusSlides} from '../cod/slider';
 import {currentSlide} from '../cod/slider'; 
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
			<h1 id="pyd" class="title_">Certificados</h1>

			<p >Programación y Desarrollo</p><br>
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
					<img src="/src/assets/certs/e_instalador.jpg" style="width:100%">
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
  .certs {
    background-color: $p1;
    width: 100%;
    overflow-x: hidden;
  }

  .contenido {
    position: relative;
    max-height: 100%;
    z-index: 1;
    padding-right: 40px;
    text-align: center;
  }

  .principal {
    text-align: center;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    color: black;
    font-family: $domine;
    padding: 3% 3%;

    .nbar {
      li a {
      background-color: $a2;
      color: black;
      font-weight: bold;
      border-radius: 5px;
      margin: 2px;
      display: inline-block;
      padding: 10px 20px;
      text-decoration: none;
      &:hover {
        background-color: $a1;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
      }
    }

    }

    h1 {
      text-align: center;
      padding: 0.4em 7%;
      color: $a1;
      text-shadow: 3px 3px 3px black;
    }

    .mySlides1, .mySlides2{
      max-height: min-content;
      border-radius: 15px;
      scrollbar-color: black red;
      scrollbar-width: 5px;
    }

    img {
      vertical-align: middle;
      border-radius: 10px;
    }

    li {
      list-style-type: none;
    }

    .slideshow-container {
      max-width: 90%;
      position: relative;
      margin: auto;
    }

    .prev,
    .next {
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
      background-color: $a2;
      opacity: 0.5;
      transform: translate(0, -50%);

      &:hover {
        background-color: $a1;
      }
    }

    .prev {
      left: 3px;
      border-radius: 3px 0 0 3px;
    }

    .next {
      right: 3px;
      border-radius: 3px 0 0 3px;
    }

    p {
      color: $s2;
    }

    .numbertext {
      color: #2c698d;
      font-size: 12px;
      padding: 8px 12px;
      position: absolute;
      top: 0;
    }

    .dot {
      cursor: pointer;
      height: 15px;
      width: 15px;
      margin: 0 2px;
      background-color: $a2;
      border-radius: 50%;
      display: inline-block;
      transition: background-color 0.6s ease;
      &:hover {
        background-color: $a1;
      }
    }

    

    @media only screen and (max-width: 300px) {
      .prev,
      .next,
      p {
        font-size: 11px;
      }
    }
  }
  @media (min-width: $sm){
      .contenido {
        left: 0px;
        &.active {
          left: 180px;
          padding-right: 200px;
        }
      }
      .mySlides2, .mySlides1{

          border: 2px solid $a2;
      }
    }

    @media (max-width: $sm) {
      img {
        max-width: 90%;
      }
      .numbertext {
      left: 15px;
      }
      
      .contenido {
        top: 50px;
        &.active {
          top: 190px;
        }
      }
      .principal .prev {
         font-size: 10px;
         left: 22px; 
      }
      .principal .next {
        font-size: 10px;
        right: 22px; 
      }
    }
</style>