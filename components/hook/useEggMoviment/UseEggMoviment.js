import React from 'react';
import {Ewalker} from '../../../settings/constants'
import {CanvasContext} from '../../canvas/canvasContext'


/*---------------------
*----------------FEATURE EM DESENVOLVIMENTO, 
*----------------SIMILAR AO CONCEITO DE BOMBA DO BOMBERMAN
*----------------BOMBA QUE MATA INIMIGOS E DESTROI PARDES FRACAS
*/


/**
 * Custom React hook for controlling the movement of an egg on a canvas.
 * @param {Object} initialPosition - The initial position of the egg.
 * @returns {Object} - The current position and direction of the egg.
 */
function UseEggMoviment(initialPosition) {
  const canvasContext = React.useContext(CanvasContext);
  const [positionState, updatePositionState] = React.useState(initialPosition);
  const [direction, updateDirectionState] = React.useState('RIGHT');

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      const moviment = canvasContext.updateCanvas(
        'egg', // Pass an empty string or any other value to represent no specific direction
        positionState,
        Ewalker.EGG,
        direction
      );
      
      // Clear the timeout reference
      clearTimeout(timeoutId);
    }, 3000);

    // Cleanup function to clear the timeout if the component is unmounted
    return () => {
      clearTimeout(timeoutId);
    };
  }, [canvasContext, positionState, direction]);

  return {
    position: positionState,
    direction: direction,
  };
}

export default UseEggMoviment;
