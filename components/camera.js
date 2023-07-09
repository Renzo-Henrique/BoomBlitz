import React from 'react';
import Board from './board/board';
import styles from '../styles/Camera.module.css';

function Camera (){
  return (
    <div className={styles.camera}>
      <Board/>
    </div>
  );
};

export default Camera;