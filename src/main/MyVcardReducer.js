const INITIAL_STATE = {
  myVcard: {
    about: {},
    positions: {},
    skills: {},
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'MYVCARD_DATA_FETCHED':
      return { ...state, myVcard: action.myVcard };
    default:
      return state;
  }
};
