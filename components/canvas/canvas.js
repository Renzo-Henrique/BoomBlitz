/** @brief Função responsável por retornar a própima posição com base na direção fornecida.
 *  @param direction A direção do movimento (LEFT, RIGHT, UP, DOWN) ou evento de teclado
 *  (ArrowLeft, ArrowRight, ArrowUp, ArrowDown) ou nada.
 *  @param position As coordenadas atuais (x e y) da posição.
 *  @param direction_img A direção atual da imagem.
 *  @return Um objeto contendo as coordenadas atualizadas, a direção da imagem e um indicador de ovo.
 *  @see Ecanvas
 */
export function handleMoviment(direction, position, direction_img){

    /* Nota-se que todos as entidades do Jogo estão posiciondas no estilo */
    /* top: y, left: x */
    /* Portanto é a distância da entidade até o canto esquerdo e o topo do mapa */
    /* Logo, para se aproximar da esquerda (ir para esquerda) é diminuído o valor */
    /* para se afastar da esquerda (ir para a direita) é aumentado o valor */
    /* Mesma Lógica para cima e baixo */

    if(direction == 'LEFT' || direction == 'ArrowLeft' ){
        // Movimento para esquerda
        return {x: position.x - 1, y: position.y, direction_img: "LEFT", egg: false};

    }else if(direction == 'RIGHT' || direction == 'ArrowRight'){
        // Movimento para direita
        return {x: position.x +1, y: position.y,direction_img: "RIGHT", egg:false};

    }else if(direction == 'UP' || direction == 'ArrowUp'){
        // Movimento para cima
        return {x: position.x, y: position.y - 1,direction_img: direction_img, egg: false};

    }else if(direction == 'DOWN' || direction == 'ArrowDown'){
        // Movimento para baixo
        return {x: position.x, y: position.y + 1,direction_img: direction_img, egg: false};
    }
    else{
        return{x: position.x, y: position.y, direction_img: direction_img, egg: false}
    }
}

// Enum representando possíveis valores na matriz de colisão
export const Ecanvas = {
    FLOOR: 0,
    DEMON: 1,
    SLIME: 2,
    KEY1: 3,
    KEY2: 13,
    PORTAL: 4,
    DINO: 5,
    EGG: 6,
    BUSH: 7,
    ROCK: 8,
    BORDER: 9,
}

// Simplificando o nome dos valores para visualizar melhor na matriz de colisão
const FL = Ecanvas.FLOOR;
const BD = Ecanvas.BORDER;
const RK = Ecanvas.ROCK;
const BS = Ecanvas.BUSH;
const DM = Ecanvas.DEMON;
const SM = Ecanvas.SLIME;
const KY1 = Ecanvas.KEY1;
const KY2 = Ecanvas.KEY2;
const PL = Ecanvas.PORTAL;
const DI = Ecanvas.DINO;
const OV = Ecanvas.EGG;

// matriz de colisão com cada valor
export var CANVAS = [
    [BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD],
    [BD, DI, FL, FL, BS, FL, FL, FL, FL, FL, FL, FL, DM, FL, BD],
    [BD, FL, RK, FL, RK, FL, RK, FL, RK, FL, RK, KY1, RK, FL, BD],
    [BD, FL, FL, FL, FL, FL, FL, SM, FL, FL, FL, BS, FL, FL, BD],
    [BD, FL, RK, FL, RK, FL, RK, FL, RK, FL, RK, FL, RK, FL, BD],
    [BD, FL, FL, FL, DM, FL, FL, FL, FL, FL, FL, FL, FL, FL, BD],
    [BD, FL, RK, BS, RK, FL, RK, FL, RK, BS, RK, FL, RK, FL, BD],
    [BD, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, BD],
    [BD, FL, RK, FL, RK, BS, RK, BS, RK, FL, RK, BS, RK, FL, BD],
    [BD, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, BS, FL, BD],
    [BD, FL, RK, FL, RK, SM, RK, FL, RK, DM, RK, FL, RK, FL, BD],
    [BD, SM, FL, FL, BS, FL, FL, FL, FL, FL, KY2, FL, FL, DM, BD],
    [BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD],
];


import {Ewalker} from '../../settings/constants'
/**
 * @brief Verifica se um movimento é válido com base na próxima posição e no tipo de personagem.
 * @description A função CheckValidMoviment é responsável por verificar se um determinado movimento é válido 
 *  no jogo, levando em consideração a próxima posição, o tipo de personagem em movimento e o valor na posição
 *  do próximo movimento na matriz de colisões.
 * @param {Object} nextPosition - Objeto que representa a próxima posição no cenário.
 * @param {number} nextPosition.x - A coordenada X da próxima posição.
 * @param {number} nextPosition.y - A coordenada Y da próxima posição.
 * @param {number} walker - O tipo de personagem em movimento. (Olhar Ewalker)
 * @returns {Object} - Objeto contendo informações sobre a validade do movimento.
 * @typedef {Object} ValidationResult
 * @property {boolean} valid - Indica se o movimento é válido.
 * @property {boolean} dead - Indica se o movimento resulta em morte do personagem.
 * @property {boolean} explosion - Indica se o movimento resulta em uma explosão.
 * @property {boolean} kill - Indica se o movimento resulta na morte de outro personagem.
 * @property {boolean} key1 - Indica se o movimento resulta na interação com uma chave do tipo 1.
 * @property {boolean} key2 - Indica se o movimento resulta na interação com uma chave do tipo 2.
 */
export function CheckValidMoviment( nextPosition, walker){
     // Obtém o valor do canvas da próxima posição
    const canvasValue = CANVAS[nextPosition.y][nextPosition.x];

    let result = null;
    // Verifica o tipo de personagem (walker) e obtém as validações de retorno correspondentes
    if(walker === Ewalker.DINO){
        result = getDinoValidMoves(canvasValue);
    } else if(walker === Ewalker.EGG){
        result = getEggValidMoves(canvasValue);
    }
    else if(walker === Ewalker.KEY){
        result = getKeyValidMoves(canvasValue);
    }
    else{
        result = getMonsterValidMoves(canvasValue)
    }

    return result;
}

/**
 * @brief Retorna informações sobre os movimentos válidos para o personagem Dino.
 * A entidade é o dino
 * @param {number} canvasValue - O valor do canvas na posição atual do movimento.
 * @returns {object} Um objeto contendo informações sobre os movimentos válidos.
 * - A propriedade `valid` indica se o movimento é válido.
 * - A propriedade `dead` indica se o movimento resulta na morte da entidade.
 * - A propriedade `explosion` indica se o movimento resulta em uma explosão.
 * - A propriedade `kill` indica se o movimento resulta na morte de outra entidade.
 * - A propriedade `key1` indica se o movimento resulta na obtenção da chave 1.
 * - A propriedade `key2` indica se o movimento resulta na obtenção da chave 2.
 */
function getDinoValidMoves(canvasValue){
    return{
        valid: canvasValue == Ecanvas.FLOOR || canvasValue == Ecanvas.DEMON || canvasValue == Ecanvas.SLIME 
        || canvasValue == Ecanvas.KEY1 || canvasValue == Ecanvas.KEY2,
        dead: canvasValue == Ecanvas.DEMON || canvasValue == Ecanvas.SLIME,
        explosion: false,
        kill: false,
        key1: canvasValue == Ecanvas.KEY1,
        key2: canvasValue == Ecanvas.KEY2,
    }
}

/**
 * @brief Retorna informações sobre os movimentos válidos para a entidade Monstro.
 * A entidade é o Monstro
 * @param {number} canvasValue - O valor do canvas na posição atual do movimento.
 * @returns {object} Um objeto contendo informações sobre os movimentos válidos.
 * - A propriedade `valid` indica se o movimento é válido.
 * - A propriedade `dead` indica se o movimento resulta na morte da entidade.
 * - A propriedade `explosion` indica se o movimento resulta em uma explosão.
 * - A propriedade `kill` indica se o movimento resulta na morte de outra entidade.
 * - A propriedade `key1` indica se o movimento resulta na obtenção da chave 1.
 * - A propriedade `key2` indica se o movimento resulta na obtenção da chave 2.
 */
function getMonsterValidMoves(canvasValue){
    return{
        valid: canvasValue == Ecanvas.FLOOR || canvasValue == Ecanvas.DINO,
        dead: false,
        explosion: false,
        kill: canvasValue == Ecanvas.DINO,
        key1: false,
        key2: false,
    }
}

/**
 * @brief Retorna informações sobre os movimentos válidos para a entidade Ovo.
 * A entidade é o Ovo
 * @param {number} canvasValue - O valor do canvas na posição atual do movimento.
 * @returns {object} Um objeto contendo informações sobre os movimentos válidos.
 * - A propriedade `valid` indica se o movimento é válido.
 * - A propriedade `dead` indica se o movimento resulta na morte da entidade.
 * - A propriedade `explosion` indica se o movimento resulta em uma explosão.
 * - A propriedade `kill` indica se o movimento resulta na morte de outra entidade.
 * - A propriedade `key1` indica se o movimento resulta na obtenção da chave 1.
 * - A propriedade `key2` indica se o movimento resulta na obtenção da chave 2.
 */
function getEggValidMoves(canvasValue){
    return{
        valid: false,
        dead: false,
        explosion: true,
        kill: false,
        key1: false,
        key2: false,
    }
}

/**
 * @brief Retorna informações sobre os movimentos válidos para a entidade Key.
 * A entidade é o Key
 * @param {number} canvasValue - O valor do canvas na posição atual do movimento.
 * @returns {object} Um objeto contendo informações sobre os movimentos válidos.
 * - A propriedade `valid` indica se o movimento é válido.
 * - A propriedade `dead` indica se o movimento resulta na morte da entidade.
 * - A propriedade `explosion` indica se o movimento resulta em uma explosão.
 * - A propriedade `kill` indica se o movimento resulta na morte de outra entidade.
 * - A propriedade `key1` indica se o movimento resulta na obtenção da chave 1.
 * - A propriedade `key2` indica se o movimento resulta na obtenção da chave 2.
 */
function getKeyValidMoves(canvasValue){
    return{
        valid: false,
        dead: false,
        explosion: false,
        kill: false,
        key1: canvasValue == Ecanvas.DINO,
        key2: canvasValue == Ecanvas.DINO,
    }
}

