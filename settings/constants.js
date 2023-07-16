/**
 * Arquivo contendo as constantes usadas no trabalho assim como funções randômicas
 */


/**
 * @brief Enum contendo strings de entidades usadas no jogo
 */
export const Ewalker = {
    DINO: "dino",
    MONSTER: "monster",
    KEY: "key",
}

/**
 * @brief Enum contendo strings de sprites de dino usadas no jogo
 */
export const EdinoSprite = {
    1: "azul",
    2: "verde",
    3: "amarelo",
    4: "vermelho",
}

/**
 * @brief Enum contendo strings de sprites de dino usadas no jogo
 */
export const EslimeSprite = {
    1: "brown",
    2: "green",
}

/**
 * @brief Função que gera números aleatórios para assets de dinos na pasta public
 * @returns Um valor aleatório de 1 a 4 baseado nos segundos atuais
 */
export function randomDino(){
    const currentTime = new Date();
    const seconds = currentTime.getSeconds();
    const result = Math.trunc((seconds/ 15 )%4) + 1;
    console.log("random dino: "+EdinoSprite[result]);
    return result;
}

/**
 * @brief Função que gera números aleatórios para assets de tabuleiros na pasta public
 * @returns Um valor aleatório de 1 a 2 baseado nos minutos atuais\n
 * minuto % 2 + 1
 */
export function randomBoard(){
    const currentTime = new Date();
    const minutes = currentTime.getMinutes();
    const result = Math.trunc((minutes )%2) + 1;
    console.log("random board: "+result);
    return result;
}

// Constante indicando número de tiles na largura do tabuleiro
export const NUMBER_TILE_WIDTH = 15;
// Constante indicando número de tiles na altura do tabuleiro
export const NUMBER_TILE_HEIGHT = 13;

  
