import React from 'react';
import { getFirebase } from 'react-redux-firebase';
import NavBar from './NavBar';
import Content from './Content';

const fire = getFirebase();
console.log(fire);

export default () => (
  <div>
    <NavBar />
    <Content />
  </div>
);
