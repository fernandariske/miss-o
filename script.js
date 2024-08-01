const caixaprincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativa = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".caixa-resultado");
const perguntas = [
    {
    enunciado: "Na sua opinião, oque é o index.html?"
    alternativas:[
        (Linguagem de Marcação de Hipertexto) é o código que você usa para estruturar uma página web e seu conteúdo.
        é uma linguagem de programação que permite a você implementar itens complexos em páginas web.
    ]
    },
{
    enunciado: qual
    alternativas:[
        ;
        ;
 ]
  {,
    }
 enunciado: qual
    alternativas:[
.
.
]
}
];


let atual =0;
let perguntasAtual

function mostraPerguntas() {
    perguntasAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntasAtual.enunciado;
    caixaAlternativa.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntasAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendchild(botaoAlternativas);
      
        }

}

mostraPerguntas();
