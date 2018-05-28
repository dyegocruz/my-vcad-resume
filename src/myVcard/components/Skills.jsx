import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from '../../common/Icon';

class Skills extends Component {
  renderSkills() {
    const list = this.props.skills.languageTools || [];
    return list.map(skill => (
      <li key={skill.id} className="list-inline-item">
        <Icon type="devicon" icon={skill.icon} title={skill.title} />
      </li>
    ));
  }

  renderWorkFlow() {
    const list = this.props.skills.workflow || [];
    return list.map(item => (
      <li key={item.id}>
        <Icon type="fa" icon="check" />
        {item.title}
      </li>
    ));
  }

  render() {
    return (
      <div className="my-auto">
        <h2 className="mb-5">Skills</h2>

        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul className="list-inline list-icons">
          {this.renderSkills()}
        </ul>

        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          {this.renderWorkFlow()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ skills: state.myVcardReducer.myVcard.skills });
export default connect(mapStateToProps)(Skills);
