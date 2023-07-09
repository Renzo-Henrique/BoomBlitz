import React from 'react';
import Background from './background'
import { GAME_SIZE_HEIGHT, GAME_SIZE_WIDTH } from '../settings/constants';
import styles from '../styles/App.module.css';

function App(){
    return(
        <div className={styles.App}>
                <Camera/>
        </div>
    );
}

export default App;