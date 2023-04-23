export class juego {
    constructor(palabraOculta) {
        this.aciertos_contador = 0;
        this.fallos_contador = 0;
        this.aciertos = "";
        this.fallos = "";
        this.palabraOculta = palabraOculta;
    }
    verificarLetra(letra) {
        if (this.palabraOculta.includes(letra)) {
            this.aciertos_contador++;
            this.aciertos += letra;
        }
        else {
            this.fallos_contador++;
            this.fallos += letra;
            if (this.fallos_contador >= 5) {
                alert("!Fallaste, la palabra era " + this.palabraOculta);
                this.reiniciar();
            }
        }
    }
    actualizarPantalla() {
        const palabraOcultaHtml = this.generarPalabraOcultaHtml();
        let htmlPalabraOculta = document.querySelector("#palabra-oculta");
        let aciertos = document.querySelector("#aciertos");
        let fallos = document.querySelector("#fallos");
        htmlPalabraOculta.innerHTML = palabraOcultaHtml;
        aciertos.innerHTML = this.aciertos_contador.toString();
        fallos.innerHTML = this.fallos_contador.toString();
        if (this.haGanado()) {
            setTimeout(() => {
                alert("Felicidades , Ganaste!");
                this.reiniciar();
            }, 500);
        }
    }
    generarPalabraOcultaHtml() {
        let palabraOcultaHtml = "";
        for (let letra of this.palabraOculta) {
            if (this.aciertos.includes(letra)) {
                palabraOcultaHtml += letra + " ";
            }
            else {
                palabraOcultaHtml += "_ ";
            }
        }
        return palabraOcultaHtml;
    }
    haGanado() {
        for (let letra of this.palabraOculta) {
            if (!this.aciertos.includes(letra)) {
                return false;
            }
        }
        return true;
    }
    reiniciar() {
        location.reload();
    }
}
