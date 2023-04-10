const suma = (a,b) => a+b;
const resta = (a,b) => a-b;
const multiplicacion = (a,b) => a*b;
const division = (a,b) => a/b;

let calcular = () =>{
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacion = document.getElementById("operacion").value;

    let resultado;
    switch(operacion){
        case "suma":
            resultado = suma(num1,num2);
            break;
        case "resta":
            resultado = resta(num1,num2);
            break;
        case "multiplicacion":
            resultado = multiplicacion(num1,num2);
            break;
        case "division":
            resultado = division(num1,num2);
            break;
            default:
                resultado = "Seleccione una operación";

    }

    document.getElementById("resultado").innerHTML = resultado;
}
