import { palabras } from "./funciones/letras.js";
import { juego } from "./clases/juego.js";
let palabra_oculta = palabras.buscarPalabra();
const juegoAhorcado = new juego(palabra_oculta);
juegoAhorcado.actualizarPantalla();
const letrasContainer = document.querySelector("#letras-container");
for (let letra of "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ") {
    const letraBtn = document.createElement("button");
    letraBtn.classList.add("btn", "btn-primary", "letra");
    letraBtn.textContent = letra;
    letraBtn.addEventListener("click", () => {
        juegoAhorcado.verficarLetra(letra);
        juegoAhorcado.actualizarPantalla();
        letraBtn.classList.add("btn-danger");
        letraBtn.disabled = true;
    });
}
