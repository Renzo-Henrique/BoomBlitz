export function handleMoviment(direction, position, direction_img){
    
    if(direction == 'LEFT' || direction == 'ArrowLeft' ){
        return {x: position.x - 1, y: position.y, direction_img: "LEFT", egg: false};

    }else if(direction == 'RIGHT' || direction == 'ArrowRight'){
        return {x: position.x +1, y: position.y,direction_img: "RIGHT", egg:false};

    }else if(direction == 'UP' || direction == 'ArrowUp'){
        return {x: position.x, y: position.y - 1,direction_img: direction_img, egg: false};

    }else if(direction == 'DOWN' || direction == 'ArrowDown'){
        return {x: position.x, y: position.y + 1,direction_img: direction_img, egg: false};
    }
    else{
        return{x: position.x, y: position.y, direction_img: direction_img, egg: false}
    }
    
}

// objeto para as colisoes
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

export var CANVAS = [
    [BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD],
    [BD, DI, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, DM, FL, BD],
    [BD, FL, RK, FL, RK, FL, RK, FL, RK, FL, RK, KY1, RK, FL, BD],
    [BD, FL, FL, FL, FL, FL, FL, SM, FL, FL, FL, BS, FL, FL, BD],
    [BD, FL, RK, FL, RK, FL, RK, FL, RK, FL, RK, FL, RK, FL, BD],
    [BD, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, BD],
    [BD, FL, RK, BS, RK, FL, RK, FL, RK, FL, RK, FL, RK, FL, BD],
    [BD, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, BD],
    [BD, FL, RK, FL, RK, FL, RK, FL, RK, FL, RK, FL, RK, FL, BD],
    [BD, FL, FL, FL, FL, BS, FL, FL, FL, FL, FL, FL, BS, FL, BD],
    [BD, FL, RK, FL, RK, SM, RK, FL, RK, FL, RK, DM, RK, FL, BD],
    [BD, SM, FL, FL, FL, FL, FL, FL, FL, FL, KY2, FL, FL, DM, BD],
    [BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD],
];


import {Ewalker} from '../../settings/constants'

export function CheckValidMoviment( nextPosition, walker){
    const canvasValue = CANVAS[nextPosition.y][nextPosition.x];

    let result = null;

    // Obtem movimentos validos
    if(walker === Ewalker.DINO){
        result = getDinoValidMoves(canvasValue);
    } else if(walker === Ewalker.EGG){
        result = getEggValidMoves(canvasValue);
    }
    else{
        result = getMonsterValidMoves(canvasValue)
    }

    return result;
}


function getDinoValidMoves(canvasValue){
    // Eh valido andar em floor, demon e slime
    // morre no demon e slime
    //mandinga pra resover problema do tile inicial: canvasValue == Ecanvas.DINO
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

function getMonsterValidMoves(canvasValue){
    // Atualizar dead para ser quando ele encosta na bomba
    // Valido andar em floor e dino
    return{
        valid: canvasValue == Ecanvas.FLOOR || canvasValue == Ecanvas.DINO,
        dead: false,
        explosion: false,
        kill: canvasValue == Ecanvas.DINO,
        key: false,
    }
}

function getEggValidMoves(canvasValue){
    // Atualizar dead para ser quando ele encosta na bomba
    // Valido andar em floor e dino
    return{
        valid: false,
        dead: false,
        explosion: true,
        kill: false,
        key: false,
    }
}
