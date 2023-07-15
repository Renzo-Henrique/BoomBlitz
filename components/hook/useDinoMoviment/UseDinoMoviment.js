import React from 'react';
import useEventListener from '@use-it/event-listener';
import { CheckValidMoviment, handleMoviment, Ecanvas } from '../../canvas/canvas';
import {Ewalker} from '../../../settings/constants'
import {CanvasContext} from '../../canvas/canvasContext'
import GamePrompt from '../../gamePrompt'


/**
 * Hook personalizado do React para controlar o movimento de um dinossauro no jogo.
 * @param {Object} initialPosition - A posição inicial do dinossauro.
 * @returns {Object} - A posição e direção atuais do dinossauro.
 */
function UseDinoMoviment(initialPosition) {
    const canvasContext = React.useContext(CanvasContext);
    const [positionState, updatePositionState] = React.useState(initialPosition);
    const [direction, updateDirectionState] = React.useState('RIGHT');
    const timeoutRef = React.useRef(null);

    /**
     * Manipula o evento do teclado para fazer a ação do dinossauro.
     * @param {Event} event - O evento do teclado.
     */
    const handleEvent = React.useCallback(
      (event) => {

        // Faz update na Matriz de colisões do canvas com o próxima posição que o PLAYER quer que o dino esteja
        const moviment = canvasContext.updateCanvas(event.key, positionState, Ewalker.DINO, direction, Ecanvas.DINO);
        
        // Se o movimento foi válido ele move a imagem no tabuleiro
        if (moviment.nextMove.valid) {
          updatePositionState(moviment.nextPosition);
        }
        // Atualiza a direção da imagem
        updateDirectionState(moviment.direction_img);
        
        // Se o dinossauro morrer invoca o Prompt de jogo com a mensagem de morte
        if (moviment.nextMove.dead) {
          GamePrompt('Você morreu');
        }
      },
      [canvasContext, positionState, direction]
    );
    
    /**
     * Manipula o evento de pressionar uma tecla e define um timeout para controlar a velocidade do movimento.
     * @param {Event} event - O evento de pressionar uma tecla.
     */
    const handleKeyDown = React.useCallback(
      (event) => {
        if (!timeoutRef.current) {
          handleEvent(event);
          timeoutRef.current = setTimeout(() => {
            timeoutRef.current = null;
          }, 250);
        }
      },
      [handleEvent]
    );
    
    // Adiciona o ouvinte de evento para o evento de pressionar uma tecla
    useEventListener('keydown', handleKeyDown);
  
    return {
      position: positionState,
      direction: direction,
    };
  }
  
  export default UseDinoMoviment;
  

