/*Desenvolver um programa que pergunte dois números inteiros, e apresente como resultado se o segundo
número informado é ou não um divisor do primeiro número informado. */

let n1 = 2
let n2 = 9

let resultado = n1 % n2 == 0

if (`resultado`){
    console.log(`${n1} é divisivel por ${n2}`)
} else {
    console.log(`${n1} não é divisivel por ${n2}`)
}