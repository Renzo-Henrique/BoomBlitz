import React from 'react';
import useEventListener from '@use-it/event-listener';


function UseDinoMoviment(initialPosition){

    const [positionState, updatePositionState] = React.useState(initialPosition);
    const [direction, updateDirectionState] = React.useState('RIGHT');
    

    useEventListener('keydown', (event) =>{
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
        //implementar menu de jogo!
        else if(event.key === "Escape"){

        }

    })

    console.log(positionState.x);
    console.log(positionState.y);

    return {
        position: positionState,
        direction: direction,
    }
}

export default UseDinoMoviment;