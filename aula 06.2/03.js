let a = [[1,2,3,],[4,5,6],[7,8,9],[10,11,12],[13,14,15]];
let b = [[15,14,13],[12,11,10],[9,8,7],[6,5,4],[3,2,1]];
let c = [];

for (let i = 0; i < 5; i++){
    for (let j = 0; j < 3; j++){
        c[i][j] = a[i][j]+b[i][j];
    }
}

console.log(a)
console.log(b)
console.log(c)

/*Desenvolver um programa que crie uma matriz de 4 linhas e 4 colunas. Pergunte ao usuário nomes de pessoas
para preencher toda a matriz. Em seguida o programa perguntará ao usuário as coordenadas (linha e coluna)
que deseja visualizar o conteúdo correspondente na matriz. Enquanto o usuário informar coordenadas válidas, o
programa exibirá o conteúdo correspondente. No momento em que forem inseridas coordenadas não válidas o
programa será encerrado com a mensagem na tela “Coordenadas inválidas”. */