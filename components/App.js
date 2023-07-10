import React from 'react';
import Background from './background'
import Camera from './camera'
import { GAME_SIZE_HEIGHT, GAME_SIZE_WIDTH } from '../settings/constants';
import styles from '../styles/App.module.css';
import Debugger from './debugger/debugger'

function App(){
    return(
        <div className={styles.App}>
            
            
            <Camera/>
        </div>
    );
}

export default App;