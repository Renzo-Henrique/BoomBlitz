import React from 'react';
import Board from './board/board';
import styles from '../styles/Camera.module.css';
import Debugger from './debugger/debugger'

/**
 * @brief Componente que representa a câmera do jogo.
 * @returns Div representando o tamanho do tabuleiro
 * Para habilitar a função de debugger e ver como funciona a matriz de colisões
 * comente ou descomente a linha que contem Debugger, exemplos abaixo
 */
function Camera (){
  return (
    <div className={styles.camera}>
      
      <Board/>
      {/*<Debugger/>*/ }
    </div>
  );
};

// Desativar o debugger
// {/* <Debugger/> */} 

// Ativar o debugger
// { <Debugger/> }

export default Camera;
