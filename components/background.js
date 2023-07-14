import React from 'react';
import Board from './board/board';
import styles from '../styles/Background.module.css';

/**
 * @brief Componente que representa o plano de fundo do jogo.
 * @returns O componente do plano de fundo.
 */
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