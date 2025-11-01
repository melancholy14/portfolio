import axios from 'axios';
import { create } from 'zustand';

import { GithubProfile, ProfileState } from './types';

interface ProfileStore extends ProfileState {
  loadGithubProfile: () => Promise<void>;
}

export const useProfileStore = create<ProfileStore>((set) => ({
  loading: true,
  data: undefined,
  error: undefined,
  loadGithubProfile: async () => {
    set({ loading: true, error: undefined });
    try {
      const response = await axios.get<GithubProfile>(
        'https://api.github.com/users/melancholy14'
      );
      set({ loading: false, data: response.data, error: undefined });
    } catch (error) {
      console.error(error);
      set({ loading: false, error: String(error) });
    }
  },
}));
