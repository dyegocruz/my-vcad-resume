import axios from 'axios';
import { gitHubEnv } from '../../../.env.local';

export default function getGitHubData() {
  const request = axios.get(`${gitHubEnv.url}/${gitHubEnv.user}`);
  return {
    type: 'GITHUB_DATA_FETCHED',
    payload: request,
  };
}
