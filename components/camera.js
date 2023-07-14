import React from 'react';
import Board from './board/board';
import styles from '../styles/Camera.module.css';
import Debugger from './debugger/debugger'

function Camera (){
  return (
    <div className={styles.camera}>
      <Board/>
    </div>
  );
};

export default Camera;
