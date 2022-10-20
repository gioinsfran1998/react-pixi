import { Sprite, useTick } from '@inlet/react-pixi';
import React, { useRef, useState } from 'react';

// const i = 0;
const Bullet = () => {
	const spriteRef = useRef(null);

	const [rotation, setRotation] = useState(0.1);
	const [x, setX] = useState(400);

	useTick((delta) => {
		// i += 0.05 * delta;

		// setX(i * 11.1);
		// setY(Math.sin(i / 1.5) * 100);
		// setX((prev) => prev + 6);
		setRotation((prev) => prev + 0.045 * delta);
	});

	const onClick = () => {
		setX((prev) => prev + 6);
	};

	return (
		<Sprite
			ref={spriteRef}
			buttonMode
			interactive
			width={20}
			height={20}
			image='./assets/ball.png'
			x={x}
			// x={400}
			y={400}
			anchor={4.8}
			rotation={rotation}
			// on={onClick}
			pointerdown={onClick}
		/>
	);
};

export default Bullet;
