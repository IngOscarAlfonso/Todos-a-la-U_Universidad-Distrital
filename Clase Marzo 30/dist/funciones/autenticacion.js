export var Autenticacion;
(function (Autenticacion) {
    function iniciarSesion(usuario, contrasena) {
        return `El usuario ${usuario} ha iniciado sesión`;
    }
    Autenticacion.iniciarSesion = iniciarSesion;
    function cerrarSesion() {
        return "el usuario ha cerrado sesion";
    }
    Autenticacion.cerrarSesion = cerrarSesion;
    function cambiarRol() {
        return `El usuario hace cambio de rol`;
    }
    Autenticacion.cambiarRol = cambiarRol;
    function actualizarClave() {
        return `El usuario hace actualziación de clave`;
    }
    Autenticacion.actualizarClave = actualizarClave;
})(Autenticacion || (Autenticacion = {}));
