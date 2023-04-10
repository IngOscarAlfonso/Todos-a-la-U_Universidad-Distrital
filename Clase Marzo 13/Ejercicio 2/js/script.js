

IMC = (a,b) => a/(b*b);

CalcularIMC = () => {
    
    const peso = parseFloat(document.getElementById("peso").value);
    const estatura = parseFloat(document.getElementById("estatura").value);
    const genero = document.getElementById("genero").value;

    let resultado,salida;

    resultado = IMC(peso,estatura);
   
    switch(genero){
        case "masculino":
            if(resultado<20){
                salida  = "Su IMC es "+ resultado +" y usted tiene un peso bajo"
            }
            else if(resultado>=20 && resultado <25){
                salida  = "Su IMC es "+ resultado +" y usted tiene un peso normal"
            }
            else if(resultado>=25 && resultado<30){
                salida  = "Su IMC es "+ resultado +" y usted tiene Sobrepeso"
            }
            else if(resultado>=30 && resultado<40){
                salida  = "Su IMC es "+ resultado +" y usted tiene Obesidad"
            }
            else if(resultado>=40){
                salida  = "Su IMC es "+ resultado +" y usted tiene Obesidad extrema"
            }
        break;
        case "femenino":
            if(resultado<19){
                salida  = "Su IMC es "+ resultado +" y usted tiene un peso bajo"
            }
            else if(resultado>=19 && resultado <24){
                salida  = "Su IMC es "+ resultado +" y usted tiene un peso normal"
            }
            else if(resultado>=24 && resultado<29){
                salida  = "Su IMC es "+ resultado +" y usted tiene Sobrepeso"
            }
            else if(resultado>=29 && resultado<38){
                salida  = "Su IMC es "+ resultado +" y usted tiene Obesidad"
            }
            else if(resultado>=38){
                salida  = "Su IMC es "+ resultado +" y usted tiene Obesidad extrema"
            }
        break;

        default:
            break;
    }

    document.getElementById("resultado").innerText = salida;

}


