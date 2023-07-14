import Link from 'next/link'
import Head from 'next/head'

/**
 * @returns Página com as informações de contato dos membros
 */
export default function About(){
    return (
        <>
            <Head>
                <title>Contato</title>
            </Head>
            <h1>Página de Contato</h1>
            <Link href="/">
                <h1>voltar</h1>
            </Link>
        </>
    )
}