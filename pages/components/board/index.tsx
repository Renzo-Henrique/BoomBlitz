import React from 'react';
import Dino from '../dino'
import { GAME_SIZE_HEIGHT, GAME_SIZE_WIDTH } from '../../settings/constants';

const Board = () => {
    return (
        <div>
            <Dino/>
            <img src="./assets/boards/map_1.png" alt="Imagem" width={GAME_SIZE_WIDTH} height={GAME_SIZE_HEIGHT}/>
        </div>
        
    );
}

export default Board;