import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GithubProfile, ProfileState } from 'app/store/types';

const initialState: ProfileState = {
  loading: true,
  data: undefined,
  error: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    loadRequest: state => {
      state.loading = true;
    },
    loadSuccess: (state, action: PayloadAction<GithubProfile>) => {
      state.loading = false;
      state.data = action.payload;
    },
    loadFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loadRequest, loadSuccess, loadFailure } = profileSlice.actions;

export default profileSlice.reducer;