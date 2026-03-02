import { create } from 'zustand';

interface StoreState {
    isSourceCodeMode: boolean;
    toggleSourceCodeMode: () => void;
}

export const useStore = create<StoreState>((set) => ({
    isSourceCodeMode: false,
    toggleSourceCodeMode: () => set((state) => ({ isSourceCodeMode: !state.isSourceCodeMode })),
}));
