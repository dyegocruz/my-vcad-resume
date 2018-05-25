import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from '../common/Icon';

class About extends Component {
  componentWillMount() {
    console.log(this.props.about);
  }

  render() {
    // const { name } = this.props.about;
    return (
      <div className="my-auto">
        <h1 className="mb-0">Clarence
          <span className="text-primary">Taylor</span>
        </h1>
        <div className="subheading mb-5">3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·
          <a href="mailto:name@email.com">name@email.com</a>
        </div>
        <p className="mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
        <ul className="list-inline list-social-icons mb-0">
          <li className="list-inline-item">
            <a href="{#}">
              <span className="fa-stack fa-lg">
                <Icon variant="fa fa-circle fa-stack-2x" />
                <Icon variant="fa fa-facebook fa-stack-1x fa-inverse" />
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="{#}">
              <span className="fa-stack fa-lg">
                <Icon variant="fa fa-circle fa-stack-2x" />
                <Icon variant="fa fa-twitter fa-stack-1x fa-inverse" />
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="{#}">
              <span className="fa-stack fa-lg">
                <Icon variant="fa fa-circle fa-stack-2x" />
                <Icon variant="fa fa-linkedin fa-stack-1x fa-inverse" />
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="{#}">
              <span className="fa-stack fa-lg">
                <Icon variant="fa fa-circle fa-stack-2x" />
                <Icon variant="fa fa-github fa-stack-1x fa-inverse" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ about: state.mainReducer.myVcard.about });
export default connect(mapStateToProps)(About);
