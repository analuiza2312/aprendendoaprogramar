function calcularArea(
base: 4,
altura: 10
): number {
return base * altura;
}

console.log(calcularArea(4,10));

function convertertemperatura (temp: number) :number {
    return (temp * 9/5)+ 32;
}

console.log(`Temperatura em °f:${convertertemperatura(25)}`)