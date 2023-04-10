const numeros=[6,9,14,2,3,8,4,5];
const numerosMult = numeros.map(num => num*2);
console.log(numerosMult);

const resto = numeros.filter(num => num%2 === 0);
console.log(resto);

const suma = numeros.reduce((total,num) => total + num,0);
console.log(suma);

numeros.forEach(num => console.log(num+100));

const ordenados = numeros.sort((a,b) => b-a);
console.log(ordenados);

const palabras=['hola','mundo',',','javascript','es','genial']
const ordenadosPalabras = palabras.sort();
console.log(ordenadosPalabras);

const index = numeros.indexOf(2);
console.log(index);

numeros.push(50,5,1,65,6,5,645,456);
console.log(numeros);

numeros.pop();
console.log(numeros);

numeros.splice(2,1);
console.log(numeros);