import React, { Component } from 'react';
import $ from 'jquery';
import Container from './Container';

import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';
import 'modules/devicons/css/devicons.min.css';
import 'modules/simple-line-icons/css/simple-line-icons.css';

import './assets/css/app.css';

import Nav from './Nav';

export default () => (
  <div>
    <Nav />
    <Container />
  </div>
);
