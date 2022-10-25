/* eslint-disable @typescript-eslint/no-unused-vars */

import { Sprite, useTick } from '@inlet/react-pixi/legacy';
import React, { FC, useRef, useState } from 'react';
import { useStore } from '../../../store/store';
import shallow from 'zustand/shallow';

// valor base
// 0.78;

// para mover 1 posicion
// 0.17

// baseValue + (numbersPositions[32] * 0.17)

const numbersPositions: any = {
	0: 0,
	32: 1,
	15: 2,
	19: 3,
	4: 4.2,
	21: 5.2,
	2: 6.2,
	25: 7.3,
	17: 8.4,
	34: 9.5,
	6: 10.6,
	27: 11.7,
	13: 12.8,
	36: 13.9,
	11: 14.9,
	30: 15.8,
	8: 16.8,
	23: 18,
	10: 19,
	5: 20,
	24: 21,
	16: 22,
	33: 23,
	1: 24,
	20: 25,
	14: 26,
	31: 26.8,
	9: 27.8,
	22: 28.5,
	18: 29.4,
	29: 30.3,
	7: 31.2,
	28: 32.1,
	12: 33.1,
	35: 34,
	3: 34.7,
	26: 35.5
};

const MOVE_DISTANCE = 0.0000005;
const SPEED_DECREASING = 0.00013;
const SPEED_INCREASING = 0.01;

const Bullet: FC<{ spin: boolean; input: number }> = ({ spin, input }) => {
	const spriteRef = useRef(null);
	const [rotation, setRotation] = useState(0.0);
	const [rotationDecreasing, setRotationDecreasing] = useState(0.1);
	const [levelJump, setLevelJumpBall] = useState(0);

	const [anchor, setAnchor] = useState(5.5);

	const [x, setX] = useState(200);
	const [y, setY] = useState(200);
	const [dy, setDy] = useState(-0.3);

	useTick((delta) => {
		if (!spin) {
			setRotation(0.0);
			setAnchor(5.5);
			setRotationDecreasing(0.1);
			setLevelJumpBall(0);
			return;
		}

		if (rotationDecreasing <= 0.0) return;

		if (anchor >= 3.9) {
			setDy(-0.05 * delta);
		}

		if (levelJump === 1) {
			setDy((prev) => prev + 0.01 * delta);
			setAnchor((prev) => prev + dy * delta);
		} else if (levelJump === 2) {
			setDy((prev) => prev + 0.005 * delta);
			setAnchor((prev) => prev + dy * delta);
		}

		if (anchor > 3 && anchor < 3.5) {
			setLevelJumpBall(1);
		}

		if (anchor > 3.5 && anchor < 3.9) {
			setLevelJumpBall(2);
		}

		if (anchor >= 3.9) {
			setAnchor((prev) => prev - SPEED_INCREASING * delta);
		}

		setRotationDecreasing(
			(prev) =>
				prev -
				(SPEED_DECREASING - numbersPositions[input] * MOVE_DISTANCE) * delta
		);
		setRotation((prev) => prev + rotationDecreasing * delta);
	});

	console.log(spin);

	return (
		<Sprite
			ref={spriteRef}
			buttonMode
			width={20}
			height={20}
			image='./assets/ball.png'
			x={x}
			y={y}
			anchor={anchor}
			rotation={rotation}
		/>
	);
};

export default Bullet;
