import { palabras } from "./funciones/letras.js"
import { juego } from "./clases/juego.js"

let palabra_oculta = palabras.buscarPalabra();
const juegoAhorcado = new juego(palabra_oculta);
juegoAhorcado.actualizarPantalla();

const letrasContainer = document.querySelector("#letras-container");

for (let letra of "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ")
{
    const letraBtn = document.createElement("button");
    letraBtn.classList.add("btn", "btn-primary", "letra");

    letraBtn.textContent = letra;

    letraBtn.addEventListener("click",() =>{
        juegoAhorcado.verificarLetra(letra);
        juegoAhorcado.actualizarPantalla();
        letraBtn.classList.add("btn-danger");
        letraBtn.disabled = true;
        
    });

    letrasContainer?.appendChild(letraBtn);
}

//Agregar evento de escucha al Botón de reinicio
const reiniciarBtn = document.querySelector("#reiniciar-btn");
reiniciarBtn?.addEventListener("click",() =>{
juegoAhorcado.reiniciar();
})