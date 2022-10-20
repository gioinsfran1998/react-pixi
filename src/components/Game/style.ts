import styled from 'styled-components';

import { motion } from 'framer-motion';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;

export const WrapperPixi = styled(motion.div)`
	canvas {
		background: tramsparent;
	}
`;

export const Options = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	padding: 10px;
	gap: 10px;
`;
