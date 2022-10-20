import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment } from 'react';
import GlobalStyles from '../components/Theme/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
			<Head>
				<title>Roulette</title>
			</Head>
			<GlobalStyles />
			<Component {...pageProps} />
		</Fragment>
	);
}

export default MyApp;
