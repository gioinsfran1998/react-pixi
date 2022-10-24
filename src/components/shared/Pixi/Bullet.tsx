/* eslint-disable @typescript-eslint/no-unused-vars */

import { Sprite, useTick } from '@inlet/react-pixi/legacy';
import React, { FC, useRef, useState } from 'react';

// valor base
// 0.78;

// para mover 1 posicion
// 0.17

// baseValue + (numbersPositions[32] * 0.17)

const numbersPositions: any = {
	0: 0,
	32: 1,
	22: 28
};

const SPEED_DECREASING = 0.0002;
const SPEED_INCREASING = 0.01;

const Bullet: FC<{ spin: boolean }> = ({ spin }) => {
	const spriteRef = useRef(null);
	const [rotation, setRotation] = useState(0.0);
	const [rotationDecreasing, setRotationDecreasing] = useState(0.1);
	const [levelJump, setLevelJumpBall] = useState(0);

	const [input, _] = useState('32');

	const [anchor, setAnchor] = useState(5.5);

	const [x, setX] = useState(200);
	const [y, setY] = useState(200);
	const [dy, setDy] = useState(-0.3);

	useTick((delta) => {
		if (!spin) {
			setRotation(0.0);
			setAnchor(5.5);
			return;
		}

		if (rotationDecreasing <= 0.0) return;

		if (anchor >= 3.8) {
			setDy(-0.05 * delta);
		}

		if (levelJump === 1) {
			setDy((prev) => prev + 0.01 * delta);
			setAnchor((prev) => prev + dy * delta);
		} else if (levelJump === 2) {
			setDy((prev) => prev + 0.005 * delta);
			setAnchor((prev) => prev + dy * delta);
		}

		if (anchor > 3 && anchor < 3.4) {
			setLevelJumpBall(1);
		}

		if (anchor > 3.4 && anchor < 3.8) {
			setLevelJumpBall(2);
		}

		if (anchor >= 3.8) {
			setAnchor((prev) => prev - SPEED_INCREASING * delta);
		}

		setRotationDecreasing((prev) => prev - SPEED_DECREASING * delta);
		setRotation((prev) => prev + rotationDecreasing * delta);
	});

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
