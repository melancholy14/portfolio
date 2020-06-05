import axios from 'axios';

import { loadRequest, loadFailure, loadSuccess } from './slices/profileSlice';

export const loadGithubProfile = () => dispatch => {
  dispatch(loadRequest());

  axios('https://api.github.com/users/melancholy14')
  .then(response => {
    dispatch(loadSuccess(response.data));
  }).catch(error => {
    console.error(error);

    dispatch(loadFailure(error));
  });
}