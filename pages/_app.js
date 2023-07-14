import '../styles/globals.css'

import MainContainer from '../components/MainContainer'

/**
 * @brief Componente raiz do aplicativo.
 * 
 * @param Component O componente a ser renderizado.
 * @param pageProps As propriedades da página.
 * 
 * @return O elemento JSX do componente raiz do aplicativo.
 */
export default function App({ Component, pageProps }) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  )
}