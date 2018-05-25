import { combineReducers } from 'redux';
import { firebaseStateReducer } from 'react-redux-firebase';
import MyVcardReducer from './main/MyVcardReducer';

const rootReducer = combineReducers({
  mainReducer: MyVcardReducer,
  firabase: firebaseStateReducer,
});

export default rootReducer;
