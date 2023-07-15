import React from 'react';
import calcularVariaveis from '../calcularVariaveis'


/**
 * Componente para renderizar um arbusto.
 * @param {Object} props - Propriedades do componente.
 * @param {Object} props.position - Posição do tile no tabuleiro.
 * @param {number} props.position.x - Posição X do tile.
 * @param {number} props.position.y - Posição Y do tile.
 * @returns Componente representando o arbusto.
 */
function MyBush(props){
    // Define a posição inicial do arbusto
    const initialPositionBush = {
        x: props.position.x,
        y: props.position.y
    };

    // Calcula as variáveis necessárias para estilizar a bush
    const variaveis = calcularVariaveis();

    let TILE_CENTER = variaveis.TILE_CENTER_BUSH;
    let BUSH_SIZE = variaveis.TILE_SIZE_BUSH;

    return (
        <div 
        style={{
            position: 'absolute',
            width: BUSH_SIZE,
            height: BUSH_SIZE,
            backgroundImage: 'url("assets/blocks/bush.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            top: +TILE_CENTER + BUSH_SIZE * (initialPositionBush.y),
            left: +TILE_CENTER + BUSH_SIZE * (initialPositionBush.x),
        }}>
       </div>
    );

}
export default MyBush;