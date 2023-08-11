/* pages/_app.tsx */

import '../styles/globals.scss'; // Import your global styles

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
