export var impuestos;
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
})(impuestos || (impuestos = {}));
