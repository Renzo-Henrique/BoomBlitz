import React from 'react';
import Dino from './dino'
import Demon from './demon'
import Slime from './slime'
import Bush from './bush'
import Egg from './egg'
import Key from './key'
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
            const key = `${x}-${y}`
            
            if( text  === Ecanvas.DINO){
                array.push(<Dino key={key} position ={position} text = {text} />)
            }
            else if( text  === Ecanvas.DEMON){
                array.push(<Demon key={key} position ={position} text = {text} />)
            }
            else if( text  === Ecanvas.SLIME){
                array.push(<Slime key={key} position ={position} text = {text} />)
            }
            else if( text  === Ecanvas.BUSH){
                array.push(<Bush key={key} position ={position} text = {text} />)
            }
            else if( text  === Ecanvas.EGG){
                array.push(<Egg key={key} position ={position} text = {text} />)
            }
            else if( text  === Ecanvas.KEY1 || text  === Ecanvas.KEY2){
                array.push(<Key key={key} position ={position} text = {text} />)
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