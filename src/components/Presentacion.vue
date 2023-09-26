<script setup lang="ts">
    
</script>
<template>
    <h1 class="title">Portafolio Web</h1>
    <!-- 
    <div class="presentacion">        
		<div class="presentacion__image presentacion__elm"><img class="presentacion__img" src="../assets/images/landingpage_image1.jpeg" alt="">			
		</div>
		<div class="presentacion__textwel presentacion__elm">			
            <p>Mi nombre es <b>Giovanni Ibañez</b>.</p>
            <p>Durante los últimos años tengo el placer de conocer y desarrollar interés por el mundo del desarrollo web, manejo de aplicaciones y datos. He venido desarrollando habilidades como <b>Desarrollador Full Stack. </b> 
			</p>
            <p>Hecha un vistazo, te va a interesar. </p>
		</div>
    </div> -->
    <section class="presentacion">
        <article class="presentacion__image presentacion__item">
            <img class="presentacion__img" src="../assets/images/landingpage_image1.jpeg" alt="">
        </article>
        <article class="presentacion__text presentacion__item" >
            <p>Mi nombre es <b>Giovanni Ibañez</b>.</p>
            <p>Durante los últimos años tengo el placer de conocer y desarrollar interés por el mundo del desarrollo web, manejo de aplicaciones y datos. He venido desarrollando habilidades como <b>Desarrollador Full Stack. </b> 
			</p>
            <p>Hecha un vistazo, te va a interesar. </p>
        </article>
        
    </section>
</template>
<style scoped>
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .title{
        padding: 1em;
        text-align: center;
    }
    .presentacion{
        width:90%;
        margin: 0 auto;
        max-width: 1200px;
        min-width: 100vh;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap:3.5em;
        flex-wrap: wrap;
        /* cuando los elementos no caben en una linea se van a la siguiente */
    }
    .presentacion__item{
        margin-bottom: 3em;
        max-width: 400px;
        flex-basis: 280px; 
        /* tamaño base de los items del flex */
        flex-grow: 1;
    }
    /* .presentacion__content{
        width:90%;
        margin: 0 auto;      
    }
    .presentacion__picture {
        width: 90%;
        margin: 0 auto;
        position: relative;
        bottom: 2em;
        gap: 3.5 em;
    }
    .presentacion__title {
        margin-bottom: 1em;

    } */

    .presentacion__img {
        width: 100%;
        border-radius: 35px;
    }
   
</style>