import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebase from 'firebase/app';
import 'firebase/database';
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import { rrfConfig, connConfig } from './myVcard/main/firebaseConfig';
import reducers from './myVcard/main/reducers';
import App from './myVcard/main/App';

// initialize firebase instance
firebase.initializeApp(connConfig); // <- new to v2.*.*

// Add reduxReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(reactReduxFirebase(firebase, rrfConfig))(createStore);

// Create store with reducers and initial state
const initialState = {};
const store =
createStoreWithFirebase(
  reducers,
  initialState,
  applyMiddleware(thunk.withExtraArgument(getFirebase), multi, promise),
);

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// const store = applyMiddleware(thunk, promise, multi)(createStore)(reducers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
