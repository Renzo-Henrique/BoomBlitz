import React, { useEffect, useState} from 'react';
import useEventListener from '@use-it/event-listener';
import styles from '../../styles/dino.module.css';
import UseDinoMoviment from '../hook/useDinoMoviment/UseDinoMoviment'
import calcularVariaveis from '../calcularVariaveis'
// import { TILE_CENTER } from '@/settings/constants';
// import {DINO_SIZE, TILE_SIZE, TILE_CENTER} from '../../settings/constants'
// Deixando o tamanho do dino responsivo
/*const rootStyles = getComputedStyle(document.documentElement);
const DINO_SIZE = parseInt(rootStyles.getPropertyValue('--dino-size'));
const TILE_SIZE = parseInt(rootStyles.getPropertyValue('--grid-cell'));
const TILE_CENTER = TILE_SIZE/2;*/

function MyDino(props){
    const variaveis = calcularVariaveis();

    const initialPosition = {
        x: props.position.x,
        y: props.position.y
    };

    let PIXEL_SIZE = variaveis.PIXEL_SIZE;
    let DINO_SIZE = variaveis.DINO_SIZE;
    let TILE_SIZE_DINO = variaveis.TILE_SIZE_DINO;
    let TILE_CENTER_DINO = variaveis.TILE_CENTER_DINO;

    const moviment = UseDinoMoviment(initialPosition);
    
    return (
        <div 
            style={{
                position: 'absolute',
                width: DINO_SIZE,
                height: DINO_SIZE,
                backgroundImage: 'url("assets/dinos/sheets/DinoSprites_doux.png")',
                backgroundRepeat: "no-repeat",
                backgroundSize: 'cover',
                /*Animacoes*/
                animation: 'dino-animation-moviment 1s steps(4) infinite',
                /*animation: dino-animation-stand-by 1s steps(3) infinite;*/
                /*animation: dino-animation-hurt 1s steps(3) infinite;*/
                top:  -TILE_CENTER_DINO+  TILE_SIZE_DINO * (moviment.position.y),
                left: -TILE_CENTER_DINO+ TILE_SIZE_DINO * (moviment.position.x ),
                transform: `scaleX(${moviment.direction === 'RIGHT' ? 1 : -1})`,
            }}>
        </div>
        // TILE_CENTER deve centralizar o dino no meio de um tile
        // positionState x e y fazem a movimentação de 1 tile
        // transform espelha a imagem para mudar de direção
        // STYLE DEVE FICAR AQUI, pro javascript n precisar pegar o ID na query
        // Com isso conseguimos modificar o css no javascript puro
    );

}

export default MyDino;