import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Section from '../common/template/Section';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Interests from './Interests';
import Awards from './Awards';
import getMyVcardData, { getCardViewFromState } from './MyVcardAction';

class Container extends Component {
  // async componentDidMount() {
  //   const test = await this.props.getMyVcardData();
  //   console.log(test);
  // }

  async componentWillMount() {
    // this.props.getMyVcardData();
    console.log(this.props.test);
  }

  render() {
    // const { about } = this.props.myVcard;
    console.log(this.props.myVcard);
    const { myVcard } = this.props;
    // if (myVcard == null) {
    //   return <div>Loading...</div>;
    // }
    return (
      <div className="container-fluid p-0">
        <Section variant="resume-section p-3 p-lg-5 d-flex d-column" id="about">
          { myVcard &&
            <h1>{myVcard.about.name}</h1>
          }
          LALLALAL
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

const mapStateToProps = state => ({ myVcard: getCardViewFromState(state) });

const mapDispatchToProps = dispatch => bindActionCreators({ getMyVcardData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Container);
