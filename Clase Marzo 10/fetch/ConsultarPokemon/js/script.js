fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
// Hago una promesa de solicitud de información a una API
// Si la API me responde con alguna información la convierto a formato JSON
    .then(response => response.json())
    // Todo la información contenida en el JSON se almacena en DATA en un objeto
    .then(data => {
        crearTabla(data);        
})
.catch(error => console.error(error)); 


function crearTabla(data){
    const pokemonArray = data.results; // Results es el objeto que contiene toda la información de los pokemon que me es útil
        //Crear la tabla
        const table = document.createElement('table');
        //Crear la cabecera
        const tableHeader = document.createElement('tr');
        //Crear las columnas de la cabecera
        const numHeader = document.createElement('th');
        const nameHeader = document.createElement('th');
        const urlHeader = document.createElement('th');
        //Agregar los textos a las columnas
        numHeader.innerText = "Número";
        nameHeader.innerText = "Name";
        urlHeader.innerText = "URL";
        //Agregar las columnas a la cabecera
        tableHeader.appendChild(numHeader);
        tableHeader.appendChild(nameHeader);
        tableHeader.appendChild(urlHeader);
        //Agregar la cabecera a la tabla
        table.appendChild(tableHeader);

        for ( let i=0; i < pokemonArray.length; i++){

            //Crear una fila
            const pokemonRow = document.createElement('tr');
            // Crear las columnas
            const numData = document.createElement('td')
            const nameData = document.createElement('td');
            const urlData = document.createElement('td');
            // Agregar los datos de la columnas
            numData.innerText = i+1;
            nameData.innerText = pokemonArray[i].name;
            urlData.innerHTML = `<a href="${pokemonArray[i].url}" target="blank">Ver</a>`; 
            //Agregar las columnas a la fila
            pokemonRow.appendChild(numData);
            pokemonRow.appendChild(nameData);
            pokemonRow.appendChild(urlData);
            // Agregar la fila a la tabla
            table.appendChild(pokemonRow);
        }
        //Agregar la tabla al body
        document.body.appendChild(table);
    
    }

