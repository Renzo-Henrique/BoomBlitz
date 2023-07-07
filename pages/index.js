import React from 'react';
import Head from 'next/head'

import App from '../components/App'

import styles from '../styles/Home.module.css'

function Home(){
    return(
      <>
      <Head>
        <title>Página Inicial</title>
      </Head>
        <div className={styles.container}>
          <App/>
        </div>
      </>
    )
}

export default Home;