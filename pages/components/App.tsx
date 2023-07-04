import React from 'react';
//import './App.css';
import Board from './board'
import { GAME_SIZE_HEIGHT, GAME_SIZE_WIDTH } from '../settings/constants';
import styles from './App.module.css';
function App(){
    return(
        <div 
        className={styles.App}>
            <div 
            className="App-header"
            style={{
                position:'relative',
                width: GAME_SIZE_WIDTH,
                height: GAME_SIZE_HEIGHT,
            }}>
                <Board/>
            </div>
        </div>
    );
}

export default App;