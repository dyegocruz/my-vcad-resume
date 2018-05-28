function getMyVcardRequestedAction() {
  return {
    type: 'MYVCARD_DATA_REQUESTED',
  };
}

function getMyVcardRejectedAction(error) {
  return {
    type: 'MYVCARD_DATA_REJECTED',
    action: error,
  };
}

function getMyVcardAction(myVcard) {
  return {
    type: 'MYVCARD_DATA_FETCHED',
    myVcard,
  };
}

export default function getMyVcardData() {
  return async (dispatch, getState, getFireBase) => {
    dispatch(getMyVcardRequestedAction());
    const firebase = getFireBase();
    await firebase.ref('myvcard')
      .once('value', snap => dispatch(getMyVcardAction(snap.val())))
      .catch(error => dispatch(getMyVcardRejectedAction(error)));
  };
}
