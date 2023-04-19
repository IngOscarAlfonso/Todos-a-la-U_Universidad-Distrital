function log(data: string){
    return function(target: any){
    console.log(`Hola desde el decorador de la clase ${target.name}, ${data}`);
}
}
function readOnly(target: any, key: string){
    Object.defineProperty(target, key, {
        writable: false
        });
}

//@log('Hola')
export class Persona{
  @readOnly
    nombre:string;
    edad:number;

    constructor(nombre:string, edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }
    
    mostrar(){
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
} 



@log('Hola 2')
export class Animal{

    nombre:string;
    edad: number;

    constructor(nombre:string, edad:number){
        this.nombre = nombre;
        this.edad = edad;
    } 

}
