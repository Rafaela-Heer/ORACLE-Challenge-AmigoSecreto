let nomes = [];

function adicionarAmigo(){
    let inputAmigo = document.getElementById('amigo')
    let nomeAmigo = inputAmigo.value;


    if(!nomeAmigo) {
        alert("Digite o nome que você quer adicionar!");
        return;
    }
    nomes.push(nomeAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    atualizarLista();
}


function atualizarLista(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < nomes.length; i++){
        let item = document.createElement("li");
        item.textContent = nomes[i];
        listaAmigos.appendChild(item);
    }
}


function sortearAmigo(){
    if(nomes.length === 0){
        alert("Nenhum amigo adicionado.")
        return;
    }
    let escolhido = nomes[Math.floor(Math.random() * nomes.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML= `O amigo sorteado foi: ${escolhido}`

}

function novoSorteio(){
    let limparLista = document.getElementById("listaAmigos");
    limparLista.innerHTML = "";
    let limparResultado = document.getElementById("resultado");
    limparResultado.innerHTML= "";
    nomes = [];
}