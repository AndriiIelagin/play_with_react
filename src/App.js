import React, { useState, useEffect } from 'react';
import './App.css';
import MemoComp from './components/MemoComp';

function App() {
  const [name, setName] = useState('Haider');
  useEffect(() => {
    setInterval(() => {
      setName('Haider');
    }, 2000);
  });
  console.log('render App')
  return (
    <div className="App">
      <MemoComp name={name} />
    </div>
  );
}

export default App;
