import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    loading: false,
    data: undefined,
    error: undefined,
  },
  reducers: {
    loadRequest: state => {
      state.loading = true;
    },
    loadSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    loadFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loadRequest, loadSuccess, loadFailure } = profileSlice.actions;

export const selectProfile = state => state.profile;

export default profileSlice.reducer;