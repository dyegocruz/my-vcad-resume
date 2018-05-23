import React from 'react';
import Icon from '../common/Icon';

export default () => (
  <div className="my-auto">
    <h2 className="mb-5">Skills</h2>

    <div className="subheading mb-3">Programming Languages &amp; Tools</div>
    <ul className="list-inline list-icons">
      <li className="list-inline-item">
        <Icon type="devicon" icon="html5" />
      </li>
      <li className="list-inline-item">
        <Icon type="devicon" icon="css3" />
      </li>
      <li className="list-inline-item">
        <Icon type="devicon" icon="javascript" />
      </li>
      <li className="list-inline-item">
        <Icon type="devicon" icon="jquery" />
      </li>
      <li className="list-inline-item">
        <i className="devicons devicons-sass" />
        <Icon type="devicon" icon="sass" />
      </li>
      <li className="list-inline-item">
        <Icon type="devicon" icon="less" />
      </li>
      <li className="list-inline-item">
        <Icon type="devicon" icon="bootstrap" />
      </li>
      <li className="list-inline-item">
        <Icon type="devicon" icon="wordpress" />
      </li>
      <li className="list-inline-item">
        <Icon type="devicon" icon="grunt" />
      </li>
      <li className="list-inline-item">
        <Icon type="devicon" icon="gulp" />
      </li>
      <li className="list-inline-item">
        <Icon type="devicon" icon="npm" />
      </li>
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
)
