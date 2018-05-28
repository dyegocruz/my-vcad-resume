const INITIAL_STATE = { githubData: {} };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GITHUB_DATA_FETCHED':
      return { ...state, githubData: action.payload.data };
    default:
      return state;
  }
};
