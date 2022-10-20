import { Sprite, useTick } from '@inlet/react-pixi';
import React, { FC, useRef, useState } from 'react';

// const i = 0;
const Bullet: FC<{ spin: boolean }> = ({ spin }) => {
	const spriteRef = useRef(null);
	const [rotation, setRotation] = useState(0.0);

	const [anchor, setAnchor] = useState(5.5);
	const [x, setX] = useState(200);
	const [y, setY] = useState(200);
	const [dy, setDy] = useState(-10);

	useTick((delta) => {
		if (!spin) {
			setRotation(0.0);
			setAnchor(5.5);
			return;
		}

		if (anchor >= 3.8) setAnchor((prev) => prev - 0.01 * delta);

		if (rotation >= 27.3) {
			return setRotation((prev) => prev + 0.0 * delta);
		}

		if (rotation >= 26) {
			return setRotation((prev) => prev + 0.03 * delta);
		}

		if (rotation >= 25) {
			return setRotation((prev) => prev + 0.05 * delta);
		}

		if (rotation >= 20) {
			return setRotation((prev) => prev + 0.07 * delta);
		}

		if (rotation >= 10) {
			return setRotation((prev) => prev + 0.09 * delta);
		}

		setRotation((prev) => prev + 0.1 * delta);

		// if (y >= 100) {
		// 	setDy(-10 * delta);
		// }
		// setDy((prev) => prev + 0.5 * delta);
		// setY((prev) => prev + dy * delta);
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
