import React, { FC } from 'react';

import { Stage } from '@inlet/react-pixi/legacy';

import Wheel from './Wheel';
import Bullet from './Bullet';

const Pixi: FC<{ spin: boolean; input: number }> = ({ spin, input }) => {
	return (
		<Stage
			width={400}
			height={400}
			options={{
				autoDensity: true,
				backgroundAlpha: 0,
				backgroundColor: 0x00000,
				antialias: true,
				forceCanvas: true
			}}
		>
			<Wheel />
			<Bullet spin={spin} input={input} />
		</Stage>
	);
};

export default Pixi;
