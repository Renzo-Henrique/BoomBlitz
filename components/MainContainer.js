import NavBar from './NavBar'
import Footer from './Footer'

import styles from '../styles/MainContainer.module.css'

/**
 * 
 * @param {*} param0 
 * @returns 
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