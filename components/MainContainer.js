import NavBar from './NavBar'
import Footer from './Footer'
import styles from '../styles/MainContainer.module.css'

/**
 * @brief Componente que representa os elementos principais da aplicação
 * @returns Container principal da aplicação, 
 * Contem Barra de navegabilidade, Tabuleiro do jogo, Footer
 */
export default function MainContainer({children}){
    return (
        <>
            <NavBar/>
            <div className={styles.container}>{children}</div>
            <Footer/>
        </>
    )
}