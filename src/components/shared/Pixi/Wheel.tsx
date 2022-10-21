// import { useState } from 'react';
import { Sprite } from '@inlet/react-pixi';

const Wheel = () => {
	return (
		<Sprite
			width={300}
			height={300}
			image='./assets/wheel-minimalist.png'
			x={200}
			y={200}
			anchor={0.5}
		/>
	);
};

export default Wheel;
