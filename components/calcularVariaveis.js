import React, { useEffect, useState} from 'react';

function CalcularVariaveis() {
    const [pixelSize, setPixelSize] = useState(0);
    

    useEffect(() => {
        const pixelSize_ = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--pixel-size'));
        
        setPixelSize(pixelSize_);
    }, []);

    var PIXEL_SIZE = pixelSize;
    var GRID_CELL = PIXEL_SIZE *16
    var BOARD_SIZE_HEIGHT = GRID_CELL * 13;
    var BOARD_SIZE_WIDTH = GRID_CELL * 15;
    //16 pois eh a quantidade de celulas em um tile
    
    // Dino variaveis
    var DINO_SIZE = PIXEL_SIZE * 24;
    var TILE_SIZE_DINO = PIXEL_SIZE * 16;
    var TILE_CENTER_DINO = TILE_SIZE_DINO / 4;

    // Monster variaveis
    var MONSTER_SIZE = PIXEL_SIZE * 16;
    var TILE_SIZE_MONSTER = PIXEL_SIZE * 16;
    var TILE_CENTER_MONSTER = TILE_SIZE_MONSTER / 16;

    // Bush variaveis
    var TILE_SIZE_BUSH = PIXEL_SIZE * 16;
    var TILE_CENTER_BUSH = PIXEL_SIZE;

    // Egg variaveis
    var TILE_SIZE_EGG = PIXEL_SIZE * 16;
    var TILE_CENTER_EGG = PIXEL_SIZE;

    return {
        PIXEL_SIZE,
        DINO_SIZE,
        MONSTER_SIZE,
        TILE_SIZE_BUSH,
        TILE_CENTER_BUSH,
        TILE_SIZE_DINO,
        TILE_SIZE_MONSTER,
        TILE_CENTER_DINO,
        TILE_CENTER_MONSTER,
        TILE_SIZE_EGG,
        TILE_CENTER_EGG,
        BOARD_SIZE_HEIGHT,
        BOARD_SIZE_WIDTH,
        GRID_CELL,
    };
}

export default CalcularVariaveis;