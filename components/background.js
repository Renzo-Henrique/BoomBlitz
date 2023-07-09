import React from 'react';
import Board from './board/board';
import styles from '../styles/Background.module.css';
import { GAME_SIZE_HEIGHT, GAME_SIZE_WIDTH } from '../settings/constants';
import Image from 'next/image'
function Background (){
  
  return (
    <div className={styles.background}>
        
        <div className={styles.board}>
          <Board />
        </div>
        
    </div>
  );
};
/** 
 * <Esquerda/>
 * <Direita/>
*/
export default Background;