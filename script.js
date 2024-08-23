const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
    enunciado: "Na sua opinião, como a agricultura sustentável pode influenciar a disponibilidade e o custo de alimentos no mercado de trabalho atual?",
    alternativas:[
        {
            texto:"Reduzindo os custos de produção, tornando os alimentos mais acessíveis.",
            afirmacao:"Reduzir os custos de produção é uma estratégia eficaz para tornar os alimentos mais acessíveis,promovendo uma alimentação saudável e econômica para todos."
        },
        {
            texto:"Aumentando a dependência de agrotóxicos e fertilizantes sintéticos para maximizar o rendimento.",
            afirmacao:"Aumentar a dependência de agrotóxicos e fertilizantes sintéticos pode maximizar o rendimento das colheitas, mas é crucial considerar os impactos ambientaise a saúde a longo prazo,Controle de Pragas e Doenças: Esses produtos ajudam a proteger as plantas contra pragas e doenças, reduzindo perdas e melhorando a saúde das culturas."
        }
        
    ]
     }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click', ()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);        
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal = afirmacao;
    atual++
    mostraPergunta();
}

mostraPergunta();

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2030...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
