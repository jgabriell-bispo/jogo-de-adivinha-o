let listaNumerosSorteados =[];
let numeroMax = 100;
let numeroSecreto = gerarNumAleatorio();
let tentativas = 1;
atualizarMensagem()
console.log (numeroSecreto);
function mostrarTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,"Brazilian Portuguese Female", {rate:1.2});
}

function atualizarMensagem(){
mostrarTextoTela("h1", "Jogo de adivinhação");
mostrarTextoTela("p", "Escolha um número entre 1 e " + numeroMax);
}

function verificarChute() {
    let chute = document.querySelector("input").value
    if(chute == numeroSecreto){
        mostrarTextoTela("h1","PARABÉNS");
        let palavraTentativa = tentativas > 1 ? " tentativas" : " tentativa";
        let mensagemTentativas = "você conseguiu acertar o número secreto com " + tentativas + palavraTentativa;
        mostrarTextoTela("p",mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
         if (chute > numeroSecreto){
        mostrarTextoTela("p", "O número secreto é menor");
    } else {
        mostrarTextoTela("p", "O número secreto é maior");
    }
     tentativas++;
     liparCampo();
    }
}

function gerarNumAleatorio(){
    let numeroSorteado = parseInt(Math.random() * numeroMax +1);
    let quantidadeDeElementosLista = listaNumerosSorteados.length;

    if (quantidadeDeElementosLista == numeroMax){
        listaNumerosSorteados = [];
    }
    if(listaNumerosSorteados.includes(numeroSorteado)){
        return gerarNumAleatorio();
    } else {
        listaNumerosSorteados.push(numeroSorteado);
        return numeroSorteado; 
    }

}
function liparCampo(){
    chute = document.querySelector("input");
    chute.value ="";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumAleatorio();
    liparCampo();
    tentativas = 1;
    atualizarMensagem();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

