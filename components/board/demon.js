 import React from 'react';
 import UseMonsterMoviment from '../hook/useMonsterMoviment/UseMonsterMoviment'
 import {Ecanvas} from '../canvas/canvas'
 import calcularVariaveis from '../calcularVariaveis'
 


/**
 * Componente para renderizar o inimigo demonio.
 * @param {Object} props - Propriedades do componente.
 * @param {Object} props.position - Posição do tile no tabuleiro.
 * @param {number} props.position.x - Posição X do tile.
 * @param {number} props.position.y - Posição Y do tile.
 * @returns Componente representando o inimigo demonio.
 */
 function MyDemon(props){
    // Define a posição inicial do demônio
    const initialPositionDemon = {
        x: props.position.x,
        y: props.position.y
    };
    
    // Calcula as variáveis necessárias para estilizar o inimigo demonio
    const variaveis = calcularVariaveis();

    let DEMON_SIZE = variaveis.MONSTER_SIZE;
    let TILE_SIZE_DEMON = variaveis.TILE_SIZE_MONSTER;
    let TILE_CENTER = variaveis.TILE_CENTER_MONSTER;

    // Obtém o estado de movimento do demônio usando o hook UseMonsterMoviment
    const moviment_demon = UseMonsterMoviment(initialPositionDemon, Ecanvas.DEMON);

    return (
        <div 
            style={{
                position: 'absolute',
                width: DEMON_SIZE,
                height: DEMON_SIZE,
                backgroundImage: 'url("assets/monsters/demon.png")',
                backgroundRepeat: "no-repeat",
                backgroundSize: 'cover',
                /*Animacoes*/
                animation: 'demon-animation-moviment 1s steps(7) infinite',
                top: +TILE_CENTER  + TILE_SIZE_DEMON * (moviment_demon.position.y),
                left: +TILE_CENTER  + TILE_SIZE_DEMON * (moviment_demon.position.x),
                transform: `scaleX(${moviment_demon.direction === 'RIGHT' ? 1 : -1})`,
            }}>
        </div>
     );

 }
 export default MyDemon;
