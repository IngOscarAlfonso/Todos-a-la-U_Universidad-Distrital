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
function obtenerResultadoError() {
    return __awaiter(this, void 0, void 0, function* () {
        const resultado = yield new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Error en la promesa");
            }, 5000);
        });
        return resultado;
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resultado = yield obtenerResultadoError();
            console.log(`Resultado OK: ${resultado}`);
        }
        catch (error) {
            console.log(`Resultado Error: ${error}`);
        }
    });
}
main();
