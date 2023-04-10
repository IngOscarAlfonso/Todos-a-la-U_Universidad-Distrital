function buscarPokemon(nombre){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
            .then(response =>{
                if(response.ok){
                    resolve(response.json());
                }
                else{
                    reject(new Error("Pokemon no encontrado"));
                }
            })
            .catch(error => reject(error));
            
        }, 2000);
    })
}

buscarPokemon('pikachu')
.then(pepito => {
    //console.log(pepito);
    const {species:{name, url}, id, forms:[posicion0]} = pepito; 
    const {name:nameForm, url:urlForm} = posicion0;
    console.log(name);
    console.log(url);
    console.log(id);
    console.log(nameForm);
    console.log(urlForm);

})
.catch(error => {
    console.log(error);
})