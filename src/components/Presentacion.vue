<script setup lang="ts">
    
</script>
<template>
    
        
        <h2 class="title">Portafolio de desarrollador web</h2>
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
    h2{
        font-size: 26px;
    }
    .title{
        text-align: center;
        color: black;
        width: 100%;
        margin: 0;
        padding: 0.618em 0;
        font-family: $domine;
        border-top: 0.618em solid $colorD;
        border-bottom: 0.618em solid $colorD;
        background: $colorE;
        font-size: 30px;
    }
    .presentacion{
        width: calcular-ancho-contenedor(100vw);
        margin: 0 auto;
        font-family: $domine;
        line-height: 1.618;
        color: black;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 1.618em;
        flex-wrap: wrap;
        .presentacion__text {
            
            border-top-right-radius: 40px;
            border-top-left-radius: 40px;
            border-bottom-right-radius: 40px;
            text-align: center;
            padding:5%;
            background-color: white;
            
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
        border-radius: 40px;
        margin: 0;
        padding: 0;
    }


    
    @media screen and (max-width: 300px) {
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