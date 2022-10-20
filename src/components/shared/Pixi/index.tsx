import React, { FC } from 'react';

import { Stage } from '@inlet/react-pixi';

import Wheel from './Wheel';
import Bullet from './Bullet';

const Whell: FC<{ spin: boolean }> = ({ spin }) => {
	return (
		<Stage
			width={400}
			height={400}
			options={{
				autoDensity: true,
				backgroundColor: 0x00000,
				antialias: true,
				transparent: true
			}}
		>
			<Wheel />
			<Bullet spin={spin} />
		</Stage>
	);
};

export default Whell;
