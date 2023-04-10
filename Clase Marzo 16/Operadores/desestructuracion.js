// Destructuring Arrays
const numeros = [1, 2, 3];
const [primerNumero, segundoNumero] = numeros;
console.log(primerNumero);
console.log(segundoNumero);

// Destructuring Objects
const persona = { 
    nombre: "Juan", 
    edad: 30, 
    direccion: {
        calle:'Calle 170 #45-27', 
        ciudad: 'Bogota'}};

console.log(persona['nombre']);

const {nombre, edad, residencia} = persona;

console.log(residencia);

