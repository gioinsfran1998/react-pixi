import create from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

import { StoreType } from './types';

export const useStore = create<StoreType>()(
	subscribeWithSelector((set) => ({
		isPinRotate: false,
		setPinRotate: (value: boolean) => set(() => ({ isPinRotate: value })),
		input: 0,
		setInput: (value: number) => set(() => ({ input: value }))
	}))
);
