import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';
import 'modules/devicons/css/devicons.min.css';
import 'modules/simple-line-icons/css/simple-line-icons.css';

import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

import { uiGA } from '../../consts';
import '../../assets/scss/app.scss';
import Container from '../components/Container';

const history = createBrowserHistory();
history.listen((location) => {
  window.ga('set', 'page', location.pathname + location.search);
  window.ga('send', 'pageview', location.pathname + location.search);
});

// initialize Google Analytics
ReactGA.initialize(uiGA.code);
ReactGA.pageview(window.location.pathname + window.location.search);

function fireTracking() {
  ReactGA.pageview(window.location.hash);
}

export default () => (
  <Router onUpdate={fireTracking} history={history}>
    <Route exact path="/" component={Container} />
  </Router>
);
