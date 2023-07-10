export function handleMoviment(direction, position, direction_img){
    
    if(direction == 'LEFT' || direction == 'ArrowLeft' ){
        return {x: position.x - 1, y: position.y, direction_img: "LEFT"};

    }else if(direction == 'RIGHT' || direction == 'ArrowRight'){
        return {x: position.x +1, y: position.y,direction_img: "RIGHT"};

    }else if(direction == 'UP' || direction == 'ArrowUp'){
        return {x: position.x, y: position.y - 1,direction_img: direction_img};

    }else if(direction == 'DOWN' || direction == 'ArrowDown'){
        return {x: position.x, y: position.y + 1,direction_img: direction_img};
    }
    //implementar menu de jogo!
    else if(direction === "Escape"){

    }
}

// objeto para as colisoes
export const Ecanvas = {
    FLOOR: 0,
    DEMON: 1,
    SLIME: 2,
    KEY: 3,
    PORTAL: 4,
    DINO: 5,
    OVO: 6,
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
const KY = Ecanvas.KEY;
const PL = Ecanvas.PORTAL;
const DI = Ecanvas.DINO;

export const CANVAS = [
    [BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD],
    [BD, DI, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, BD],
    [BD, FL, RK, FL, RK, FL, RK, FL, RK, FL, RK, FL, RK, FL, BD],
    [BD, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, BD],
    [BD, FL, RK, FL, RK, FL, RK, FL, RK, FL, RK, FL, RK, FL, BD],
    [BD, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, BD],
    [BD, FL, RK, FL, RK, FL, RK, FL, RK, FL, RK, FL, RK, FL, BD],
    [BD, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, BD],
    [BD, FL, RK, FL, RK, FL, RK, FL, RK, FL, RK, FL, RK, FL, BD],
    [BD, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, BS, FL, BD],
    [BD, FL, RK, FL, RK, FL, RK, FL, RK, FL, RK, FL, RK, FL, BD],
    [BD, SM, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, DM, BD],
    [BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD, BD],
];


import {Ewalker} from '../../settings/constants'

export function CheckValidMoviment( nextPosition, walker){
    const canvasValue = CANVAS[nextPosition.y][nextPosition.x];

    let result = null;

    // Obtem movimentos validos
    if(walker === Ewalker.DINO){
        result = getDinoValidMoves(canvasValue);
    } else{
        result = getMonsterValidMoves(canvasValue)
    }

    return result;
}


function getDinoValidMoves(canvasValue){
    // Eh valido andar em floor, demon e slime
    // morre no demon e slime
    return{
        valid: canvasValue == Ecanvas.FLOOR || canvasValue == Ecanvas.DEMON || canvasValue == Ecanvas.SLIME,
        dead: canvasValue == Ecanvas.DEMON || canvasValue == Ecanvas.SLIME,

    }
}

function getMonsterValidMoves(canvasValue){
    // Atualizar dead para ser quando ele encosta na bomba
    // Valido andar em floor e dino
    return{
        valid: canvasValue == Ecanvas.FLOOR || canvasValue == Ecanvas.DINO,
        dead: false,

    }
}
