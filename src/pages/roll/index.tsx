import { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Game = dynamic(() => import('../../components/Game'), { ssr: false });

const Roll: NextPage = () => {
	return <Game />;
};

export default Roll;
