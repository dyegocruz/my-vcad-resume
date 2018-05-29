import ActionTypes from '../../common/ActionTypes';

const INITIAL_STATE = { gitHubData: {} };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GITHUB_DATA_FETCHED:
      return { ...state, gitHubData: action.payload.data };
    default:
      return state;
  }
};
