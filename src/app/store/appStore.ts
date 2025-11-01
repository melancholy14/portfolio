import { create } from 'zustand';

import { AppState } from './types';

interface AppStore extends AppState {
  setBackgroundClass: (bgClassName: string) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  bgClassName: 'bg-teal-600',
  setBackgroundClass: (bgClassName: string) => set({ bgClassName }),
}));
