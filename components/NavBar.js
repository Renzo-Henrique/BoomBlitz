import Link from 'next/link'
import styles from '../styles/NavBar.module.css'

/**
 * 
 * @returns Retorna uma barra de navegabilidade posicionada na parte superior da tela\n
 * Redireciona para as páginas Home, Sobre e Contato
 */
export default function NavBar (){
    return (
        <ul className={styles.navbar}>
            <li>
                <Link href="/">
                    <h1>HOME</h1>
                </Link>
            </li>
            <li>
                <Link href="./about">
                    <h1>SOBRE</h1>
                </Link>
            </li>
            <li>
                <Link href="./contact">
                    <h1>CONTATO</h1>
                </Link>
            </li>
        </ul>
    )
}