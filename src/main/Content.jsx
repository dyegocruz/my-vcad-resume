import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import _ from 'lodash';
// import Fire from '../Fire';

import Section from '../common/template/Section';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Interests from './Interests';
import Awards from './Awards';
import getMyVcardData from './MyVcardAction';

class Content extends Component {
  // async componentDidMount() {
  //   const test = await this.props.getMyVcardData();
  //   console.log(test);
  // }
  componentDidMount() {
    // return t.then(f => f.val());
    // await Fire
    //   .ref('myvcard').once('value')
    //   .then((snap) => {
    //     console.log(snap.val());
    //   });
    this.props.getMyVcardData();
    // console.log(this.props.test);
  }

  render() {
    // const { about } = this.props.myVcard;
    console.log(this.props);
    // const { myVcard } = this.props;
    // if (myVcard == null) {
    //   return <div>Loading...</div>;
    // }
    // if (_.isEmpty(this.props.myVcard.about)) return null;
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
          <Awards />
        </Section>
      </div>
    );
  }
}

const mapStateToProps = state => ({ myVcard: state.mainReducer.myVcard });
const mapDispatchToProps = dispatch => bindActionCreators({ getMyVcardData }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Content);
