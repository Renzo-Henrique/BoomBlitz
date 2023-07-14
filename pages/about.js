import Link from 'next/link'
import Head from 'next/head'

/**
 * 
 * @returns Página sobre o desenvolvimento do Jogo
 */
export default function About(){
    return (
        <>
            <Head>
                <title>Sobre</title>
            </Head>
            <h1>Página de About</h1>
            <Link href="/">
                <h1>voltar</h1>
            </Link>
        </>
    )
}