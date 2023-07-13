import React from 'react';
import useEventListener from '@use-it/event-listener';
import useInterval from '@use-it/interval'
import {Ewalker} from '../../../settings/constants';
import {CanvasContext} from '../../canvas/canvasContext';
import {Ecanvas} from '../../canvas/canvas'

function UseKeyMoviment(initialPosition, canvasValue){
    const canvasContext = React.useContext(CanvasContext);
    const [positionState, updatePositionState] = React.useState(initialPosition);
    const [direction, updateDirectionState] = React.useState('RIGHT');
    

    
    useInterval(function move(){
        // Verifica se a posicao atual possui valor diferente das chaves

        const moviment = canvasContext.updateCanvas('nothing', positionState, Ewalker.KEY, direction, canvasValue);
        
        //Verificador de bugs
        if (moviment === null) {
            console.log("O objeto é nulo. Foi encontrado neste ponto do código: " + ' handle moviment keys');
            console.log(new Error().stack);
        }

        // verifica se foi obtido, se for joga a posicao para 0,0. Significando pra animação sair do mapa
        if (moviment.nextMove.key1 && canvasValue == Ecanvas.KEY1){
            updatePositionState({x: 0, y: 0});
        }
        else if (moviment.nextMove.key2 && canvasValue == Ecanvas.KEY2){
            updatePositionState({x: 0, y: 0});
        }

    }, 100);

    return {
        position: positionState,
        direction: direction,
    }
}

export default UseKeyMoviment;