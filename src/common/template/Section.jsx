import React from 'react';

const Section = ({ variant, id, children }) => (
  <section className={variant} id={id}>
    {children}
  </section>
);

export default Section;
