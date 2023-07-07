import React from 'react';
import Board from './board/board';
import styles from '../styles/Background.module.css';
import { GAME_SIZE_HEIGHT, GAME_SIZE_WIDTH } from '../settings/constants';

function Background (){
  
  return (
    <div className={styles.backgroundStyle}>
      <div className={styles.backgroundContainerStyle}>
        <img src="assets/boards/map.png" alt="Imagem Pai" />
        <div className={styles.boardContainerStyle}>
          <Board />
        </div>
      </div>
    </div>
  );
};

export default Background;
