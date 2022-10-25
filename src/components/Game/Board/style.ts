import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;

	border: 1px teal solid;
	border-radius: 5px;
	background: rgb(114, 166, 114);
	background: linear-gradient(
		319deg,
		rgba(114, 166, 114, 1) 0%,
		rgba(120, 224, 143, 1) 30%,
		rgba(120, 224, 143, 1) 60%,
		rgba(114, 166, 114, 1) 100%
	);

	max-width: 800px;
	height: 340px;

	width: 100%;

	overflow: hidden;
`;
