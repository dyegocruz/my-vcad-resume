import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';
import 'modules/devicons/css/devicons.min.css';
import 'modules/simple-line-icons/css/simple-line-icons.css';

import React from 'react';
import './assets/scss/app.scss';
import NavBar from './main/NavBar';
import Container from './main/Container';

export default () => (
  <div>
    <NavBar />
    <Container />
  </div>
);
