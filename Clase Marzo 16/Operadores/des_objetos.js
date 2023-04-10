const persona = {
    nombre: 'Juan',
    edad: 25,
    ciudad: 'Bogotá',
    curso: {
        nombre: 'JavaScript',
        duracion: 40
    }
}

const { nombre, edad, ciudad, curso:{duracion:cursoDuracion} } = persona

console.log(nombre);
console.log(edad);
console.log(ciudad);

console.log(cursoDuracion);

