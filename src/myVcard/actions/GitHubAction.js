import axios from 'axios';
import { gitHubEnv } from '../../consts';
import ActionTypes from '../../common/ActionTypes';

export const getGitHubDataRequested = () => ({ type: ActionTypes.GITHUB_DATA_REQUESTED });
export const getGitHubDataRejected = err => (
  { type: ActionTypes.GITHUB_DATA_REJECTED, action: err }
);

export const getGitHubDataAction = res => ({
  type: ActionTypes.GITHUB_DATA_FETCHED,
  payload: res,
});

export const getGitHubData = () => (dispatch) => {
  dispatch(getGitHubDataRequested());

  const request = axios.get(`${gitHubEnv.url}/${gitHubEnv.user}`);
  request.then((res) => {
    dispatch(getGitHubDataAction(res));
    return res;
  }).catch((err) => {
    dispatch(getGitHubDataRejected(err));
    return err;
  });
};
