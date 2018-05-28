import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from '../../common/Icon';

class About extends Component {
  renderSocial() {
    const list = this.props.about.social || [];
    return list.map(social => (
      <li key={social.id} className="list-inline-item">
        <a href={social.url}>
          <span className="fa-stack fa-lg">
            <Icon variant="fa fa-circle fa-stack-2x" />
            <Icon variant={`fa fa-${social.icon} fa-stack-1x fa-inverse`} title={social.title} />
          </span>
        </a>
      </li>
    ));
  }

  render() {
    const { about } = this.props;
    return (
      <div className="my-auto">
        <h1 className="mb-0">{about.firstName} <span className="text-primary">{about.lastName}</span>
        </h1>
        <div className="subheading mb-5">{about.location.name} · {about.cellPhone} ·
          <a href={`mailto:${about.emailAddress}`}>{about.emailAddress}</a>
        </div>
        <p className="mb-5">{about.summary}</p>
        <ul className="list-inline list-social-icons mb-0">
          {this.renderSocial()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ about: state.myVcardReducer.myVcard.about });
export default connect(mapStateToProps)(About);
