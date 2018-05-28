import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';
import 'modules/devicons/css/devicons.min.css';
import 'modules/simple-line-icons/css/simple-line-icons.css';

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../../assets/scss/app.scss';
import Container from '../components/Container';

export default () => (
  <Router>
    <Route exact path="/" component={Container} />
  </Router>
);
