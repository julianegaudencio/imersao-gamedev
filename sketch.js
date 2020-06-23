let imagemCenario;
let imagemPersonagem;
let cenario;
let somdoJogo;
let personagem;

function preload() {
    imagemCenario = loadImage('imagens/cenario/floresta.png');
    imagemPersonagem = loadImage('imagens/personagem/correndo.png');
    somdoJogo = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    cenario = new Cenario(imagemCenario, 3);
    personagem = new Personagem(imagemPersonagem);
    frameRate(40);
    somdoJogo.loop();
}

function draw() {
    cenario.exibe();
    cenario.move();
  
    personagem.exibe();
}