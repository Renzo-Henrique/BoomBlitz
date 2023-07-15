import React from 'react'
import Tile from './Tile/tile'
import { CanvasContext } from '../canvas/canvasContext';

/**
   * Obtém os componentes de tile com base no canvas. 
   * Utiliza a posição x e y para obter cada componente de tile 
   * com seu valor (especificado a relação em canvas.js) e posição x e y no tabuleiro
   * @param {Array[]} canvas - Matriz de colisões representando o tabuleiro do jogo.
   * @returns Os componentes de tile a serem renderizados pelo debugger.
*/
function getCanvasMap(canvas){
    const tilesComponent = [];

    for(let x = 0; x < canvas.length;x++){
        const canvasX = canvas[x];

        for(let y = 0; y < canvasX.length; y++){
            const canvasXY = canvasX[y];
            const key = `${x}-${y}`
            const position = { x: x, y:y};
            const text = canvasX[y] || canvasXY;
            
            //
            tilesComponent.push(<Tile key={key} position ={position} text = {text} />)
        }
    }

    return tilesComponent;
}


/**
 * @brief Componente que exibe o debugger do jogo para a matriz de colisões.
 * @returns O componente do debugger.
 */
function Debugger(){

    const canvasContext = React.useContext(CanvasContext);
    const tiles = getCanvasMap(canvasContext.canvas);
    
    return(
        <div>
            {tiles}
        </div>

    );
}

export default Debugger;