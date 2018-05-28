import React, { Component } from 'react';
import { connect } from 'react-redux';

class Education extends Component {
  renderEducations() {
    const list = this.props.education || [];
    return list.map(education => (
      <div key={education.id} className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">{education.institution}</h3>
          <div className="subheading mb-3">{education.degree}</div>
          <div>{education.courseName}</div>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">{education.fromYear} - {education.toYear}</span>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="my-auto">
        <h2 className="mb-5">Education</h2>
        {this.renderEducations()}
      </div>
    );
  }
}

const mapStateToProps = state => ({ education: state.myVcardReducer.myVcard.education });
export default connect(mapStateToProps)(Education);
