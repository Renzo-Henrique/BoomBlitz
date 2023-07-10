import React from 'react'
import Tile from './Tile/tile'
import {CANVAS} from '../canvas/canvas'
import { CanvasContext } from '../canvas/canvasContext';


function getCanvasMap(canvas){
    const tilesComponent = [];

    for(let x = 0; x < canvas.length;x++){
        const canvasX = canvas[x];

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

    const canvasContext = React.useContext(CanvasContext);
    const tiles = getCanvasMap(canvasContext.canvas);
    
    return(
        <div>
            {tiles}
        </div>

    );
}

export default Debugger;