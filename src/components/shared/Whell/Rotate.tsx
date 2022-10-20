// import { useState } from 'react';
import { Sprite } from '@inlet/react-pixi';

const Rotate = () => {
	// const [y, setY] = useState(0);
	// const [rotation, setRotation] = useState(0.1);

	// useTick((delta) => {
	// 	// i += 0.05 * delta;

	// 	// setX(Math.sin(i) * 100);
	// 	// setY(Math.sin(i / 1.5) * 100);
	// 	setRotation((prev) => prev + 0.015 * delta);
	// });
	return (
		<Sprite
			width={400}
			height={400}
			image='./assets/whell.png'
			x={400}
			y={400}
			anchor={0.5}
			// rotation={rotation}
		/>
	);
};

export default Rotate;
