const INITIAL_STATE = { myVcard: {} };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'MYVCARD_DATA_FETCHED':
      return { ...state, myVcard: action };
    default:
      return state;
  }
};
