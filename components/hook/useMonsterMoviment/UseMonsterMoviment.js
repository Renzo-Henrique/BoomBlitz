import React from 'react';
import useEventListener from '@use-it/event-listener';
import useInterval from '@use-it/interval'

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
            aceitavel = x >= 0; 
        }
        //right
        else if(valor === 1){
            x = x + 1;
            aceitavel = x <= 12;
        }
        //up
        else if(valor === 2){
            y = y - 1;
            aceitavel = y >= 0 ;
        }
        //down
        else if(valor === 3){
            y = y + 1;
            aceitavel = y <= 10;
        }
        return (aceitavel && (x%2 == 0 || y%2 == 0));
    }
    //npm install --save @use-it/interval
    useInterval(function move(){
        var randomDirection = 0;
        var posicaoValida = 0;
        //transforma para um array com 4 posicoes
        for (let i = 1; i <= 4; i++) {
            randomDirection = Math.floor(Math.random() * 4 );
            // código a ser executado
            if(posicaoAceita(randomDirection)){
                posicaoValida = 1;
                break;
            }

        }
        //sai da funcao
        if(posicaoValida === 0){
            return;
        }

        //left
        if(randomDirection === 0){
            updatePositionState({x: positionState.x - 1, y: positionState.y,});
            updateDirectionState("LEFT");
        }
        //right
        else if(randomDirection === 1){
            updatePositionState({x: positionState.x +1, y: positionState.y,});
            updateDirectionState("RIGHT");
        }
        //up
        else if(randomDirection === 2){
            updatePositionState({x: positionState.x, y: positionState.y - 1,});
        }
        //down
        else if(randomDirection === 3){
            updatePositionState({x: positionState.x, y: positionState.y + 1,});
        }
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