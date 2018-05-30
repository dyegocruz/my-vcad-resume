import GitHubReducer from '../../src/myVcard/reducers/GitHubReducer';
import ActionTypes from '../../src/common/ActionTypes';

describe('GitHub reducer', () => {
  it('Should return the GitHubReducer initial state', () => {
    expect(GitHubReducer(undefined, {})).toEqual({ gitHubData: {} });
  });

  it('Should handle GITHUB_DATA_FETCHED', () => {
    expect(GitHubReducer([], { type: ActionTypes.GITHUB_DATA_FETCHED, gitHubData: {} }))
      .toEqual({ gitHubData: undefined });
  });
});
