<script setup lang="ts">
import { RouterLink } from 'vue-router'

</script>
<template>
    <div class="container">
        <div class="container__item container__intro1" >
            <RouterLink class="container__intro" :to="{name:'presentacion'}">Ingresar <span class="material-symbols-outlined">login</span></RouterLink>
        </div>
        <div class="container__infcontacto container__item">
            <h2>Información de Contacto</h2>
            <div class="container__tables">
                <table class="container__table">
                    <tr>
                        <td class="clave">Cel/whatsapp:</td>
                        <td class="valor">(+57) 302 834 3629</td>
                        
                    </tr>
                    <tr>
                        <td class="clave">Telegram:</td>
                        <td class="valor">@GioErn</td>
                    </tr>
                    <tr>
                        <td class="clave">Skype:</td>
                        <td class="valor">live:gier07_07</td>
                    </tr>
                    <tr>
                        <td class="clave">Discord:</td>
                        <td class="valor">gioiban3z#4683</td>
                    </tr>
                    <tr>
                        <td class="clave">Twitter:</td>
                        <td class="valor">@Gier24</td>
                    </tr>
                </table>
                <table class="container__table">
                    <tr>
                        <td class="clave">E-mail:</td>
                        <td class="valor">gieribac@gmail.com</td>
                    </tr>
                    <tr>
                        <td class="clave"></td>
                        <td class="valor">gioiban3z@gmail.com</td>
                    </tr>
                    <tr>
                        <td class="clave"></td>
                        <td class="valor">gier07_07@hotmail.com</td>
                    </tr>
                    <tr>
                        <td class="clave">Linkedin:</td>
                        <td class="valor">linkedin.com/in/gieribac</td>
                    </tr>
                    <tr>
                        <td class="clave">GitHub:</td>
                        <td class="valor">github.com/gieribac</td>
                    </tr>
                </table>
            </div>
        
        </div>
                
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 320"><path fill-opacity="0.9" d="M0,288L20,266.7C40,245,80,203,120,192C160,181,200,203,240,197.3C280,192,320,160,360,160C400,160,440,192,480,192C520,192,560,160,600,149.3C640,139,680,149,720,144C760,139,800,117,840,101.3C880,85,920,75,960,96C1000,117,1040,171,1080,160C1120,149,1160,75,1200,53.3C1240,32,1280,64,1320,69.3C1360,75,1400,53,1420,42.7L1440,32L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
    </div>
    
    

</template>
<style scoped lang="scss">
.container {
    font-family: $domine;
    text-align: center;
    position: relative;
}
.container__item{
    width: 100%;
    display:flex;
    padding: 0.618em;
    flex-direction: column;
    align-content: center;
    position:sticky;
}
.container__infcontacto{
    width: calcular-ancho-contenedor(100%);
    color: black;
    background-color: $s2;
    margin: 0.618em auto;
    border-radius: 30px;
    line-height: 1.618;
    h2 {
        font-size: 22px;
    }
    .container__tables {
        font-size: 15px;
    }
    .clave{
        text-align: right;
        font-weight: bold;
    }
    .valor{
        text-align: left;
        text-decoration: none;
    }
    
    .container__tables{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
        flex-direction: row;
            .container__table{
                width: min-content;
                padding: 1%;
                flex-grow: 1;
            }
    }
}
.container__intro{
    width: 5%;
    font-size: 18px;
    background-color: $a1;
    font-weight: bold;
    padding: 0.5em 1em;
    width: 100%;    
    position: relative;
    text-decoration: none;
    border-radius: 5px;
    color: black;
    &:hover {     
        background-color: $a1;   
        border-top-right-radius: 15px;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }
}

.container__intro1{
    width: min-content;
    display: inline-block;
    a {
        display: flex;  
        flex-direction: row;
    }
}
svg {
        position: absolute;
        z-index: -1;
        bottom: 0;  
        height: 400px;      
        width: 100%;
        fill: $s1;
    }
    @media (max-width: 480px) {
    .container__infcontacto {
        width: 90%;
        }
    }
   
</style>