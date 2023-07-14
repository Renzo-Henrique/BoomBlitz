import React from 'react';
import useEventListener from '@use-it/event-listener';
import { CheckValidMoviment, handleMoviment, Ecanvas } from '../../canvas/canvas';
import {Ewalker} from '../../../settings/constants'
import {CanvasContext} from '../../canvas/canvasContext'
import GamePrompt from '../../gamePrompt'

function UseDinoMoviment(initialPosition) {
    const canvasContext = React.useContext(CanvasContext);
    const [positionState, updatePositionState] = React.useState(initialPosition);
    const [direction, updateDirectionState] = React.useState('RIGHT');
    const timeoutRef = React.useRef(null);
  
    const handleEvent = React.useCallback(
      (event) => {
        const moviment = canvasContext.updateCanvas(event.key, positionState, Ewalker.DINO, direction, Ecanvas.DINO);
        
        if (moviment.nextMove.valid) {
          updatePositionState(moviment.nextPosition);
          updateDirectionState(moviment.direction_img);
        }
  
        if (moviment.nextMove.dead) {
          GamePrompt('Você morreu');
        }
      },
      [canvasContext, positionState, direction]
    );
  
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
  
    useEventListener('keydown', handleKeyDown);
  
    return {
      position: positionState,
      direction: direction,
    };
  }
  
  export default UseDinoMoviment;
  

