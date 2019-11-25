import React, { useState, useMemo } from 'react';

function UseMemoDemo() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementOne = () => {
    setCountOne(countOne + 1);
  };
  const incrementTwo = () => setCountTwo(countTwo + 1);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 500000000) i++;
    return countOne % 2 === 0 ? 'Even' : 'Odd';
  }, [countOne]);

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count One - {countOne}</button>
        <span>{isEven}</span>
      </div>
      <button onClick={incrementTwo}>Count Two - {countTwo}</button>
    </div>
  );
}

export default UseMemoDemo;
