import React, { Component } from 'react';
import { connect } from 'react-redux';

class Interests extends Component {
  renderInterests() {
    const list = this.props.interests || [];
    return list.map(interest => (
      <li key={Math.random()}>{interest}</li>
    ));
  }

  render() {
    return (
      <div className="my-auto">
        <h2 className="mb-5">Interests</h2>
        <ul>
          {this.renderInterests()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ interests: state.myVcardReducer.myVcard.interests });
export default connect(mapStateToProps)(Interests);
