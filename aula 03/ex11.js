/*Desenvolver um programa que pergunte um número de 3 casas, e apresente como resultado somente o
algarismo das centenas*/

let numero = 789
if (numero > 99 && numero < 1000) {
let centenas= (numero - (numero %100)) / 100;
console.log(`Algarismo das centenas: ${centenas}`);
} else {
    console.log("Numero fora do intervalo");
}


