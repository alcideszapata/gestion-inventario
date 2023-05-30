import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import '@styles/globals.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
    const client = new ApolloClient({
        uri: '/api/graphql',
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={client}>
            <SessionProvider session={session}>
                <Component {...pageProps} />
            </SessionProvider>
        </ApolloProvider>
    );
};

export default App;
