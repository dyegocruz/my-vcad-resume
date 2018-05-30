import ActionTypes from '../../common/ActionTypes';

export const getMyVcardRequestedAction = () => ({ type: ActionTypes.MYVCARD_DATA_REQUESTED });

export const getMyVcardRejectedAction = error => ({
  type: ActionTypes.MYVCARD_DATA_REJECTED,
  action: error,
});

export const getMyVcardAction = myVcard => ({
  type: ActionTypes.MYVCARD_DATA_FETCHED,
  myVcard,
});

export const getMyVcardData = () => async (dispatch, getState, getFireBase) => {
  dispatch(getMyVcardRequestedAction());
  const firebase = getFireBase();
  await firebase.ref('myvcard')
    .once('value', snap => dispatch(getMyVcardAction(snap.val())))
    .catch(error => dispatch(getMyVcardRejectedAction(error)));
};
