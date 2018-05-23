import React from 'react';

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

export default Section;
