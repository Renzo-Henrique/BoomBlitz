import React from 'react';
import Head from 'next/head'

import App from '../components/App'

import styles from '../styles/Home.module.css'

/**
 * @brief Componente que representa a página principal do documento. Tudo se inicia aqui.
 * Define o título da página e o ícone mostrado.
 * Invoca o componente App para ser renderizado.
 * 
*/
function Home(){
    return(
      <>
      <Head>
        <title>BoomBlitz</title>
        <link rel="icon" type="image/png" href="/assets/eggs/blue_egg_icon.png" sizes="1024x1024">
        
        </link>
      </Head>
        <div className={styles.container}>
          <App/>
        </div>
      </>
    )
}

export default Home;