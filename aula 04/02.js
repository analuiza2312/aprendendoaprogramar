/*Desenvolver um programa que pergunte o sexo da pessoa e dê como resposta a seguinte orientação de acordo
com o sexo informado: “Banheiro masculino à direita” ou “Banheiro feminino à esquerda”*/

let sexo = "femenino".toUpperCase();

switch (sexo){
 case "femenino" :
    console.log("Banheiro femenino");
    break;
  case "Masculino":
    console.log("Banheiro masculino");
    break;
    default:
 console.log("Banheiro no andar inferior");

}