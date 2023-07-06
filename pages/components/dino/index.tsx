import React from 'react';
import styles from './dino.module.css';

import {TILE_SIZE} from '../../settings/constants'

const Dino = () => {
    const dinoStyle: React.CSSProperties = {
        /*Tamanho do dino eh*/
        width: '24px',
        height: '24px',
        /*Posicoes do dino no grid*/
        position: 'absolute',
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        /*Animacoes*/
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        animation: 'dino-animation-moviment 1s steps(4) infinite',
        /*animation: dino-animation-stand-by 1s steps(3) infinite;*/
        /*animation: dino-animation-hurt 1s steps(3) infinite;*/

        /*Imagem para usar, descobrir forma de usar as outras tambem*/
        backgroundImage: 'url("assets/dinos/sheets/DinoSprites_doux.png")',
      };

    return (
        <div className={styles.dino} />
        
    );
}

export default Dino;