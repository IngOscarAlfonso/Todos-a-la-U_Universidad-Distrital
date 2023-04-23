const listadoPalabras = {
    "palabras":[
        "manzana",
        "banano",
        "tomate",
        "fecha",
        "finca",
        "perro",
        "caballo",
        "gato",
        "fogata",
        "leña",
        "piso",
        "casa",
        "niño",
        "vehiculo"
    ]
};

export namespace palabras{
    
    export function buscarPalabra(){
        const randomIndex = Math.floor(Math.random()*listadoPalabras.palabras.length);
        const palabraOculta = palabras.palabraMayuscula(listadoPalabras.palabras[randomIndex]);
        return palabraOculta;
    }

    export function palabraMayuscula(palabra:string){
        return palabra.toUpperCase();
    }
}