import { Html, Head, Main, NextScript } from 'next/document'

/**
 * @brief Arquivo especial usado no Next.js para personalizar a renderização do documento HTML para a aplicação.
 * 
 * @return O elemento JSX que representa o documento HTML personalizado.
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
