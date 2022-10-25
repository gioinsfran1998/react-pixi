import React from 'react';
import { useStore } from '../../../store/store';
import shallow from 'zustand/shallow';
import * as S from './style';

const numbersPositions: any = {
	0: 0,
	32: 1,
	15: 2,
	19: 3,
	4: 4.2,
	21: 5.2,
	2: 6.2,
	25: 7.3,
	17: 8.4,
	34: 9.5,
	6: 10.6,
	27: 11.7,
	13: 12.8,
	36: 13.9,
	11: 14.9,
	30: 15.8,
	8: 16.8,
	23: 18,
	10: 19,
	5: 20,
	24: 21,
	16: 22,
	33: 23,
	1: 24,
	20: 25,
	14: 26,
	31: 26.8,
	9: 27.8,
	22: 28.5,
	18: 29.4,
	29: 30.3,
	7: 31.2,
	28: 32.1,
	12: 33.1,
	35: 34,
	3: 34.7,
	26: 35.5
};

const Form = ({ handleSpin }: any) => {
	const [setInput] = useStore((state) => [state.setInput], shallow);

	return (
		<S.Wrapper>
			{/* // option */}
			<select
				onChange={(event) => {
					setInput(Number(event.target.value));
				}}
			>
				{Object.keys(numbersPositions).map((value) => {
					return (
						<>
							<option value={value} key={value}>
								{value}
							</option>
						</>
					);
				})}
			</select>
			<button onClick={handleSpin}>Rodar</button>
		</S.Wrapper>
	);
};

export default Form;
