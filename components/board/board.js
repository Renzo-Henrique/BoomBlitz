import React from 'react';
import Dino from './dino'
import Demon from './demon'
import Slime from './slime'
import Bush from './bush'
import {CANVAS, Ecanvas} from '../canvas/canvas'
// import Monster from './monster'
import { BOARD_SIZE_HEIGHT, BOARD_SIZE_WIDTH} from '../../settings/constants';
import styles from '../../styles/board.module.css';


function getCanvasMap(){
    const array = [];

    for(let y = 0; y < CANVAS.length;y++){
        const canvasY = CANVAS[y];

        for(let x = 0; x < canvasY.length; x++){
            const canvasYX = canvasY[x];
            
            const position = { x: x, y:y};
            const text = canvasY[x] || canvasYX;
            
            if( text  === Ecanvas.DINO){
                array.push(<Dino position ={position} text = {text} />)
            }
            else if( text  === Ecanvas.DEMON){
                array.push(<Demon position ={position} text = {text} />)
            }
            else if( text  === Ecanvas.SLIME){
                array.push(<Slime position ={position} text = {text} />)
            }
            else if( text  === Ecanvas.BUSH){
                array.push(<Bush position ={position} text = {text} />)
            }
        }
    }

    return array;
}

const elements = getCanvasMap();
// LIMITES do board: x = 12, y = 10
function Board() {
    
    return (
        <div className={styles.Board}>
            {elements}
        </div>
    );
}

export default Board;