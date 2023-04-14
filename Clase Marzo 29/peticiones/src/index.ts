const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3a6edc763fmshec8373073014855p1a33d3jsn884e6e0f99b9',
		'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
	}
};

async function traerDatos(){
    const response = await fetch('https://currency-exchange.p.rapidapi.com/listquotes', options);
    const data:string[] = await response.json();;

    let moneda1 = document.getElementById("moneda1");
    let moneda2 = document.getElementById("moneda2");

    data.forEach((element) => {
        let option = document.createElement("option");
        option.text = element;
        option.value = element;
        moneda1!.appendChild(option);
        moneda2!.appendChild(option.cloneNode(true));
    });
}

traerDatos();

const form = document.querySelector("#formMonedas");

form?.addEventListener("submit",(event) =>{
    event.preventDefault();
    const moneda1 = document.getElementById("moneda1") as HTMLSelectElement;
    const moneda2 = document.getElementById("moneda2") as HTMLSelectElement;
    const cantidad= document.getElementById("cantidad") as HTMLInputElement;

    convertirMoneda(moneda1.value,moneda2.value, Number(cantidad.value));
});

async function convertirMoneda(moneda1:string,moneda2:string,cantidad:number){

    
    const response = await fetch(`https://currency-exchange.p.rapidapi.com/exchange?from=${moneda1}&to=${moneda2}&q=${cantidad}`, options);
    const data = await response.json();
    console.log(data);

    const resultado = document.getElementById("resultado") as HTMLInputElement;

    resultado.innerHTML = data.toString();
}

async function esperaUnSegundo(): Promise<string>{
    await new Promise(resolve => setTimeout(resolve,1000));
    return "Hola Mundo después de 1 segundo!";
}

const promesaEspera = esperaUnSegundo().then(res=> alert(res)); 