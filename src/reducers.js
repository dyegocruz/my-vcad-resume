import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import MyVcardReducer from './main/MyVcardReducer';

const rootReducer = combineReducers({
  mainReducer: MyVcardReducer,
  firabase: firebaseReducer,
});

export default rootReducer;
