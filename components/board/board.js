import React from 'react';
import Dino from './dino'
import Monster from './monster'
// import Monster from './monster'
import { BOARD_SIZE_HEIGHT, BOARD_SIZE_WIDTH} from '../../settings/constants';
import styles from '../../styles/board.module.css';


function Board() {
    return (
        <div className={styles.Board}>
            <Dino/>
            {<Monster/>}
        </div>
    );
}

export default Board;