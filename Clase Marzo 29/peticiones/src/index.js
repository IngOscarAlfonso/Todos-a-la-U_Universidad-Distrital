"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3a6edc763fmshec8373073014855p1a33d3jsn884e6e0f99b9',
        'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
    }
};
function traerDatos() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://currency-exchange.p.rapidapi.com/listquotes', options);
        const data = yield response.json();
        ;
        let moneda1 = document.getElementById("moneda1");
        let moneda2 = document.getElementById("moneda2");
        data.forEach((element) => {
            let option = document.createElement("option");
            option.text = element;
            option.value = element;
            moneda1.appendChild(option);
            moneda2.appendChild(option.cloneNode(true));
        });
    });
}
traerDatos();
const form = document.querySelector("#formMonedas");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (event) => {
    event.preventDefault();
    const moneda1 = document.getElementById("moneda1");
    const moneda2 = document.getElementById("moneda2");
    const cantidad = document.getElementById("cantidad");
    convertirMoneda(moneda1.value, moneda2.value, Number(cantidad.value));
});
function convertirMoneda(moneda1, moneda2, cantidad) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://currency-exchange.p.rapidapi.com/exchange?from=${moneda1}&to=${moneda2}&q=${cantidad}`, options);
        const data = yield response.json();
        console.log(data);
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = data.toString();
    });
}
function esperaUnSegundo() {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise(resolve => setTimeout(resolve, 1000));
        return "Hola Mundo después de 1 segundo!";
    });
}
const promesaEspera = esperaUnSegundo().then(res => alert(res));
