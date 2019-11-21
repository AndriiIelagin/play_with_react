import React from 'react';
import './App.css';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero name="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero name="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero name="Joker" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
