import React, { useEffect, useState} from 'react';
import Dino from './dino'
import Demon from './demon'
import Slime from './slime'
import Bush from './bush'
import Egg from './egg'
import Key from './key'
import {CANVAS, Ecanvas} from '../canvas/canvas'
// import Monster from './monster'
import { BOARD_SIZE_HEIGHT, BOARD_SIZE_WIDTH} from '../../settings/constants';
import CalcularVariaveis from '../calcularVariaveis';
import { randomBoard } from '../../settings/constants';

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
            else if( text  === Ecanvas.KEY1 ){
                array.push(<Key key={key} position ={position} text = {text} key_ ={Ecanvas.KEY1}/>)
            }
            else if(  text  === Ecanvas.KEY2){
                array.push(<Key key={key} position ={position} text = {text} key_ ={Ecanvas.KEY2}/>)
            }
        }
    }

    return array;
}

const elements = getCanvasMap();
// LIMITES do board: x = 12, y = 10


/**
 * @brief Faz a montagem do tabuleiro com uma background aleatória,
 *  
 */
function Board() {
    // Sprite do board
    const [boardSprite, setBoardSprite] = useState(randomBoard);

    useEffect(() => {
        setBoardSprite(randomBoard); // Atualiza o valor de dinoSprite no estado
    }, []); // [] como segundo argumento para executar o useEffect apenas uma vez na montagem


    const variaveis = CalcularVariaveis();
    const board_height = variaveis.BOARD_SIZE_HEIGHT;
    const board_width = variaveis.BOARD_SIZE_WIDTH;
    const boardStyle = {
        imageRendering: 'pixelated',
        backgroundImage: `url("/assets/boards/tab${boardSprite}.png")`,
        backgroundSize: '100%',
        width: board_width,
        height: board_height,
        position: 'relative',
    };
    console.log('background' + boardSprite);

    return (
        <div style={boardStyle}>
            {elements}
        </div>
    );
}

export default Board;