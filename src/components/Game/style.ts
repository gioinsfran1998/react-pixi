import styled from 'styled-components';

import { motion } from 'framer-motion';

export const Wrapper = styled.div`
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: hidden;

	min-height: 100vh;
`;

export const WrapperPixi = styled(motion.div)`
	canvas {
		background: tramsparent;
	}
	position: absolute;
`;

export const Options = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	padding: 10px;
	gap: 10px;
`;
