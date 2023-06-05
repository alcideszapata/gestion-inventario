import React from 'react'
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';

const IndexPage = () => {
    const { data: session } = useSession();

    console.log(session)
    return (
        <div className='login-bg'>
            <div className='flex h-screen w-full flex-col items-center justify-center gap-5'>
                <img src='resources/icons/icon-gradient.png' />
                <h1 className='text-6xl text-white justify-center'>Gestión de Inventarios</h1>

                {session ? (
                    <Link href='/app'>
                        <button>Ir a la app</button>
                    </Link>
                ) : (
                    <>
                        <h2 className='text-2xl text-white'>Bienvenido. Por favor inicia sesión</h2>
                        <div>
                            <button onClick={() => signIn('auth0')}>Iniciar Sesión</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
export default IndexPage;