import React from 'react';
import * as S from './style';

const Form = ({ handleSpin }: any) => {
	return (
		<S.Wrapper>
			<button onClick={handleSpin}>Rodar</button>
		</S.Wrapper>
	);
};

export default Form;
