import React from 'react';
import useEventListener from '@use-it/event-listener';
import useInterval from '@use-it/interval'
import { CheckValidMoviment, handleMoviment } from '../../canvas/canvas';
import {Ewalker} from '../../../settings/constants'


function UseMonsterMoviment(initialPosition){
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
        var randomDirection = Math.floor(Math.random() * 4 );

        
        //Faz movimentaçao
        var moviment = handleMoviment(enumMoviment[randomDirection], positionState, direction);
        var nextPosition = {
            x: moviment.x,
            y: moviment.y
        };

        // Gera um movimento aleatório
        var randomDirection = Math.floor(Math.random() * 4 )
        for (let i = 0; i < 4; i++) {
            

            moviment = handleMoviment(enumMoviment[randomDirection], positionState, direction);
            nextPosition = {
                x: moviment.x,
                y: moviment.y
            };
            //verifica se a posicao eh valida, se for atualiza a pos e sai do for
            const nextMove = CheckValidMoviment(nextPosition, Ewalker.MONSTER);

            if (nextMove.valid){
                updatePositionState(nextPosition);
                break;
            }
            randomDirection = (randomDirection + i +1) % 4;
        }
        
        updateDirectionState(moviment.direction_img);
    }, 1000);
    

    return {
        position: positionState,
        direction: direction,
    }
}

export default UseMonsterMoviment;