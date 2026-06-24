class Pessoa {
  nome: string;
  idade: number;
  constructor(nome: string, idade: number) {
   this.nome = nome;
  this.idade = idade;
}
apresentar(): void {
console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
 }
}
// Instanciando um objeto da classe Pessoa
let pessoa1 = new Pessoa("Ana", 20);
pessoa1.apresentar();
// Saída: Olá, meu nome é Ana e tenho 20 anos.