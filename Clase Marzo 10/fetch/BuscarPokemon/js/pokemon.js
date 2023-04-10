function buscarPokemon(){
    //obtengo el valor del cuadro de texto y lo guardo en la variable
    const pokemon =document.getElementById("pokemonName").value;
    //obtengo el div donde se va a almacenar el resultado
    const resultado = document.getElementById("resultado");
    //Limpio el HTM cada vez que entro a hacer la consulta
    resultado.innerHTML="";

    //Hago el llamado de la API a través de fetch
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then(response => response.json())
        .then(data =>{
            // Creo el elemento donde se mostrara el nombre
            const nombre = document.createElement("p");
            // Agrego el dato al elemento nombre
            nombre.innerText = data.name;
            // Agrego el elemento al div resultado
            resultado.appendChild(nombre);

            //Creo el elemento donde se mostrará la iamgen
            const imagen = document.createElement("img");
            //Agrego la imagen que extraigo de la api al elemento
            imagen.src = data.sprites.front_default;
            // Agrego el elemento imagen al div resultado
            resultado.appendChild(imagen);
        })
        .catch(error => console.error(error));
}