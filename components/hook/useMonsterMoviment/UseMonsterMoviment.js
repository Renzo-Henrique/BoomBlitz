import React from 'react';
import useEventListener from '@use-it/event-listener';
import useInterval from '@use-it/interval'
import {Ewalker} from '../../../settings/constants';
import {CanvasContext} from '../../canvas/canvasContext';
import {Ecanvas} from '../../canvas/canvas'

function UseMonsterMoviment(initialPosition, canvasValue){
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

        const moviment = canvasContext.updateCanvas(enumMoviment[randomDirection], positionState, Ewalker.MONSTER, direction, canvasValue);

        if (moviment.nextMove.valid){
            updatePositionState(moviment.nextPosition);
        }
        updateDirectionState(moviment.direction_img);

        if (moviment.nextMove.kill){
            alert('Você morreu');
        }

    }, 500);

    return {
        position: positionState,
        direction: direction,
    }
}

export default UseMonsterMoviment;