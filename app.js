//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Projeto de Thauan Souza para o curso de formação ONE ORACLE

let amigos = [];

function adicionarAmigo (){

    const inputAmigo = document.getElementById("amigo").value; // captura apenas o valor digitado

    console.log (inputAmigo);

    if (inputAmigo == ""){ // testa para entrada vazia
        alert ("Por favor, insira um nome.");
        return;
    }
    amigos.push(inputAmigo); // adiciona o nome a lista
    console.log(amigos);
    limparCampo(); //  limpa o campo

    atualizarListaAmigos ();
}

function limparCampo(){ // funcao limpa campo
    const inputAmigo = document.getElementById("amigo");
    inputAmigo.value ="";
}

/////// Implementa uma função para atualizar a lista de amigos

function atualizarListaAmigos (){
    const lista = document.getElementById("listaAmigos") // referencia a lista html
    lista.innerHTML = "";

    for (let i = 0; i <amigos.length; i++) {

        let li = document.createElement("li"); // Cria um elemento <li>
        li.textContent = amigos[i]; // Define o texto do <li>
        lista.appendChild(li); // Adiciona o <li> na <ul>
    }
}

////////// Implementa uma função para sortear os amigos

function sortearAmigo(){
    if (amigos.length == 0){
        alert("Lista de amigos vazia. Adicione nomes para o sorteio.");
        return;
    }


    let indiceSorteado = Math.floor(Math.random()*amigos.length);

    let amigoSorteado = amigos[indiceSorteado];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;

}