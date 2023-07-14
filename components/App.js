import React from 'react';
import Background from './background'
import Camera from './camera'
import { GAME_SIZE_HEIGHT, GAME_SIZE_WIDTH } from '../settings/constants';
import styles from '../styles/App.module.css';
import Debugger from './debugger/debugger'
import CanvasProvider from './canvas/canvasContext'
/**
 * 
 * @brief Componente raiz da aplicação. Renderiza o conteúdo principal da aplicação.
 * @returns O componente do App .
 */
function App(){
    return(
        <div className={styles.App}>
            <CanvasProvider>
                <Camera/>
            </CanvasProvider>
        </div>
    );
}

export default App;