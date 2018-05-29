export function getMyVcardRequestedAction() {
  return {
    type: 'MYVCARD_DATA_REQUESTED',
  };
}

export function getMyVcardRejectedAction(error) {
  return {
    type: 'MYVCARD_DATA_REJECTED',
    action: error,
  };
}

export function getMyVcardAction(myVcard) {
  return {
    type: 'MYVCARD_DATA_FETCHED',
    myVcard,
  };
}

export function getMyVcardData() {
  return async (dispatch, getState, getFireBase) => {
    dispatch(getMyVcardRequestedAction());
    const firebase = getFireBase();
    await firebase.ref('myvcard')
      .once('value', snap => dispatch(getMyVcardAction(snap.val())))
      .catch(error => dispatch(getMyVcardRejectedAction(error)));
  };
}
