import React from 'react';
import buttonWrapper from '../../HOC/withButtonStyles';

const SimpleButton = props => {
  return <button style={props.styles} onClick={props.onClick}>Simple Button</button>;
};

export default buttonWrapper(SimpleButton);
