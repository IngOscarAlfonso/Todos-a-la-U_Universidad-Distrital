//Operadores de propagación
const numeros = [1,2,3];
console.log(...numeros);
//Operadores de reposo
const numeros1 = [1,2,3,4,5];
const[primero,segundo,...resto] = numeros1;
const primerosDos = [primero,segundo];
console.log(resto);