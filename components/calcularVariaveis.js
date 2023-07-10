import React, { useEffect, useState} from 'react';
import useInterval from '@use-it/interval'
function calcularVariaveis() {
    const [pixelSize, setPixelSize] = useState(0);
    

    useEffect(() => {
        const pixelSize_ = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--pixel-size'));
        
        setPixelSize(pixelSize_);
    }, []);

    var PIXEL_SIZE = pixelSize;
    //16 pois eh a quantidade de celulas em um tile
    // Dino variaveis
    var DINO_SIZE = PIXEL_SIZE * 24;
    var TILE_SIZE_DINO = PIXEL_SIZE * 16;
    var TILE_CENTER_DINO = TILE_SIZE_DINO / 2 + DINO_SIZE / 8;

    // Monster variaveis
    var MONSTER_SIZE = PIXEL_SIZE * 16;
    var TILE_SIZE_MONSTER = PIXEL_SIZE * 16;
    var TILE_CENTER_MONSTER = TILE_SIZE_MONSTER / 2 + MONSTER_SIZE / 2;

    useEffect(() => {
        const pixelSize_ = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--pixel-size'));
        
        setPixelSize(pixelSize_);
        PIXEL_SIZE = pixelSize;
        DINO_SIZE = PIXEL_SIZE * 24;
        MONSTER_SIZE = PIXEL_SIZE * 16;
        TILE_SIZE_DINO = PIXEL_SIZE * 16;
        TILE_SIZE_MONSTER = PIXEL_SIZE * 24;
        TILE_CENTER_DINO = PIXEL_SIZE * 16;
        TILE_CENTER_MONSTER = PIXEL_SIZE * 16;
    
        // Utilize as variáveis calculadas como desejar
    
        // Exemplo de impressão no console
        /*console.log(PIXEL_SIZE);
        console.log(DINO_SIZE);
        console.log(MONSTER_SIZE);
        console.log(TILE_SIZE);
        console.log(TILE_CENTER_DINO);
        console.log(TILE_CENTER_MONSTER);*/
      }, [pixelSize]);
    /*const PIXEL_SIZE = pixelSize;
    const DINO_SIZE = PIXEL_SIZE * 24;
    const MONSTER_SIZE = PIXEL_SIZE * 16;
    const TILE_SIZE = PIXEL_SIZE * 16;
    const TILE_CENTER_DINO = TILE_SIZE / 2 + DINO_SIZE / 8;
    const TILE_CENTER_MONSTER = TILE_SIZE / 2 + MONSTER_SIZE / 8;
    */
    return {
        PIXEL_SIZE,
        DINO_SIZE,
        MONSTER_SIZE,
        TILE_SIZE_DINO,
        TILE_SIZE_MONSTER,
        TILE_CENTER_DINO,
        TILE_CENTER_MONSTER,
    };
}

export default calcularVariaveis;