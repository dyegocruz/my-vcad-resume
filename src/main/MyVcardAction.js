// import axios from 'axios';
// import Fire from '../Fire';

// function getMyVcardRequestedAction() {
//   return {
//     type: 'MYVCARD_DATA_REQUESTED',
//   };
// }

// function getMyVcardRejectedAction() {
//   return {
//     type: 'MYVCARD_DATA_REJECTED',
//   };
// }

async function getMyVcardAction(myVcard) {
  // console.log(myVcard);
  return {
    type: 'MYVCARD_DATA_FETCHED',
    myVcard,
  };
}

// export const getCardViewFromState = (state) => {
//   const { myVcard: { myVcard } } = state.mainReducer;
//   return myVcard;
// };

// export default function getMyVcardData() {
//   // const request = axios.get('https://api.github.com/users/dyegocruz');
//   // return {
//   //   type: 'MYVCARD_DATA_FETCHED',
//   //   payload: request,
//   // };
// }

export default function getMyVcardData() {
  // return async (dispatch) => {
  //   dispatch(getMyVcardRequestedAction());
  //   await Fire.ref('myvcard').once('value', (snap) => {
  //     Promise.resolve(snap);
  //     const myVcard = snap.val();
  //     dispatch(getMyVcardAction(myVcard));
  //   })
  //     .catch((error) => {
  //       console.log(error);
  //       dispatch(getMyVcardRejectedAction());
  //     });
  // };

  // return (dispatch) => {
  //   // Fire.ref('myvcard').once('value')
  //   // .then(() => dispatch(getTasks(tasks)));
  //   let myVcard = {};
  //   getFirebase.ref('myvcard').once('value', (snap) => {
  //     myVcard = snap.val();
  //   })
  //     .then(() => dispatch(getMyVcardAction(myVcard)));
  // };

  return ((dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    return firebase
      .ref('myvcard').once('value')
      .then(snap => dispatch(getMyVcardAction(snap.val())));
    // Promise.resolve(f);
    // dispatch(getMyVcardAction(f.val()));
  });
  // const t = new Promise(resolve => (dispatch, getState, getFirebase) => {
  //   const firebase = getFirebase();
  //   firebase
  //     .ref('myvcard').once('value')
  //     .then((snap) => {
  //       resolve(dispatch(getMyVcardAction(snap.val())));
  //     });
  // });
  // return t.then(f => f.val());

  // return (dispatch) => {
  //   // const firebase = getFirebase();
  //   Fire
  //     .ref('myvcard').once('value')
  //     .then(snap => dispatch(getMyVcardAction(snap.val())));
  // };

// //   // const request = Fire.database().ref('myvcard').once('value');
// //   // // // https://api.github.com/users/dyegocruz
// //   // return (dispatch) => {
// //   //   // .then((snapshot) => {
// //   //   //   // ******** This method is straight from their docs ********
// //   //   //   // ******** It returns whatever is found at the path
// //   //   //   // xxxxx/users/user.uid ********
// //   //   //   // const vcard = snapshot.val();
// //   //   //   // console.log(' FOUND THIS USER FROM THE DB', vcard);
// //   //   //   // now dispatch whatever redux store action you have to store the user
// //   //   //   // information
// //   //   //   // dispatch(userSet(vcard))
// //   //   //   // console.log('LALAL');
// //   //   //   // console.log(snapshot.val());
// //   //   // })
// //   //   // .catch(err => console.log(err));
// //   //   dispatch({
// //   //     type: 'MYVCARD_DATA_FETCHED',
// //   //     payload: request,
// //   //   });
// //   // };

// //   // const request = axios.get('https://api.github.com/users/dyegocruz');
// //   // console.log('AQUI');
// //   // return {
// //   //   type: 'MYVCARD_DATA_FETCHED',
// //   //   payload: request,
// //   // };
}
