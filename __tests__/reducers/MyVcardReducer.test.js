import MyVcardReducer from '../../src/myVcard/reducers/MyVcardReducer';
import ActionTypes from '../../src/common/ActionTypes';

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

