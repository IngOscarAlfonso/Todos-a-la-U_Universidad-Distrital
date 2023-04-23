export class juego{
    private palabraOculta: string;
    private aciertos_contador: number = 0;
    private fallos_contador: number = 0;
    private aciertos: string = "";
    private fallos: string = "";

    constructor(palabraOculta: string){
        this.palabraOculta = palabraOculta;
    }

    verificarLetra(letra: string){
        if(this.palabraOculta.includes(letra)){
            this.aciertos_contador++;
            this.aciertos += letra;
        } else{
            this.fallos_contador++;
            this.fallos += letra;
            if(this.fallos_contador>=5){
                alert("!Fallaste, la palabra era " + this.palabraOculta)
                this.reiniciar();
            }
        }
    }

    actualizarPantalla(){
        const palabraOcultaHtml = this.generarPalabraOcultaHtml();

        let htmlPalabraOculta = document.querySelector("#palabra-oculta") as HTMLElement;
        let aciertos = document.querySelector("#aciertos") as HTMLElement;
        let fallos = document.querySelector("#fallos") as HTMLElement;

        htmlPalabraOculta.innerHTML = palabraOcultaHtml;
        aciertos.innerHTML = this.aciertos_contador.toString();
        fallos.innerHTML = this.fallos_contador.toString();

        if (this.haGanado()){
            setTimeout(() =>{
                alert("Felicidades , Ganaste!")
                this.reiniciar();
            },500);
        }
    }

    private generarPalabraOcultaHtml(){
        let palabraOcultaHtml = "";
        for ( let letra of this.palabraOculta){
            if(this.aciertos.includes(letra)){
                palabraOcultaHtml += letra + " ";
            } else{
                palabraOcultaHtml += "_ ";
            }

        }
        return palabraOcultaHtml
    }

    private haGanado(){
        for(let letra of this.palabraOculta){
            if(!this.aciertos.includes(letra)){
                return false;
            }
        }
        return true;
    }

    public reiniciar(){
        location.reload();
    }
}