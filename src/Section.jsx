import React from 'react';
import PropTypes from 'prop-types';

class Section extends React.PureComponent {
  render() {
    const { variant, id, children } = this.props;
    return (
      <section className={variant} id={id}>
        {children}
      </section>
    );
  }
}

Section.propTypes = {
  variant: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
