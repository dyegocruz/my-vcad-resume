import React, { Component } from 'react';
import $ from 'jquery';
import Container from './Container';

import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';
import 'modules/devicons/css/devicons.min.css';
import 'modules/simple-line-icons/css/simple-line-icons.css';

import './assets/css/app.css';

import Nav from './Nav';

class App extends Component {
  componentDidMount() {
    console.log('iou');
    // $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    //   console.log('IEI');
    //   console.log($(window.location));
    //   if (window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && window.location.hostname === this.hostname) {
    //     let target = $(this.hash);
    //     target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
    //     if (target.length) {
    //       $('html, body').animate({
    //         scrollTop: (target.offset().top),
    //       }, 1000, 'easeInOutExpo');
    //       return false;
    //     }
    //   }
    // });

    // Closes responsive menu when a scroll trigger link is clicked
    // $('.js-scroll-trigger').click(function() {
    //   $('.navbar-collapse').collapse('hide');
    // });

    // // Activate scrollspy to add active class to navbar items on scroll
    // $('body').scrollspy({
    //   target: '#sideNav',
    // });
  }

  render() {
    return (
      <div>
        <Nav />
        <Container />
      </div>
    );
  }
}

export default App;

// export default () => (
//   <div>
//     <Nav />
//     <Container />
//   </div>
// );
