import React from 'react';

const Text = props => {
  const Icon = props.icon;
  return <React.Fragment>{props.icon && <Icon />}{props.children}</React.Fragment>
};

export default Text;
