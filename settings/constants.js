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
 * @brief Função que gera números aleatórios para assets de dinos na pasta public
 * @returns Um valor aleatório de 1 a 4 baseado nos segundos atuais
 */
export function randomDino(){
    const currentTime = new Date();
    const seconds = currentTime.getSeconds();
    return Math.trunc((seconds/ 15 )%4) + 1;
}

/**
 * @brief Função que gera números aleatórios para assets de tabuleiros na pasta public
 * @returns Um valor aleatório de 1 a 2 baseado nos minutos atuais\n
 * minuto % 2 + 1
 */
export function randomBoard(){
    const currentTime = new Date();
    const minutes = currentTime.getMinutes();
    return Math.trunc((minutes )%2) + 1;
}

  
