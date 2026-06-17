




function responder() {
    // Pega o que foi digitado no input
    let cor = document.getElementById("pergunta").value;
    
    // Exibe a resposta na própria página
    document.getElementById("resposta").innerHTML = "Que legal! A cor " + cor + " é linda!";
}
