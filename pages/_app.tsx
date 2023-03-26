import '@/styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';


function App({ Component, pageProps, router }: AppProps): JSX.Element {
	return <>;

		<Head>
			<title>MyTop - наш лучший топ</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta property='og:url' content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
			<meta property='og:locale' content="ru-RU" />
			<link rel="icon" href="/favicon.ico" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="http://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
		</Head>
		<Component {...pageProps} />
	</>;
}

export default App;
