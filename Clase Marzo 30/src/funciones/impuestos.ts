export namespace impuestos{

export function calcularIVA(precio:number):number{
    return precio*0.19;
}
export function calcularICA(precio:number):number{
    return precio*0.04;
}
export function calcularReteIVA(precio:number):number{
    return precio*0.05;
}

}