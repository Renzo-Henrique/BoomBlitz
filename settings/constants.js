//IMAGEM é 15x13

export const TILE_SIZE = 48;
export const DINO_SIZE = 72;
export const DEMON_SIZE = 48;
export const SLIME_SIZE = 48;
export const TILE_CENTER = TILE_SIZE/2 + DINO_SIZE/8;
export const TILE_CENTER_MONSTER = TILE_SIZE/2 + SLIME_SIZE/8;
export const TILE_SIZE_PX = '60px';
export const GAME_SIZE_HEIGHT = '100%';
export const GAME_SIZE_WIDTH = '100%';
export const BOARD_SIZE_HEIGHT = TILE_SIZE * 13;
export const BOARD_SIZE_WIDTH = TILE_SIZE * 11;



export const Ewalker = {
    DINO: "dino",
    MONSTER: "monster",
    KEY: "key",
}

// Gerando dinos aleatórios
const currentTime = new Date();
const seconds = currentTime.getSeconds();
let seed = currentTime.getTime(); // Obter o tempo atual em milissegundos como semente
function getRandomDinoSprite() {
    return  Math.trunc((seconds/ 15 )%4) + 1 ; // Algoritmo de gerar números aleatórios
    //return (Math.floor(seed / 58270 * 4) + 1 )%4 + 1; // Retornar um número entre 1 e 4
  }
export let DINO_SPRITE = getRandomDinoSprite();

export function updateDinoSprite() {
    DINO_SPRITE = getRandomDinoSprite();
}

  
