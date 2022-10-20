import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

// DYNAMIC IMPORT GAME
const Game = dynamic(() => import('../components/Game'), {
	ssr: false
});

const Home: NextPage = () => {
	return (
		<div>
			<Game />
		</div>
	);
};

export default Home;
