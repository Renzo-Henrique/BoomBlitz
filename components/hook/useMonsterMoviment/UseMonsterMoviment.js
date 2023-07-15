import React from 'react';
import useEventListener from '@use-it/event-listener';
import useInterval from '@use-it/interval'
import {Ewalker} from '../../../settings/constants';
import {CanvasContext} from '../../canvas/canvasContext';
import {Ecanvas} from '../../canvas/canvas'
import GamePrompt from '../../gamePrompt'

/**
 * @brief Hook personalizado para controlar o movimento de um monstro no jogo.
 * @param {Object} initialPosition - A posição inicial do monstro.
 * @param {number[][]} canvasValue - O valor do Monstro no tabuleiro de jogo (Olhar Ecanvas).
 * @returns O estado atual da posição e direção do monstro.
 */
function UseMonsterMoviment(initialPosition, canvasValue){
    const canvasContext = React.useContext(CanvasContext);
    const [positionState, updatePositionState] = React.useState(initialPosition);
    const [direction, updateDirectionState] = React.useState('RIGHT');
    

    /**
   * Enumeração dos movimentos possíveis para o monstro.
   */
    const enumMoviment = {
        0: "LEFT",
        1: "RIGHT",
        2: "UP",
        3: "DOWN",
    }

    // Constante que define o intervalo em milissegundos que o monstro se move aleatoriamente
    const interval_time = 500;
    /**
   * Função de movimento aleatório do monstro que é executada em intervalos regulares.
   */
    useInterval(function move(){
        // Gera um movimento aleatório
        var randomDirection = Math.floor(Math.random() * 4 );
        var string_randomDirection = enumMoviment[randomDirection];

        // Faz update na Matriz de colisões do canvas com o próxima posição que o monstro quer estar
        const moviment = canvasContext.updateCanvas(string_randomDirection, positionState, Ewalker.MONSTER, direction, canvasValue);

        // Se o movimento foi válido ele move a imagem no tabuleiro
        if (moviment.nextMove.valid){
            updatePositionState(moviment.nextPosition);
        }
        // Atualiza a direção da imagem
        updateDirectionState(moviment.direction_img);

        // Se matou um dinossauro invoca o Prompt de jogo com a mensagem de morte
        if (moviment.nextMove.kill){
            GamePrompt('Você morreu');
        }

    }, interval_time);

    return {
        position: positionState,
        direction: direction,
    }
}

export default UseMonsterMoviment;