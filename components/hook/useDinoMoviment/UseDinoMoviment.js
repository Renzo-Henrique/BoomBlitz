import React from 'react';
import useEventListener from '@use-it/event-listener';
import { CheckValidMoviment, handleMoviment } from '../../canvas/canvas';

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


        if(CheckValidMoviment(positionState, nextPosition)){     
            updatePositionState(nextPosition);
            
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