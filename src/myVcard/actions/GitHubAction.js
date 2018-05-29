import axios from 'axios';
import { gitHubEnv } from '../../../.env.local';
import ActionTypes from '../../common/ActionTypes';

export default function getGitHubData() {
  const request = axios.get(`${gitHubEnv.url}/${gitHubEnv.user}`);
  return {
    type: ActionTypes.GITHUB_DATA_FETCHED,
    payload: request,
  };
}
