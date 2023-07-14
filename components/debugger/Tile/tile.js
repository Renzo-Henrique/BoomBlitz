import React from 'react';
import { Ecanvas } from '../../canvas/canvas';
import {NUMBER_TILE_HEIGHT, NUMBER_TILE_WIDTH} from '../../../settings/constants'


/**
 * @brief Componente que representa um tile no tabuleiro do jogo.
 * @param {Object} props - Propriedades do componente.
 * @param {Object} props.position - Posição do tile no tabuleiro.
 * @param {number} props.position.x - Posição X do tile.
 * @param {number} props.position.y - Posição Y do tile.
 * @param {string} props.text - Texto do tile.
 * @returns O componente do tile.
 */
function Tile(props){
    const initialPosition = {
        x: props.position.x,
        y: props.position.y
    };

    function getTileColor(){
        switch(props.text){
            case Ecanvas.FLOOR:{
                return 'darkgrey';
            }
            case Ecanvas.ROCK:{
                return 'red';
            }
            case Ecanvas.BORDER:{
                return ['darkyellow']
            }
            case Ecanvas.DINO:{
                return 'blue'
            }
            case Ecanvas.SLIME:{
                return 'orange'
            }
            case Ecanvas.DEMON:{
                return 'orange'
            }
            case Ecanvas.BUSH:{
                return 'green'
            }
            case Ecanvas.EGG:{
                return 'blue'
            }
            case Ecanvas.KEY1:{
                return 'purple'
            }
            case Ecanvas.KEY2:{
                return 'purple'
            }
        }
    }

    const color = getTileColor();

    return (
        <div
        style={{
            width: 480/NUMBER_TILE_WIDTH,
            height: 416/NUMBER_TILE_HEIGHT,
            border: `2px solid ${color}`,
            position: 'absolute',
            top: initialPosition.x * 416/NUMBER_TILE_HEIGHT,
            left: initialPosition.y * 480/NUMBER_TILE_WIDTH,
            color: color,
            fontSize: 20,
            zindex: 2,
        }}
        >
            {props.text}
        </div>
    );
}

export default Tile;