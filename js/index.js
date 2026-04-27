let frases = [
    "Que a Força esteja com você! - Star Wars",
"Eu sou o rei do mundo! - Titanic",
"A vida é como uma caixa de chocolates, você nunca sabe o que vai encontrar - Forrest Gump",
"Com grandes poderes vêm grandes responsabilidades - Homem-Aranha",
"Até o infinito... e além! - Toy Story",
"Por Wakanda! - Pantera Negra",
"Não importa o que aconteça amanhã, ou pelo resto da minha vida, agora estou feliz porque te amo - Feitiço do Tempo"
];

let cliques = 0;

function gerarFrases() {
    let indice = Math.floor(Math.random() * frases.length);

    let fraseEscolhida = frases[indice];

    cliques++;

    document.getElementById("frase").innerText = fraseEscolhida;
    
    document.getElementById("contador").innerText = "Frases Geradas: " + cliques;
}