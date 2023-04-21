"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.impuestos = void 0;
var impuestos;
(function (impuestos) {
    function calcularIVA(precio) {
        return precio * 0.19;
    }
    impuestos.calcularIVA = calcularIVA;
    function calcularICA(precio) {
        return precio * 0.04;
    }
    impuestos.calcularICA = calcularICA;
    function calcularReteIVA(precio) {
        return precio * 0.05;
    }
    impuestos.calcularReteIVA = calcularReteIVA;
})(impuestos = exports.impuestos || (exports.impuestos = {}));
