import React from 'react';
import Dino from '../dino'
import { BOARD_SIZE_HEIGHT, BOARD_SIZE_WIDTH} from '../../settings/constants';
import styles from './board.module.css';

const Board: React.FC = () => {

    return (
        <div className={styles.Board}>
            <Dino/>
            <img src="./assets/boards/tab1.png" alt="Tabuleiro"/>
        </div>
        
    );
}

export default Board;