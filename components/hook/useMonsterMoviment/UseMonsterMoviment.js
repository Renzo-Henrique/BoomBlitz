import React from 'react';
import useEventListener from '@use-it/event-listener';
import useInterval from '@use-it/interval'
import { CheckValidMoviment, handleMoviment } from '../../canvas/canvas';

function UseMonsterMoviment(initialPosition){
    const [positionState, updatePositionState] = React.useState(initialPosition);
    const [direction, updateDirectionState] = React.useState('RIGHT');
    
    //0: right
    //1: left
    //2: down
    //3: up
    function posicaoAceita(valor){
        let aceitavel = true;
        let x = positionState.x;
        let y = positionState.y;
        //left
        if(valor === 0){
            x = x - 1;
            aceitavel = x > 0; 
        }
        //right
        else if(valor === 1){
            x = x + 1;
            aceitavel = x <= 12;
        }
        //up
        else if(valor === 2){
            y = y - 1;
            aceitavel = y > 0 ;
        }
        //down
        else if(valor === 3){
            y = y + 1;
            aceitavel = y <= 10;
        }
        return (aceitavel && ((x-1)%2 == 0 || (y-1)%2 == 0));
    }
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
            if(CheckValidMoviment(nextPosition)){     
                updatePositionState(nextPosition);
                break;
            }
            randomDirection = (randomDirection + i +1) % 4;
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

    console.log(positionState.x);
    console.log(positionState.y);

    return {
        position: positionState,
        direction: direction,
    }
}

export default UseMonsterMoviment;