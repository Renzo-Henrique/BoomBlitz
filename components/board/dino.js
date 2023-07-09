import React from 'react';
import styles from '../../styles/dino.module.css';

import {TILE_SIZE, DINO_SIZE} from '../../settings/constants'

function Dino  (){
    const dinoStyle = {
        /*Tamanho do dino eh*/
        width: '24px',
        height: '24px',
        /*Imagem para usar, descobrir forma de usar as outras tambem*/
        backgroundImage: 'url("assets/dinos/sheets/DinoSprites_doux.png")',
        backgroundRepeat: 'no-repeat',
        /*Animacoes*/
        /*animation: 'dino-animation-moviment 1s steps(4) infinite',*/
        animation: "${styles['dino-animation-stand-by']} 1s steps(3) infinite",
        /*animation: 'dino-animation-hurt 1s steps(3) infinite';*/

        
        /*Posicoes do dino no grid*/
        position: 'absolute',
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
      };

    return (
        <div style={dinoStyle} />
        
    );
}

export default Dino;