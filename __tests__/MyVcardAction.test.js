import { getMyVcardRequestedAction, getMyVcardAction, getMyVcardRejectedAction } from '../src/myVcard/actions/MyVcardAction';
import ActionTypes from '../src/common/ActionTypes';

describe('MyVcard Actions', () => {
  it('Should create an action to request Vcard Data', () => {
    const expectedAction = {
      type: ActionTypes.MYVCARD_DATA_REQUESTED,
    };
    expect(getMyVcardRequestedAction()).toEqual(expectedAction);
  });

  it('Should create an action to reject Vcard Data', () => {
    const expectedAction = {
      type: ActionTypes.MYVCARD_DATA_REJECTED,
    };
    expect(getMyVcardRejectedAction()).toEqual(expectedAction);
  });

  it('Should create an action to fetched Vcard Data', () => {
    const expectedAction = {
      type: ActionTypes.MYVCARD_DATA_FETCHED,
    };
    expect(getMyVcardAction()).toEqual(expectedAction);
  });
});
