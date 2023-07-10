import React from 'react'
import Tile from './Tile/tile'
import {CANVAS} from '../canvas/canvas'

function getCanvasMap(){
    const tilesComponent = [];

    for(let y =0; y < 1;y++){
        const canvasY = CANVAS[y];

        for(let x = 0; y < canvasY.length; x++){
            const canvasYX = canvasY[x];
            
            const position = { x: x, y:y};
            const text = canvasY[x] || canvasYX;
        
            tilesComponent.push(<Tile position ={position} text = {text} />)
        }
    }

    return tilesComponent;
}

function Debugger(){

    //const tiles = getCanvasMap();
    
    return(
        <div>
            {/*tiles*/}
        </div>

    );
}

export default Debugger;