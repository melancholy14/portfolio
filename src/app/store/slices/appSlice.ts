import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppState } from 'app/store/types';

const initialState: AppState = {
  bgClassName: 'bg-teal-600',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setBackgroundClass: (state, action: PayloadAction<string>) => {
      state.bgClassName = action.payload;
    },
  },
});

export const { setBackgroundClass } = appSlice.actions;

export default appSlice.reducer;
