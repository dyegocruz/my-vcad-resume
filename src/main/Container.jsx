import React, { Component } from 'react';
import Section from '../common/template/Section';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Interests from './Interests';
import Awards from './Awards';
import Fire from '../Fire';

class Container extends Component {
  componentWillMount() {
    Fire.database().ref('myvcard').once('value')
      .then((snapshot) => {
        // ******** This method is straight from their docs ********
        // ******** It returns whatever is found at the path
        // xxxxx/users/user.uid ********
        const vcard = snapshot.val();
        console.log(' FOUND THIS USER FROM THE DB', vcard);
        // now dispatch whatever redux store action you have to store the user
        // information
        // dispatch(userSet(vcard))
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container-fluid p-0">
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

export default Container;
