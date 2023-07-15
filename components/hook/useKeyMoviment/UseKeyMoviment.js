import React from 'react';
import useInterval from '@use-it/interval'
import {Ewalker} from '../../../settings/constants';
import {CanvasContext} from '../../canvas/canvasContext';
import {Ecanvas} from '../../canvas/canvas'
import GamePrompt from '../../gamePrompt'


// Quantidade de chaves de cada tipo
const keys_1 = 1;
const keys_2 = 1;

// Quantidade de chaves encontradas de cada tipo
var keys_encontradas_1 = 0;
var keys_encontradas_2 = 0;

var venceu = false;


/**
 * @brief Hook personalizado para controlar o movimento das chaves no jogo.
 * @param {Object} initialPosition - A posição inicial da chave.
 * @param {number[][]} canvasValue - O valor da Chave1 ou Chave2 no tabuleiro de jogo (Olhar Ecanvas).
 * @returns O estado atual da posição.
 */
function UseKeyMoviment(initialPosition, canvasValue){
    const canvasContext = React.useContext(CanvasContext);
    const [positionState, updatePositionState] = React.useState(initialPosition);
    
    //define o intervalo em que a chave verifica se foi obtida
    const interval_time = 100;

    
        /**
     * Função de movimento da chave que é executada em intervalos regulares.
     */
    useInterval(function move(){
        // Verifica se a posicao atual possui valor diferente das chaves
        // Se sim, retorna true para key1 e key2, indicando que a chave foi obtida
        const moviment = canvasContext.updateCanvas('nothing', positionState, Ewalker.KEY, 'nothing', canvasValue);
        
        //Verificador de bugs
        if (moviment === null) {
            console.log("O objeto é nulo. Foi encontrado neste ponto do código: " + ' handle moviment keys');
            console.log(new Error().stack);
        }
        // Se o jogo não foi vencido verifica se o dino obteve chaves
        if(venceu == false){
            // Verifica se foi a chave, se for joga a posicao para 0,0. Significando pra animação sair do mapa
            if (moviment.nextMove.key1 && canvasValue == Ecanvas.KEY1){
                updatePositionState({x: 0, y: 0});
                keys_encontradas_1+=1;
            }
            else if (moviment.nextMove.key2 && canvasValue == Ecanvas.KEY2){
                updatePositionState({x: 0, y: 0});
                keys_encontradas_2+=1;
            }

            // Verifica se foi obtido as duas chaves para vencer o jogo
            if(keys_encontradas_1 >= keys_1 && keys_encontradas_2 >= keys_2){
                venceu = true;
                GamePrompt('Você venceu');
            }
        }

    }, interval_time);
    
    return {
        position: positionState,
        direction: 'nothing',
    }
}

export default UseKeyMoviment;