const colors = ['red', 'green', 'yellow', 'blue', 'pink', 'purple', 'orange', 'black', 'white', 'grey'] ;
const [colorPrimario, colorSecundario, ...otrosColores] =colors;
console.log(colorPrimario);
console.log(colorSecundario);
console.log(otrosColores);

const valores = [1, 2];
const [a = 0, b = 0, c = 0] = valores;
console.log(a);
console.log(b);
console.log(c);