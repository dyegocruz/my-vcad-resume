import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from '../../common/Icon';

class Courses extends Component {
  renderCourses() {
    const list = this.props.courses || [];
    return list.map(course => (
      <li key={course.id}>
        <Icon type="fa" icon="book text-warning" />
        {course.name} - {course.year} - {course.institution}
      </li>
    ));
  }

  render() {
    return (
      <div className="my-auto">
        <h2 className="mb-5">Professional Courses</h2>
        <ul className="fa-ul mb-0">
          {this.renderCourses()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ courses: state.myVcardReducer.myVcard.courses });
export default connect(mapStateToProps)(Courses);
