import React from 'react';
import Board from '../board';
import { GAME_SIZE_HEIGHT, GAME_SIZE_WIDTH } from '../../settings/constants';

const Background: React.FC = () => {
  const parentStyle: React.CSSProperties = {
    position: 'absolute',
  };

  const parentContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  };

  const childStyle: React.CSSProperties = {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
  };

  const boardContainerStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <div style={parentStyle}>
      <div style={parentContainerStyle}>
        <img src="assets/boards/map.png" alt="Imagem Pai" />
        <div style={boardContainerStyle}>
          <Board />
        </div>
      </div>
    </div>
  );
};

export default Background;
