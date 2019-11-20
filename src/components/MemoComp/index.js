import React, { memo } from 'react';

function MemoComp({ name }) {
  console.log('render Memo Component')
  return <div>{name}</div>;
}

export default memo(MemoComp);
