import React, { Component } from 'react';
import { connect } from 'react-redux';

class Experience extends Component {
  renderSummary(list) {
    return list.map(item => (
      <li key={Math.random()}>{item}</li>
    ));
  }

  renderEndDate(position) {
    if (position.isCurrent) {
      return (<span>Present</span>);
    }
    return <span>{position.endDate.month} {position.endDate.year}</span>;
  }

  renderPositions() {
    const list = this.props.positions || [];
    return list.map(position => (
      <div key={position.id} className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">{position.title}</h3>
          <div className="subheading mb-3">{position.company}</div>
          <ul>
            {this.renderSummary(position.summary)}
          </ul>
          <p><strong>Environment</strong>: {position.environment}</p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">
            {position.startDate.month} {position.startDate.year} - {this.renderEndDate(position)}
          </span>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="my-auto">
        <h2 className="mb-5">Experience</h2>
        {this.renderPositions()}
      </div>
    );
  }
}

const mapStateToProps = state => ({ positions: state.myVcardReducer.myVcard.positions });
export default connect(mapStateToProps)(Experience);
