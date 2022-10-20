import React from 'react';
import Whell from '../shared/Whell';
import * as S from './style';

const Game = () => {
	// const [scale, setScale] = useState(1);
	return (
		<S.Wrapper>
			<Whell />
			{/* <S.Options>
				<button onClick={() => setScale((prev) => prev - 0.1)}>Scale -</button>
				<button onClick={() => setScale((prev) => prev + 0.1)}>Scale +</button>
			</S.Options> */}
		</S.Wrapper>
	);
};

export default Game;
