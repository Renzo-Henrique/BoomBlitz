import styles from '../styles/Footer.module.css'

/**
 * @brief Componente que representa o footer da página
 * @returns Retorna um footer de página com informações dos devs
 */
export default function Footer() {
    return(
        <p className={styles.footer}>
            Trabalho de Projeto Integrado Feito por Lucas Taborda e Renzo Henrique &copy; 2023
        </p>
    )
}