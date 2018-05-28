import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import Section from '../../common/template/Section';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Interests from './Interests';
import Courses from './Courses';
import getMyVcardData from '../actions/MyVcardAction';

class Content extends Component {
  componentDidMount() {
    this.props.getMyVcardData();
  }

  render() {
    if (_.isEmpty(this.props.myVcard.about)) return null;
    return (
      <div className="Content-fluid p-0">
        <Section variant="resume-section p-3 p-lg-5 d-flex d-column" id="about">
          <About />
        </Section>

        <Section variant="resume-section p-3 p-lg-5 d-flex d-column" id="experience">
          <Experience />
        </Section>

        <Section variant="resume-section p-3 p-lg-5 d-flex d-column" id="education">
          <Education />
        </Section>

        <Section variant="resume-section p-3 p-lg-5 d-flex d-column" id="skills">
          <Skills />
        </Section>

        <Section variant="resume-section p-3 p-lg-5 d-flex d-column" id="interests">
          <Interests />
        </Section>

        <Section variant="resume-section p-3 p-lg-5 d-flex d-column" id="awards">
          <Courses />
        </Section>
      </div>
    );
  }
}

const mapStateToProps = state => ({ myVcard: state.myVcardReducer.myVcard });
const mapDispatchToProps = dispatch => bindActionCreators({ getMyVcardData }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Content);
