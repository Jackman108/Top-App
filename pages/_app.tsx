import '@/styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import ym from 'react-yandex-metrika';
import { YMInitializer } from 'react-yandex-metrika';
import Router from 'next/router';

Router.events.on('routeChangeComplete', (url: string) => {
	if (typeof window != 'undefined') {
		ym('hit', url);
	}
});

function App({ Component, pageProps, router }: AppProps): JSX.Element {	
	return <>;
		<Head>
			<title>MyTop - наш лучший топ</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta property='og:url' content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
			<meta property='og:locale' content="ru-RU" />
			<link rel="icon" href="/favicon.ico" />
			<link rel="preconnect" href="https://mc.yandex.ru" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="http://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
		</Head>
		<YMInitializer
			accounts={[]}
			options={{ webvisor: true, defer: true }}
			version='2'
		/>
		<Component {...pageProps} />
	</>;
}

export default App;
