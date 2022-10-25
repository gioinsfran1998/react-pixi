import React from 'react';

import { useStore } from '../../store/store';
import { useAnimation } from 'framer-motion';

import Pixi from '../shared/Pixi';
import Board from './Board';
import shallow from 'zustand/shallow';
import Form from './Form';

import * as S from './style';
// import useSound from 'use-sound';

const Game = () => {
	// const [soundRollingBall, setSoundRollingBall] = useState(0);
	const [isPinRotate, setPinRotate, input] = useStore(
		(state) => [state.isPinRotate, state.setPinRotate, state.input],
		shallow
	);
	const wrapperPixiAnimation = useAnimation();

	// const [soundRolling] = useSound('/rolling-ball.mp3', {
	// 	loop: true,
	// 	volume: soundRollingBall
	// });

	const handleSpin = async () => {
		await wrapperPixiAnimation.start({
			translateY: 0,
			transition: {
				duration: 1,
				ease: [0.5, 1, 0.68, 1]
			}
		});
		setPinRotate(true);

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

		await wrapperPixiAnimation.start({
			translateY: -1000,
			transition: {
				duration: 2,
				ease: [0.5, 1, 0.68, 1]
			}
		});
		setPinRotate(false);
	};

	return (
		<S.Wrapper>
			<S.WrapperPixi
				initial={{ translateY: -1000 }}
				animate={wrapperPixiAnimation}
			>
				<Pixi spin={isPinRotate} input={input} />
			</S.WrapperPixi>

			<Board />
			<Form handleSpin={handleSpin} />
		</S.Wrapper>
	);
};

export default Game;
