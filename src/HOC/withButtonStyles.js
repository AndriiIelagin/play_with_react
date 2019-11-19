import React from 'react';
import buttonStyles from '../assets/styles/buttonStyles';

const translateProps = props => {
  let _styles = { ...buttonStyles.default };
  if (props.disabled) {
    _styles = { ..._styles, ...buttonStyles.dissabled };
  }
  const newProps = { ...props, styles: _styles };
  return newProps;
};

export default WrappedComponent => {
  return function wrappedRender(args) {
    return WrappedComponent(translateProps(args));
  };
};
