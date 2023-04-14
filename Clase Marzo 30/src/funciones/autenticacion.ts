export namespace Autenticacion{

export function iniciarSesion(usuario:string,contrasena:string){
    return `El usuario ${usuario} ha iniciado sesión`;
}

export function cerrarSesion(){
    return "el usuario ha cerrado sesion"; 
}

export function cambiarRol(){
    return `El usuario hace cambio de rol`;
}

export function actualizarClave(){
    return `El usuario hace actualziación de clave`;
}

}

