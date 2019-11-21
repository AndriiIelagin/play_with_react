import React from 'react';
import './App.css';
import ContextA from './components/ContextA';
import { UserProvider } from './contexts/userContext';

function App() {
  return (
    <div className="App">
      <UserProvider value='Haider'>
        <ContextA />
      </UserProvider>
    </div>
  );
}

export default App;
