<script setup lang="ts">
    
</script>
<template>
    <h1 class="title">Portafolio de desarrollador web</h1>

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
<style scoped lang="scss">
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .title{
        text-align: center;
        color: $ctextb;
        background-color: white;
        // width: calcular-ancho-contenedor(100%)
        width: 100%;
        margin: 0.618em 0;
        padding: 0.618em;
        font-family: $domine;
    }
    .presentacion{
        width: calcular-ancho-contenedor(100%);
        margin: 0 auto;
        font-family: $domine;
        line-height: 1.618;
        color: $ctextw;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap:3.5em;
        flex-wrap: wrap;
        /* cuando los elementos no caben en una linea se van a la siguiente */
    }
    .presentacion__item{
        // margin-bottom: 3em;
        // max-width: 400px;
        flex-basis: 280px; 
        flex-grow: 1;
    }
    .presentacion__img {
        width: 100%;
        min-width: 300px;
        border-radius: 35px;
        margin: 0;
        padding: 0;
    }
    .presentacion__text {
        width: 100%;
        min-width: 300px;
        margin: 0;
        padding: 0;
    }
   
</style>