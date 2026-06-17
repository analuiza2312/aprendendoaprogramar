let n1 = 5;
let n2 = 9;
let n3 = 3; /*Anotação errei os simbulos  na parte (menor<=) acabei colocando igial o maior (>=)*/ 
let n4 = 5;
let n5 = 8;
let maior, menor;

if (n1 >= n2 && n1 >= n3 && n1 >= n4 && n1 >= n5 ){
    maior = n1;
} else if (n2 >= n3 && n2 >= n1 && n2 >= n4 && n2 >= n5){
    maior = n2;
} else if (n3 >= n1 && n3 >= n2 && n3 >= n4 && n3 >= n5){
    maior = n3;
} else if (n4 >= n2 && n4 >= n1  && n4 >= n3 && n4 >= n5){
    maior = n4;
}  else if (n5 >= n1 && n5 >= n2 && n5 >= n3 && n5 >= n4){
    maior = n5;
} 
console.log (`maior numero : ${maior}`)

if (n1 >= n2 && n1 >= n3 && n1 >= n4 && n1 >= n5 ){
    menor = n1
} else if (n2 >= n3&& n2 >= n1 && n2 >= n4 && n2 >= n5){
    menor = n2
} else if (n3 >= n1 && n3 >= n2 && n3 >= n4 && n3 >= n5){
    menor = n3
} else if (n4 >= n2 && n4 >= n1 && n4 >= n3 && n4 >= n5){
    menor = n4
}  else if (n5 >= n1 && n5 >= n2 && n5 >= n3 && n5 >= n4){
    menor = n5
} 
console.log (`menor numero : ${menor}`)

/*Desenvolver um programa que leia 5 números inteiros, e identifique o maior número e o menor número. */