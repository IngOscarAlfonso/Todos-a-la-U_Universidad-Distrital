const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3a6edc763fmshec8373073014855p1a33d3jsn884e6e0f99b9',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

function buscarCiudad(){
let ciudad = document.getElementById("ciudad").value;

fetch(`https://open-weather13.p.rapidapi.com/city/${ciudad}`, options)
	.then(response => response.json())
	.then(response => procesarRespuesta(response))
	.catch(err => console.error(err));
}
function procesarRespuesta(response){
    console.log(response);
    const {country} = response.sys;
    let ciudad = response.name;
    const {lat,lon} = response.coord; // Accedo al objeto coord y extraigo los datos de latitud y longitud
    const {humidity,temp,temp_max,temp_min} = response.main;


    const weather = []; // Defino un arreglo vacio
    response.weather.forEach(element => {
        const {description,icon} = element; // Recorro los datos del json que estan en el arreglo weather
        weather.push(description,icon); //Guardo los datos de cada elemento leido en el arreglo vacio que declare anteriormente.
    });


    //Creo una tabla para mostrar los datos extraidos del consumo de API
    const tabla = document.createElement("table");
    const encabezado = document.createElement("thead");
    const cuerpo = document.createElement("tbody");

    //Enlazo cada parte de la tabla 
    tabla.appendChild(encabezado);
    tabla.appendChild(cuerpo);

    //Creo las filas y columnas
    const filaEncabezado = document.createElement("tr");
    const celdaEncabezado = document.createElement("th");
    celdaEncabezado.innerText = "Parametro";

    const celdaEncabezado2 = document.createElement("th");
    celdaEncabezado2.innerText = "Valor"

    //Enlazo las celas a la tabla

    filaEncabezado.appendChild(celdaEncabezado);
    filaEncabezado.appendChild(celdaEncabezado2);
    encabezado.appendChild(filaEncabezado);

    //Creo las columnas de la Fila 1
    const fila1=document.createElement("tr");
    const celda11=document.createElement("td");
    celda11.innerText = "Pais";

    const celda12=document.createElement("td");
    celda12.innerText = country;
    
    //Enlazo las filas y columnas a la tabla
    fila1.appendChild(celda11);
    fila1.appendChild(celda12);
    cuerpo.appendChild(fila1);

    //Creo las columnas de la Fila 2
    const fila2=document.createElement("tr");
    const celda21=document.createElement("td");
    celda21.innerText = "Ciudad";

    const celda22=document.createElement("td");
    celda22.innerText = ciudad;
    
    //Enlazo las filas y columnas a la tabla
    fila2.appendChild(celda21);
    fila2.appendChild(celda22);
    cuerpo.appendChild(fila2);

 //Creo las columnas de la Fila 3
    const fila3=document.createElement("tr");
    const celda31=document.createElement("td");
    celda31.innerText = "Mapa";

    const celda32=document.createElement("td");
    const mapa = document.createElement("a");
    mapa.href = `https://www.google.com/maps/@${lat},${lon},16z?hl=es`;
    mapa.innerText = "Ver mapa";
    mapa.target = "blank";
    celda32.appendChild(mapa);
        
     //Enlazo las filas y columnas a la tabla
    fila3.appendChild(celda31);
    fila3.appendChild(celda32);
    cuerpo.appendChild(fila3);
    
    
    //Enlazo la tabla al div resultado
    resultado.appendChild(tabla);

   // let icono = `https://openweathermap.org/img/w/${icon}.png`;

    
}

 