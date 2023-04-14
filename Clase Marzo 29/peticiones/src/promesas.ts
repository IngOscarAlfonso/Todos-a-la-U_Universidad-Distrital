async function obtenerResultadoError(): Promise<string>{
    const resultado: string = await new Promise((resolve, reject) =>{
        setTimeout(() => {
           reject("Error en la promesa") 
        }, 5000);
    })

    return resultado;
}

async function main(){
    try{
        const resultado = await obtenerResultadoError();
        console.log(`Resultado OK: ${resultado}`);
    }
    catch(error){
        console.log(`Resultado Error: ${error}`);
    }
}

main();