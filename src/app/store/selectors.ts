import { RootState } from './index';

export const selectApp = (state: RootState) => state.app;

export const selectProfile = (state: RootState) => state.profile;
