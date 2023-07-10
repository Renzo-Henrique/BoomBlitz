import React from "react";
import {CANVAS} from "./canvas"
import { CheckValidMoviment, handleMoviment, Ecanvas  } from './canvas';


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
        
        // Coloca o ovo na tela
        /*if(nextMove.egg){
            // Mudando array bidimensional
            // implementar
            
            updateCanvasState((prevState) => {
                const newCanvas = JSON.parse(JSON.stringify(prevState.canvas));
                const currentValue = newCanvas[currentPosition.y][currentPosition.x];
        
                newCanvas[currentPosition.y][currentPosition.x] = Ecanvas.FLOOR;
                console.log(currentPosition.y);
                console.log(currentPosition.x);
        
                    return {
                        canvas: newCanvas,
                        updateCanvas: prevState.updateCanvas,
                        nextPosition: {x: -1, y: -1},
                        nextMove: nextMove,
                        direction_img: moviment.direction_img
                    };
                });
        }
        // Tira o ovo da tela
        if(nextMove.explosion){
            // Mudando array bidimensional
            updateCanvasState((prevState) => {
                const newCanvas = JSON.parse(JSON.stringify(prevState.canvas));
                const currentValue = newCanvas[currentPosition.y][currentPosition.x];
        
                newCanvas[currentPosition.y][currentPosition.x] = Ecanvas.FLOOR;
                console.log(currentPosition.y);
                console.log(currentPosition.x);
        
                    return {
                        canvas: newCanvas,
                        updateCanvas: prevState.updateCanvas,
                        nextPosition: {x: -1, y: -1},
                        nextMove: nextMove,
                        direction_img: moviment.direction_img
                    };
                });
        }*/
        //movimento valido
        if(nextMove.valid){
            // Mudando array bidimensional
            updateCanvasState((prevState) => {
            const newCanvas = JSON.parse(JSON.stringify(prevState.canvas));
            const currentValue = newCanvas[currentPosition.y][currentPosition.x];
    
            newCanvas[currentPosition.y][currentPosition.x] = Ecanvas.FLOOR;
            console.log(currentPosition.y);
            console.log(currentPosition.x);
            newCanvas[nextPosition.y][nextPosition.x] = currentValue;

            CANVAS[currentPosition.y][currentPosition.x] = Ecanvas.FLOOR;
            CANVAS[nextPosition.y][nextPosition.x] = currentValue;
                
                return {
                    canvas: newCanvas,
                    updateCanvas: prevState.updateCanvas,
                    nextPosition: nextPosition,
                    nextMove: nextMove,
                    direction_img: moviment.direction_img
                };
            });
        }

        console.log(CANVAS);

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