var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log(data) {
    return function (target) {
        console.log(`Hola desde el decorador de la clase ${target.name}, ${data}`);
    };
}
function readOnly(target, key) {
    Object.defineProperty(target, key, {
        writable: false
    });
}
//@log('Hola')
export class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    mostrar() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}
__decorate([
    readOnly
], Persona.prototype, "nombre", void 0);
let Animal = class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
};
Animal = __decorate([
    log('Hola 2')
], Animal);
export { Animal };
