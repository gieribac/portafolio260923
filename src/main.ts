import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

// app.directive('font-size', //indicacion de propiedad necesaria para cambiar el tamaño de fuente
// {
//     beforeMount: (el, binding) => {//momento del ciclo de vida
//         //"el" es referencia al nodo html
//         //"binding" es lo que se ejecutara con la directiva (lo que sigue del "=")
//         el.style.fontSize="70px"

//     }
// })

// app.directive('custom-size',
// {
//     beforeMount: (el, binding) => {
//         let size = 18;
//         let color = '#000000'
//         if (binding.modifiers.sm){
//             size = 10
//         } else if (binding.modifiers.lg){
//             size = 25
//         } else if (binding.modifiers.xxl){
//             size = 72
//         }
//         el.style.fontSize = size+"px";

//         if (binding.modifiers.red){
//             color = '#ff0000'
//         } else if (binding.modifiers.lg){
//             color = '#00ff00'
//         } else if (binding.modifiers.xxl){
//             color = '#0000ff'
//         }
//         el.style.color = color;
//     }
// })

// app.directive('custom-font',
// {
//     beforeMount: (el, binding) => {
//         const argumento: string = binding.arg || "sm";
//         el.style.fontSize = binding.arg+"px";
//         let myMap = new Map<string, number>([
//             ["sm", 10],
//             ["md", 18],
//             ["lg", 25],
//             ["xl", 40],
//             ["xxl", 72]
//         ]);
//         let size: number = myMap.get(argumento) || 10;
//         el.style.fontSize=size+"px";
//     }
// })

app.mount('#app');