class Livros {
    titulo;
    autor;
    quantidade;
    emprestados;

    constructor(titulo,autor,quantidade,emprestados) {
    this.titulo = titulo; 
    this.autor = autor;
    this.quantidade = quantidade;
    this.emprestados = emprestados;
    }
}


let livros = [
   new Livros("Orgulho e preconceito e zumbis","Seth Grahame-Smith", 10, 5),
   new Livros("Orgulho e preconceito", "Jane Austen", 10 , 5),
   new Livros("Elvira: Memoirs of the Mistress of the Dark", "Cassanda peterson", 10, 3),
   new Livros("A Arte da Guerra", " S tzu", 10 , 6),
   new Livros("O Senhor dos Anéis", "Tolkien", 10, 4),
   new Livros("O Hobbit","Tolkien", 10, 5)

] ;

    

function livrosDisponiveis(livro) {
    return livro.quantidade - livro.emprestados;
}

let disponiveis = 0;
let indisponiveis = 0;
let exemplaresTotal = 0;
let exemplares = 0;

console.log("=== Situação dos Livros ===");

for (let i = 0; i < livros.length; i++) {
    console.log(`\nLivro: ${livros[i].titulo}`);
    if (livrosDisponiveis(livros[i]) > 0) {
        console.log("Disponível");
        console.log(`Exemplares disponíveis: ${livrosDisponiveis(livros[i])}`);
        disponiveis++;
        exemplaresTotal+=livrosDisponiveis(livros[i]);
    } else {
        console.log("Indisponível");
        indisponiveis++;
    }
}

let i = 0; 
let livrosComExemplar = 0;

while (i < livros.length) {
    if (livrosDisponiveis(livros[i]) > 0) {
        livrosComExemplar++;
    }
    i++;
}

console.log("\n========================");
console.log("Resumo");
console.log("========================");
console.log(`Total de livros: ${livros.length}`);
console.log(`Total de livros disponíveis: ${disponiveis}`)
console.log(`Total de exemplares disponíveis: ${exemplaresTotal}`);
console.log(`Total de livros indisponíveis: ${indisponiveis}`);
console.log(`Livros com pelo menos um exemplar disponível: ${livrosComExemplar}`);