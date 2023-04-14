import {Autenticacion} from './funciones/autenticacion.js';
import {impuestos} from './funciones/impuestos.js';

let respuesta = Autenticacion.iniciarSesion('admin','1234');
let respuesta2 = Autenticacion.cerrarSesion();
let respuesta3 = Autenticacion.cambiarRol();
let respuesta4 = Autenticacion.actualizarClave();
console.log(respuesta);
console.log(respuesta2);
console.log(respuesta3);
console.log(respuesta4);


let response = impuestos.calcularIVA(45000);
let response1 = impuestos.calcularICA(45000);
let response2 = impuestos.calcularReteIVA(45000);

console.log(response);
console.log(response1);
console.log(response2);
