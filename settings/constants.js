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
export function randomDino(){
    const currentTime = new Date();
    const seconds = currentTime.getSeconds();
    return Math.trunc((seconds/ 15 )%4) + 1;
}

// Gerando dinos aleatórios
export function randomBoard(){
    const currentTime = new Date();
    const minutes = currentTime.getMinutes();
    return Math.trunc((minutes )%2) + 1;
}

  
