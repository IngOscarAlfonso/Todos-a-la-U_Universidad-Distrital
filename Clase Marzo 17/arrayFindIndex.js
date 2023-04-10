const nums = [1,3,5,2,4];
const firstEven = nums.findIndex(num => num % 2 === 0);
console.log(firstEven); 

const persona = [
   {nombre: 'Juan', edad:23},
   {nombre: 'Pedro', edad:18},
   {nombre: 'Maria', edad:21}
];

const nombre = persona.findIndex(p => p.edad ===21);
console.log(nombre);


const vehiculos = [
   {marca: 'Toyota' , modelo: 'Corolla', año: 2019},
   {marca: 'Mazda' , modelo: '3', año: 2017},
   {marca: 'Mazda' , modelo: '6', año: 2018},
   {marca: 'Mazda' , modelo: 'CX-5', año: 2019},
];

const carro = vehiculos.findIndex(c => c.marca ==='Mazda' && c.modelo === 'CX-5');
console.log(carro);