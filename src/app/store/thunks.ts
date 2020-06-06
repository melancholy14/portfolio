import axios from 'axios';

import { loadRequest, loadFailure, loadSuccess } from './slices/profileSlice';
import { AppDispatch } from '.';

export const loadGithubProfile = () => (dispatch: AppDispatch) => {
  dispatch(loadRequest());

  axios('https://api.github.com/users/melancholy14')
  .then(response => {
    dispatch(loadSuccess(response.data));
  }).catch(error => {
    console.error(error);

    dispatch(loadFailure(error));
  });
}