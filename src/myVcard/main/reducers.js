import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import MyVcardReducer from '../reducers/MyVcardReducer';

const rootReducer = combineReducers({
  myVcardReducer: MyVcardReducer,
  firabase: firebaseReducer,
});

export default rootReducer;
