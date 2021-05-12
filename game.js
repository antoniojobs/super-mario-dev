console.log('Super-mario-dev version 0.0.1 ™ ®');

const spritesMap = new Image();
spritesMap.src = './assets/sprites/mapa-1.png';
// spritesMap.src = './assets/sprites/mapa-1.svg';
const canvas = document.querySelector('canvas');
const contexto =  canvas.getContext('2d');

/** */
//tamanhos personagem
let larguraMario=16;
let alturaMario=28;
let distanciaEntre=25+larguraMario;
//tamanhos tela
// width="510" height="446"
const mario = {
    spritesMap,
    coordenadaXSprite: 303, //coordenadaXSprite, sy inicio da imagem
    coordenadaYSprite: 0,
    larguraRecorte:larguraMario, //sW , sH largura e altura
    alturaRecorte:alturaMario,
    posicaoXMapa:50, // posicaoXMapa, dy coordenadas iniciar do desenho no canvas
    posicaoYMapa:336,
    dWidth:larguraMario, // tamanho do sprite
    dHeight:alturaMario,
    desenha(){
        contexto.drawImage(
            spritesMap,
            mario.coordenadaXSprite, mario.coordenadaYSprite, //sx, coordenadaYSprite inicio da imagem
            mario.larguraRecorte, mario.alturaRecorte, //sW , sH largura e altura
            
            mario.posicaoXMapa, mario.posicaoYMapa, // dx, dy coordenadas iniciar do desenho no canvas
            
            mario.dWidth, mario.dHeight, // tamanho do sprite
        );
    }
}

const fundo = {
    spritesMap,
    coordenadaXSprite: 0, //coordenadaXSprite, sy inicio da imagem
    coordenadaYSprite: 0,
    larguraRecorte:255, //sW , sH largura e altura
    alturaRecorte:236,
    posicaoXMapa:0, // posicaoXMapa, dy coordenadas iniciar do desenho no canvas
    posicaoYMapa:0,
    dWidth:255*2, // tamanho do sprite
    dHeight:236*2,
    desenha(){
        contexto.drawImage(
            spritesMap,
            fundo.coordenadaXSprite, fundo.coordenadaYSprite, //sx, coordenadaYSprite inicio da imagem
            fundo.larguraRecorte, fundo.alturaRecorte, //sW , sH largura e altura
            
            fundo.posicaoXMapa, fundo.posicaoYMapa, // dx, dy coordenadas iniciar do desenho no canvas
            
            fundo.dWidth, fundo.dHeight, // tamanho do sprite
        );
    }
}

const chao = {
    spritesMap,
    coordenadaXSprite: 0, //coordenadaXSprite, sy inicio da imagem
    coordenadaYSprite: 191,
    larguraRecorte:255, //sW , sH largura e altura
    alturaRecorte:236,
    posicaoXMapa:0, // posicaoXMapa, dy coordenadas iniciar do desenho no canvas
    posicaoYMapa:355,
    dWidth:255*2, // tamanho do sprite
    dHeight:236*2,
    desenha(){
        contexto.drawImage(
            spritesMap,
            chao.coordenadaXSprite, chao.coordenadaYSprite, //sx, coordenadaYSprite inicio da imagem
            chao.larguraRecorte, chao.alturaRecorte, //sW , sH largura e altura
            
            chao.posicaoXMapa, chao.posicaoYMapa, // dx, dy coordenadas iniciar do desenho no canvas
            
            chao.dWidth, chao.dHeight, // tamanho do sprite
        );
    }
}

function loop() {
    mario.desenha() ;
    // fundo.desenha() ;
    chao.desenha() ;
    requestAnimationFrame(loop);
}
loop();
// void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);