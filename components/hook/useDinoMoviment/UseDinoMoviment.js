import React from 'react';
import useEventListener from '@use-it/event-listener';
import { CheckValidMoviment, handleMoviment } from '../../canvas/canvas';
import {Ewalker} from '../../../settings/constants'
import {CanvasContext} from '../../canvas/canvasContext'

function UseDinoMoviment(initialPosition){
    const canvasContext = React.useContext(CanvasContext);
    const [positionState, updatePositionState] = React.useState(initialPosition);
    const [direction, updateDirectionState] = React.useState('RIGHT');
    

    useEventListener('keydown', (event) =>{
        
        const moviment = canvasContext.updateCanvas(event.key, positionState, Ewalker.DINO, direction);
        
        /*//Faz movimentaçao
        const moviment = handleMoviment(event.key, positionState, direction);
        const nextPosition = {
            x: moviment.x,
            y: moviment.y
        };

        //verifica se a posicao eh valida, se for atualiza a pos
        const nextMove = CheckValidMoviment(nextPosition, Ewalker.DINO);*/

        if (moviment.nextMove.valid){
            updatePositionState(moviment.nextPosition);
            updateDirectionState(moviment.direction_img);
        }

        if(moviment.nextMove.dead){
            alert('voce morreu');
        }
              
    })

    return {
        position: positionState,
        direction: direction,
    }
}

export default UseDinoMoviment;