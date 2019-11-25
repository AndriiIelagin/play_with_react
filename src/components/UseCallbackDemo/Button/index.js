import React from 'react';

function Button({ handleClick, children }) {
  console.log('Rendered button  ', children);
  return <button onClick={handleClick}>{children}</button>;
}

export default React.memo(Button);
