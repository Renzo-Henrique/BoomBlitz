import React from "react";
import {CANVAS} from "./canvas"
import { CheckValidMoviment, handleMoviment, Ecanvas  } from './canvas';


export const CanvasContext = React.createContext({
    canvas: [],
    updateCanvas: (direction, currentPosition, walker, direction_img) => null,
});

function CanvasProvider(props){

    const [canvasState, updateCanvasState] = React.useState({
        canvas: CANVAS,
        updateCanvas: (direction, currentPosition, walker, direction_img) => {
            //Faz movimentaçao
            const moviment = handleMoviment(direction, currentPosition, direction_img);
            const nextPosition = {
                x: moviment.x,
                y: moviment.y
            };

            //verifica se a posicao eh valida, se for atualiza a pos
            const nextMove = CheckValidMoviment(nextPosition, walker);

            //mudando array bidimensional
            if(nextMove.valid){
                updateCanvasState((prevState) =>{
                    const newCanvas = Object.assign([], canvasState.canvas);
                    const currentValue = newCanvas[currentPosition.y][currentPosition.x];

                    
                    newCanvas[currentPosition.y][currentPosition.x] = Ecanvas.FLOOR;
                    newCanvas[nextPosition.y][nextPosition.x] = currentValue;

                    return {
                        canvas: newCanvas,
                        updateCanvas: prevState.updateCanvas,
                    }
                })
            }
            return {
                nextPosition: nextPosition,
                nextMove: nextMove,
                direction_img: moviment.direction_img,
            }
        }
    })

    return (
        <CanvasContext.Provider value = {canvasState}>
            {props.children}
        </CanvasContext.Provider>

    )
}

export default CanvasProvider;