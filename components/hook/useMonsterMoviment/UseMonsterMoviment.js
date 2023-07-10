import React from 'react';
import useEventListener from '@use-it/event-listener';
import useInterval from '@use-it/interval'
import {Ewalker} from '../../../settings/constants';
import {CanvasContext} from '../../canvas/canvasContext'

function UseMonsterMoviment(initialPosition){
    const canvasContext = React.useContext(CanvasContext);
    const [positionState, updatePositionState] = React.useState(initialPosition);
    const [direction, updateDirectionState] = React.useState('RIGHT');
    

    //npm install --save @use-it/interval
    const enumMoviment = {
        0: "LEFT",
        1: "RIGHT",
        2: "UP",
        3: "DOWN",
    }
    useInterval(function move(){
        // Gera um movimento aleatório
        var randomDirection = Math.floor(Math.random() * 4 );

        const moviment = canvasContext.updateCanvas(enumMoviment[randomDirection], positionState, Ewalker.MONSTER, direction);

        if (moviment.nextMove.valid){
            updatePositionState(moviment.nextPosition);
        }
        updateDirectionState(moviment.direction_img);

    }, 1000);
    /*useEventListener('keydown', (event) =>{
        //Faz movimentaçao
        if(event.key == 'ArrowLeft'){
            updatePositionState({x: positionState.x - 1, y: positionState.y,});
            updateDirectionState("LEFT");
        }else if(event.key == 'ArrowRight'){
            updatePositionState({x: positionState.x +1, y: positionState.y,});
            updateDirectionState("RIGHT");
        }else if(event.key == 'ArrowUp'){
            updatePositionState({x: positionState.x, y: positionState.y - 1,});
        }else if(event.key == 'ArrowDown'){
            updatePositionState({x: positionState.x, y: positionState.y + 1,});
        }

    })*/

    return {
        position: positionState,
        direction: direction,
    }
}

export default UseMonsterMoviment;