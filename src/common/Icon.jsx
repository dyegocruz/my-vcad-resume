import React from 'react';

export default ({
  type, icon, variant, title,
}) => {
  let iconClass = '';
  if (type === 'devicon') {
    iconClass = `devicons devicons-${icon}`;
  } else if (type === 'fa') {
    iconClass = `fa-li fa fa-${icon}`;
  } else {
    iconClass = variant;
  }

  return (
    <i className={iconClass} title={title} />
  );
};
