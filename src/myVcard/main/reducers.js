import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import MyVcardReducer from '../reducers/MyVcardReducer';
import GitHubReducer from '../reducers/GitHubReducer';

const rootReducer = combineReducers({
  myVcardReducer: MyVcardReducer,
  gitHubReducer: GitHubReducer,
  firabase: firebaseReducer,
});

export default rootReducer;
