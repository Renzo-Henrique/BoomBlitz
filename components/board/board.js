import React from 'react';
import Dino from './dino'
import Demon from './demon'
import Slime from './slime'
// import Monster from './monster'
import { BOARD_SIZE_HEIGHT, BOARD_SIZE_WIDTH} from '../../settings/constants';
import styles from '../../styles/board.module.css';

// LIMITES do board: x = 12, y = 10
function Board() {
    return (
        <div className={styles.Board}>
            <Dino/>
            <Demon position={{ x:12, y:10}}/>
            <Slime position={{ x:0, y:10}} />
        </div>
    );
}

export default Board;