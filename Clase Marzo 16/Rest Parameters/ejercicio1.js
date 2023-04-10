function multiplicar(...numeros){
    return numeros.reduce((total,numero) => total * numero,1);
}

console.log(multiplicar(1,2,3,4,5));

function promedio(...edades){
    const total = edades.reduce((suma, edad) => suma + edad);
    return total / edades.length;
}

console.log(promedio(40,5,2,54,25,35,34,2,1,5,5,62,62));