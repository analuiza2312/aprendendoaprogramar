let alunos = [
    {nome: "Ana", idade: 20},
     {nome: "Bianca", idade: 18},
     {nome: "Maria" , idade: 22},
     {nome: "Livia" , idade: 18},
     {nome: "Estela" , idade: 20},
     {nome: "Mariane" , idade: 22},
     {nome: "Marcelli" , idade: 16}
]

for (let i = 0 ; i < alunos.length; i++) {
if (alunos[i].idade >= 18) {
    console.log(`${alunos[i].nome} é maior de idade`)
} else {
    console.log(`${alunos[i].nome} é menor de idade`)
 }
}
