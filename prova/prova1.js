class Produto {
  nome: String;
  preço: number;
  quantidade: Number
  
  constructor (nome,preço,Quantidade){
    this.nome = nome;
    this.preço = preço;
    this.Quantidade= Quantidade;

  };

 };
 
 let produto = [

new Produto ("Ovos", 10, 10),
new Produto ("Arroz", 10, 10),
new Produto ("Carne", 10, 10),
new Produto ("cenoura", 10, 10),
new Produto ("Batata", 10, 10),
new Produto ("uva", 10, 10),
new Produto ("agua", 10, 10),
new Produto ("luva", 10, 10)
  ]


 let calcularValorEstoque = 0;
  
 function calcularValorEstoque(produto) {
    return produto.preço * produto.Quantidade
  }

   for (produto.Quantidade(Produto) = i ; i < 5; i++) {
    console.log(`Repor estoque`)

  } else {
    console.log(`Estoque Ok`)
  }

 
let i = 0;

  while ( produto.preço = i, i > 500, i++){
    console.log(`${produto.Quantidade} tem mais valor`)
  } else (
    console.log(`Não são tão caros`)
  )

  console.log()






