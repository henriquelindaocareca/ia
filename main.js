const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado = "É responsável dar comida típica para animais em adoção?",
        Alternativas: [
            {
                texto: "Sim",
                afirmação: "Faz com que o animal não passe fome."
            },
            {
                texto: "Não",
                afirmação: "Faz mal ao animal e pode levar o mesmo à óbito."
            }
        ]
    },
    {
        enunciado = "Como o acompanhamento veterinário pode influenciar a saúde dos animais em desfiles culturais e como a coleta seletiva ajuda para a sustentabilidade desses eventos?",
        Alternativas: [
            {
                texto: "Pode ajudar",
                afirmação: "afirmação"
            }
        ]
    }
]

let atual = 0
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
    }
}

