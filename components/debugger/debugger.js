import React from 'react'
import Tile from './Tile/tile'
import {CANVAS} from '../canvas/canvas'

function getCanvasMap(){
    const tilesComponent = [];

    for(let x = 0; x < CANVAS.length;x++){
        const canvasX = CANVAS[x];

        for(let y = 0; y < canvasX.length; y++){
            const canvasXY = canvasX[y];
            
            const position = { x: x, y:y};
            const text = canvasX[y] || canvasXY;
        
            tilesComponent.push(<Tile position ={position} text = {text} />)
        }
    }

    return tilesComponent;
}

function Debugger(){

    const tiles = getCanvasMap();
    
    return(
        <div>
            {tiles}
        </div>

    );
}

export default Debugger;