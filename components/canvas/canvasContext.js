import React from "react";
import {CANVAS} from "./canvas"
import { CheckValidMoviment, handleMoviment, Ecanvas  } from './canvas';

const keys_1 = 1;
const keys_2 = 1;
var keys_encontradas_1 = 0;
var keys_encontradas_2 = 0;

export const CanvasContext = React.createContext({
    canvas: [],
    updateCanvas: (direction, currentPosition, walker, direction_img) => {},
});

function CanvasProvider(props) {
    const [canvasState, updateCanvasState] = React.useState({
      canvas: CANVAS,
      updateCanvas: (direction, currentPosition, walker, direction_img) => {
        // Faz movimentaçao
        const moviment = handleMoviment(direction, currentPosition, direction_img);
        const nextPosition = {
          x: moviment.x,
          y: moviment.y
        };
  
        // Verifica se a posição é válida, se for atualiza a pos
        const nextMove = CheckValidMoviment(nextPosition, walker);
        //movimento valido
        if(nextMove.valid){
            // Mudando array bidimensional
            updateCanvasState((prevState) => {
            const newCanvas = JSON.parse(JSON.stringify(prevState.canvas));
            const currentValue = newCanvas[currentPosition.y][currentPosition.x];
    
            newCanvas[currentPosition.y][currentPosition.x] = Ecanvas.FLOOR;
            newCanvas[nextPosition.y][nextPosition.x] = currentValue;

            CANVAS[currentPosition.y][currentPosition.x] = Ecanvas.FLOOR;
            CANVAS[nextPosition.y][nextPosition.x] = currentValue;
            

            // Encontrou todas as chaves
            if(nextMove.key1 || nextMove.key2){
              if(nextMove.key1){
                keys_encontradas_1+=1;
              }
              else{
                keys_encontradas_2+=1;
              }
              if(keys_encontradas_1 >= keys_1 && keys_encontradas_2 >= keys_2){
                
                  alert('Você venceu');
              }
            }
                return {
                    canvas: newCanvas,
                    updateCanvas: prevState.updateCanvas,
                    nextPosition: nextPosition,
                    nextMove: nextMove,
                    direction_img: moviment.direction_img
                };
            });
        }

        //console.log(CANVAS);

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