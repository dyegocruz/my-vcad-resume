import React from 'react';

class Section extends React.PureComponent {
  render() {
    const { variant, id, children } = this.props;
    return (
      <section className={variant} id={id}>
        <div className="my-auto">
          {children}
        </div>
      </section>
    );
  }
}

export default Section;
