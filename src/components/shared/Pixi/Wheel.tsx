// import { useState } from 'react';
import { Sprite, useTick } from '@inlet/react-pixi';
import { useState } from 'react';

const Wheel = () => {
	// const [rotation, setRotation] = useState(0.1);

	// useTick((delta) => {
	// 	if (rotation <= -27.3) {
	// 		return setRotation((prev) => prev - 0.0 * delta);
	// 	}

	// 	if (rotation <= -26) {
	// 		return setRotation((prev) => prev - 0.01 * delta);
	// 	}

	// 	if (rotation <= -25) {
	// 		return setRotation((prev) => prev - 0.02 * delta);
	// 	}

	// 	if (rotation <= -20) {
	// 		return setRotation((prev) => prev - 0.05 * delta);
	// 	}

	// 	if (rotation <= 10) {
	// 		return setRotation((prev) => prev - 0.05 * delta);
	// 	}

	// 	setRotation((prev) => prev - 0.05 * delta);
	// });

	return (
		<Sprite
			width={300}
			height={300}
			image='./assets/wheel-minimalist.png'
			x={200}
			y={200}
			anchor={0.5}
			// rotation={rotation}
		/>
	);
};

export default Wheel;
