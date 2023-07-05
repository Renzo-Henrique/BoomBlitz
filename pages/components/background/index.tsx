import React from 'react';
import Board from '../board'
import { GAME_SIZE_HEIGHT, GAME_SIZE_WIDTH } from '../../settings/constants';

const Background: React.FC = () => {
    const parentStyle: React.CSSProperties = {
        position: 'absolute',
    };

    const childStyle: React.CSSProperties = {
        position: 'relative',
    };

    return (
        <div style={parentStyle}>
        <img
            src="assets/boards/map.png"
            alt="Imagem Pai"
            style={childStyle}
        />
        <img
            src="./assets/boards/tab1.png"
            alt="Imagem Filha"
            style={childStyle}
        />
        </div>
    );
};

export default Background;