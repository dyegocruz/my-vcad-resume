// import axios from 'axios';
import Fire from '../Fire';

// function getMyVcardRequestedAction() {
//   return {
//     type: 'MYVCARD_DATA_REQUESTED',
//   };
// }

function getMyVcardRejectedAction() {
  return {
    type: 'MYVCARD_DATA_REJECTED',
  };
}

function getMyVcardAction(myVcard) {
  return {
    type: 'MYVCARD_DATA_FETCHED',
    myVcard,
  };
}

export const getCardViewFromState = (state) => {
  const { myVcard: { myVcard } } = state.mainReducer;
  return myVcard;
};

export default function getMyVcardData() {
  return async (dispatch) => {
    // dispatch(getMyVcardRequestedAction());
    Fire.ref('myvcard').once('value', (snap) => {
      const myVcard = snap.val();
      dispatch(getMyVcardAction(myVcard));
    })
      .catch((error) => {
        console.log(error);
        dispatch(getMyVcardRejectedAction());
      });
  };

  // const request = Fire.database().ref('myvcard').once('value');
  // // // https://api.github.com/users/dyegocruz
  // return (dispatch) => {
  //   // .then((snapshot) => {
  //   //   // ******** This method is straight from their docs ********
  //   //   // ******** It returns whatever is found at the path
  //   //   // xxxxx/users/user.uid ********
  //   //   // const vcard = snapshot.val();
  //   //   // console.log(' FOUND THIS USER FROM THE DB', vcard);
  //   //   // now dispatch whatever redux store action you have to store the user
  //   //   // information
  //   //   // dispatch(userSet(vcard))
  //   //   // console.log('LALAL');
  //   //   // console.log(snapshot.val());
  //   // })
  //   // .catch(err => console.log(err));
  //   dispatch({
  //     type: 'MYVCARD_DATA_FETCHED',
  //     payload: request,
  //   });
  // };

  // const request = axios.get('https://api.github.com/users/dyegocruz');
  // console.log('AQUI');
  // return {
  //   type: 'MYVCARD_DATA_FETCHED',
  //   payload: request,
  // };
}
