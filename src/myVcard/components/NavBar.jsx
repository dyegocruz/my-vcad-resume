import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import $ from 'jquery';
import 'jquery-easing';
import 'bootstrap';
import { getGitHubData } from '../actions/GitHubAction';

class NavBar extends Component {
  componentWillMount() {
    this.props.getGitHubData();
  }

  componentDidMount() {
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function call() {
      if (window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && window.location.hostname === this.hostname) {
        let target = $(this.hash);
        target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top),
          }, 1000, 'easeInOutExpo');
          return false;
        }
      }
      return true;
    });
    $('.js-scroll-trigger').click(() => {
      $('.navbar-collapse').collapse('hide');
    });

    $('body').scrollspy({
      target: '#sideNav',
    });
  }

  render() {
    const { github } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Dyego Cruz Vcard Resume</span>
          <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={github.avatar_url} alt="" />
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#awards">Courses</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => ({ github: state.gitHubReducer.gitHubData });
const mapDispatchToProps = dispatch => bindActionCreators({ getGitHubData }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
