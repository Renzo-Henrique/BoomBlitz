import React from "react";
import {CANVAS} from "./canvas"
import { CheckValidMoviment, handleMoviment, Ecanvas  } from './canvas';



/**
 * @typedef {Object} CanvasContextValue
 * @property {number[][]} canvas - O estado atual do canvas.
 * @property {function} updateCanvas - Função para atualizar o canvas.
 */

export const CanvasContext = React.createContext({
    canvas: [],
    updateCanvas: (direction, currentPosition, walker, direction_img, canvasValue) => {},
});


/**
 * @brief Componente de provedor de contexto para o canvas.
 * @param {Object} props - Propriedades do componente.
 * @param {React.ReactNode} props.children - Os componentes filhos.
 * @returns Componente de provedor de contexto para o canvas.
 */
function CanvasProvider(props) {
    const [canvasState, updateCanvasState] = React.useState({
      canvas: CANVAS,
      updateCanvas: (direction, currentPosition, walker, direction_img, canvasValue) => {

        // Obtem a próxima posição esperada pela entidade walker
        const moviment = handleMoviment(direction, currentPosition, direction_img);
        const nextPosition = {
          x: moviment.x,
          y: moviment.y
        };

        //Verificador de bugs
        if (moviment === null) {
          console.log("O objeto é nulo. Foi encontrado neste ponto do código: " + walker);
          console.log(new Error().stack);
        }

        // Obtem propriedades validadoras de movimento, olhe com detalhe a documentação da função
        const nextMove = CheckValidMoviment(nextPosition, walker);
        
        //movimento valido, então atualize o Canvas!!
        if(nextMove.valid){
            // Mudando array bidimensional
            updateCanvasState((prevState) => {
              //Obtendo uma cópia do canvas para não interferir no assincronismo
              const newCanvas = JSON.parse(JSON.stringify(prevState.canvas));
              const currentValue = newCanvas[currentPosition.y][currentPosition.x];
              const valor = canvasValue;

              // Atualizando os valores do canvas
              newCanvas[currentPosition.y][currentPosition.x] = Ecanvas.FLOOR;
              newCanvas[nextPosition.y][nextPosition.x] =  valor;

              CANVAS[currentPosition.y][currentPosition.x] =  Ecanvas.FLOOR;
              CANVAS[nextPosition.y][nextPosition.x] =  valor;
              

              return {
                  canvas: newCanvas,
                  updateCanvas: prevState.updateCanvas,
                  nextPosition: nextPosition,
                  nextMove: nextMove,
                  direction_img: moviment.direction_img
              };
            });
        }
        return {
          nextPosition: nextPosition,
          nextMove: nextMove,
          direction_img: moviment.direction_img
        };
      }
    });
  
    return (
      <CanvasContext.Provider value={canvasState}>
        {props.children}
      </CanvasContext.Provider>
    );
  }

export default CanvasProvider;