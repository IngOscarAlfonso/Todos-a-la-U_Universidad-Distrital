const listadoPalabras = {
    "palabras": [
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
export var palabras;
(function (palabras) {
    function buscarPalabra() {
        const randomIndex = Math.floor(Math.random() * listadoPalabras.palabras.length);
        const palabraOculta = palabras.palabraMayuscula(listadoPalabras.palabras[randomIndex]);
        return palabraOculta;
    }
    palabras.buscarPalabra = buscarPalabra;
    function palabraMayuscula(palabra) {
        return palabra.toUpperCase();
    }
    palabras.palabraMayuscula = palabraMayuscula;
})(palabras || (palabras = {}));
