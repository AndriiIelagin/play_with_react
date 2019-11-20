import React, { memo } from 'react';

function MemoComp({ name }) {
  return <div>{name}</div>;
}

export default memo(MemoComp);
