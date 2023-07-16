import React, { useEffect, useState} from 'react';
import Dino from './dino'
import Demon from './demon'
import Slime from './slime'
import Bush from './bush'
import Egg from './egg'
import Key from './key'
import {CANVAS, Ecanvas} from '../canvas/canvas'
import CalcularVariaveis from '../calcularVariaveis';
import { randomBoard } from '../../settings/constants';


/**
 * Obtém os componentes do canvas mapeados em um array como valores. Olhe Ecanvas.
 * @returns {Array} - Array de componentes do canvas.
 */
function getCanvasMap(){
    const array = [];
    for(let y = 0; y < CANVAS.length;y++){
        const canvasY = CANVAS[y];

        for(let x = 0; x < canvasY.length; x++){
            const canvasYX = canvasY[x];
            
            const position = { x: x, y:y};
            const text = canvasY[x] || canvasYX;
            const key = `${x}-${y}`
            
            // Seleciona qual componente se refere a cada valor para inserir no jogo
            if( text  === Ecanvas.DINO){
                array.push(<Dino key={key} position ={position} text = {text} />)
            }
            else if( text  === Ecanvas.DEMON){
                array.push(<Demon key={key} position ={position} text = {text} />)
            }
            else if( text  === Ecanvas.SLIME){
                array.push(<Slime key={key} position ={position} text = {text} />)
            }
            else if( text  === Ecanvas.BUSH){
                array.push(<Bush key={key} position ={position} text = {text} />)
            }
            else if( text  === Ecanvas.EGG){
                array.push(<Egg key={key} position ={position} text = {text} />)
            }
            else if( text  === Ecanvas.KEY1 ){
                array.push(<Key key={key} position ={position} text = {text} key_ ={Ecanvas.KEY1}/>)
            }
            else if(  text  === Ecanvas.KEY2){
                array.push(<Key key={key} position ={position} text = {text} key_ ={Ecanvas.KEY2}/>)
            }
        }
    }

    return array;
}

const elements = getCanvasMap();

/**
 * @brief Componente responsável pela montagem do tabuleiro com um background aleatório.
 * @returns Retorna o componente board
 */
function Board() {
    // Sprite aleatorio do board
    const [boardSprite, setBoardSprite] = useState(randomBoard);
    // URL da imagem de fundo do tabuleiro
    //const backgroundImageUrl = `/assets/boards/tab${boardSprite}.png`;
    const [boardImageUrl, setBoardImageUrl] = useState(`/assets/boards/tab${boardSprite}.png`);

    useEffect(() => {
        setBoardSprite(randomBoard); // Atualiza o valor de dinoSprite no estado
    }, []); // [] como segundo argumento para executar o useEffect apenas uma vez na montagem

    useEffect(() => {
        setBoardImageUrl(`"/assets/boards/tab${boardSprite}.png"`); // Atualiza o valor de BoardSprite no estado
    },[boardSprite])// [] como segundo argumento para executar o useEffect apenas uma vez na montagem


    // Calcula as variáveis necessárias para o dimensionamento do tabuleiro
    const variaveis = CalcularVariaveis();
    const board_height = variaveis.BOARD_SIZE_HEIGHT;
    const board_width = variaveis.BOARD_SIZE_WIDTH;
    
    // Estilo do tabuleiro
    const boardStyle = {
        imageRendering: 'pixelated',
        backgroundImage: `url(${boardImageUrl})`,
        backgroundSize: '100%',
        width: board_width,
        height: board_height,
        position: 'relative',
    };

    return (
        <div style={boardStyle}>
            {elements}
        </div>
    );
}

export default Board;