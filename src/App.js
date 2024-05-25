import React from 'react';
import './App.css';
import HolaMundo from './HolaMundo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>¡Hola, React!</h1>
        <p>
          Este es mi primer proyecto en React.
        </p>
        <HolaMundo />
      </header>
    </div>
  );
}

export default App;
