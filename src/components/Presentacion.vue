<script setup lang="ts">
    
</script>
<template>
    
        
        <h2 class="title">PORTAFOLIO DE DESARROLLADOR WEB</h2>
    <div class="cont">
        <section class="presentacion">
            <article class="presentacion__image presentacion__item">
                <img class="presentacion__img" src="../assets/images/landingpage_image1.jpeg" alt="">
            </article>
            <article class="presentacion__item" >
                <div class="presentacion__text">
                   <h2> Hola! Soy Giovanni Ibañez.</h2>
                    <h1> Te invito a visitar mi portafolio de desarrollador Full Stack </h1>¡Contáctame para trabajar juntos!
                </div>
                
            </article>
            
        </section>
    </div>
    
</template>
<style scoped lang="scss">
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }
    
    .title{
        text-align: center;
        color:  $a1;        
        text-shadow: 3px 3px 3px black;
        width: 100%;
        margin: 0;
        padding: 0.5em 0;
        font-family: $domine;
        border-top: 0.5em solid $p1;
        border-bottom: 0.5em solid $p1;
        background: $p1;
        font-size: 27px;
    }
    .presentacion{
        max-width: calcular-ancho-contenedor(100vw);
        margin: 15px auto 0 auto;
        font-family: $domine;
        line-height: 1.618;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 1.618em;
        flex-wrap: wrap;
        .presentacion__text {
            h2{
                font-size: 24px;
                
            }
            color: black;      
            border-top-right-radius: 30px;
            border-bottom-right-radius: 30px;
            border-bottom-left-radius: 30px;
            text-align: center;
            width: 100%;
            min-width: 300px;
            padding:5%;
            background-color: $a2;
            
        }
    }
    .presentacion__item{

        flex-basis: 45%;
        padding: 1%;
        flex-grow: 1;
    }
    .presentacion__img {
        width: 100%;
        min-width: 300px;
        border-radius: 30px;
        margin: 0;
        padding: 0;
    }
    @media (min-width: $xl) {
        .presentacion__img {
            width: 90%;
        }
    }
    @media (min-width: $xxl) {
        .presentacion__img {
            width: 80%;
        }
    }    
    @media (max-width: 300px) {
        .presentacion__img {
            display: none;
        }
    }
    @media (max-width: 480px) {
    .presentacion {
        width: 90%;
        }
    }
   
</style>