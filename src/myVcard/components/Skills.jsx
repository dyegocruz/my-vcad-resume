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
          <li>
            <Icon type="fa" icon="check" />
            Mobile-First, Responsive Design
          </li>
          <li>
            <Icon type="fa" icon="check" />
            Cross Browser Testing &amp; Debugging
          </li>
          <li>
            <Icon type="fa" icon="check" />
            Cross Functional Teams
          </li>
          <li>
            <Icon type="fa" icon="check" />
            Agile Development &amp; Scrum
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ skills: state.myVcardReducer.myVcard.skills });
export default connect(mapStateToProps)(Skills);
