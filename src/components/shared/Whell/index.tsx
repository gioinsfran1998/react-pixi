import React, { FC } from 'react';
import { Stage } from '@inlet/react-pixi';
import Rotate from './Rotate';
import Bullet from './Bullet';

const Whell: FC = () => {
	return (
		<Stage
			width={800}
			height={800}
			options={{
				autoDensity: true,
				backgroundColor: 0x273c75,
				antialias: true
			}}
		>
			<Rotate />
			<Bullet />
		</Stage>
	);
};

export default Whell;
