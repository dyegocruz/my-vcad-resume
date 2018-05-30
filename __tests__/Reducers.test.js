import GitHubReducer from '../src/myVcard/reducers/GitHubReducer';
import MyVcardReducer from '../src/myVcard/reducers/MyVcardReducer';
import ActionTypes from '../src/common/ActionTypes';

describe('GitHub reducer', () => {
  it('Should return the GitHubReducer initial state', () => {
    expect(GitHubReducer(undefined, {})).toEqual({ gitHubData: {} });
  });

  it('Should handle GITHUB_DATA_FETCHED', () => {
    expect(GitHubReducer([], { type: ActionTypes.GITHUB_DATA_FETCHED, gitHubData: {} }))
      .toEqual({ gitHubData: undefined });
  });
});

describe('MyVcardReducer reducer', () => {
  it('Should return the MyVcardReducer initial state', () => {
    expect(MyVcardReducer(undefined, {})).toEqual({
      myVcard: {
        about: {},
        positions: {},
        skills: {},
      },
    });
  });

  it('Should handle MYVCARD_DATA_FETCHED', () => {
    expect(MyVcardReducer([], { type: ActionTypes.MYVCARD_DATA_FETCHED, myVcard: {} }))
      .toEqual({ myVcard: {} });
  });
});
