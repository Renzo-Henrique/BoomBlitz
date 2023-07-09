import React from 'react';
import Dino from './dino'
import { BOARD_SIZE_HEIGHT, BOARD_SIZE_WIDTH} from '../../settings/constants';
import styles from '../../styles/board.module.css';
import Image from "next/image"


function Board() {
    const scale = 2.2; //aumento de 100%%
    const width_og = 240;
    const height_og = 208;

    
    return (
        <div className={styles.Board}>
            <Image
                src="/assets/boards/tab1.png"
                width={width_og*scale}
                height={height_og*scale}
                alt="Tabuleiro"
            />
            <Dino/>
        </div>
    );
}

export default Board;