import { useAnimation } from 'framer-motion';
import React from 'react';
import Pixi from '../shared/Pixi';
import * as S from './style';

const Game = () => {
	const [spin, setSpin] = React.useState(false);
	const wrapperPixiAnimation = useAnimation();

	const handleSpin = async () => {
		setSpin(true);

		await wrapperPixiAnimation.start({
			rotate: -1080,
			transition: {
				duration: 18,
				ease: [0.33, 1, 0.68, 1]
			}
		});

		await wrapperPixiAnimation.start({
			rotate: 0,
			transition: {
				duration: 2,
				ease: [0.33, 1, 0.68, 1]
			}
		});

		setSpin(false);
	};

	return (
		<S.Wrapper>
			<button onClick={handleSpin}>Rodar</button>
			<S.WrapperPixi animate={wrapperPixiAnimation}>
				<Pixi spin={spin} />
			</S.WrapperPixi>
		</S.Wrapper>
	);
};

export default Game;
