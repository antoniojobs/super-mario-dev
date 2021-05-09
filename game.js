console.log('Super-mario-dev version 0.0.1 ™ ®');

const sprites = new Image();
sprites.src = './assets/sprites/smw_mario_sheet.png';
const canvas = document.querySelector('canvas');
const contexto =  canvas.getContext('2d');

const resize = 2;
const spaceA = 25;
const spaceB = 19;

const mario = {
    sprites,
    sx: 49, //sx, sy inicio da imagem
    sy: 0,
    sWidth:15, //sW , sH largura e altura
    sHeight:20,
    dx:28, // dx, dy coordenadas iniciar do desenho no canvas
    dy:25,
    dWidth:15, // tamanho do sprite
    dHeight:20,
    desenha(){
        contexto.drawImage(
            sprites,
            mario.sx, mario.sy, //sx, sy inicio da imagem
            mario.sWidth, mario.sHeight, //sW , sH largura e altura
            mario.dx, mario.dy, // dx, dy coordenadas iniciar do desenho no canvas
            (mario.dWidth)*resize, (mario.dHeight)*resize, // tamanho do sprite
        );
    }
}

function loop() {
    mario.desenha();
    mario.dx +=1;
    requestAnimationFrame(loop);
}

loop();
// void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);