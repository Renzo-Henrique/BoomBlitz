import React from 'react';
import Head from 'next/head'

import App from '../components/App'

import styles from '../styles/Home.module.css'

/**
 * 
 * @returns Página principal do documento, tudo se inicia aqui. 
 * Define título da página e ícone mostrado
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