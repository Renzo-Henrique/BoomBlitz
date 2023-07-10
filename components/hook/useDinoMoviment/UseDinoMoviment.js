import React from 'react';
import useEventListener from '@use-it/event-listener';
import { CheckValidMoviment, handleMoviment } from '../../canvas/canvas';
import {Ewalker} from '../../../settings/constants'

function UseDinoMoviment(initialPosition){

    const [positionState, updatePositionState] = React.useState(initialPosition);
    const [direction, updateDirectionState] = React.useState('RIGHT');
    

    useEventListener('keydown', (event) =>{
        //Faz movimentaçao
        const moviment = handleMoviment(event.key, positionState, direction);
        const nextPosition = {
            x: moviment.x,
            y: moviment.y
        };

        //verifica se a posicao eh valida, se for atualiza a pos
        const nextMove = CheckValidMoviment(nextPosition, Ewalker.DINO);

        if (nextMove.valid){
            updatePositionState(nextPosition);
        }

        if(nextMove.dead){
            alert('voce morreu');
        }
        updateDirectionState(moviment.direction_img);
        
    })

    console.log(positionState.x);
    console.log(positionState.y);

    return {
        position: positionState,
        direction: direction,
    }
}

export default UseDinoMoviment;