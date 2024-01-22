let listaDeNumeroSecreto = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = Number(document.querySelector('input').value);
    
    if(chute != ''){
        if (chute == numeroSecreto){
            let palavraTentativas = tentativas == 1 ? 'tentativa' : 'tentativas';
            let mensagem = `Você acertou em ${tentativas} ${palavraTentativas}`;
            exibirTextoNaTela('h1', 'Você acertou!');
            exibirTextoNaTela('p', mensagem);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else{
            if (chute > numeroSecreto){
                exibirTextoNaTela('p', 'Seu chute foi maior que o número secreto');
            }
            else{
                exibirTextoNaTela('p', 'Seu chute foi menor que o número secreto');
            }
        }    
        tentativas++;
        limparCampo();
    }
}

function jogarNovamente(){
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
    verificarChute();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function gerarNumeroAleatorio() {
    if (listaDeNumeroSecreto.length == 10){
        listaDeNumeroSecreto = [];
    }

    let numeroSorteado = parseInt(Math.random() * 10 + 1);

    if (listaDeNumeroSecreto.includes(numeroSorteado)){
        console.log(listaDeNumeroSecreto);
        return gerarNumeroAleatorio();
    } else{
        console.log(listaDeNumeroSecreto);
        listaDeNumeroSecreto.push(numeroSorteado);
        return numeroSorteado;
    }
}