import React from 'react';
import './App.css';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Graph Vocab Game</h1>
      </header>
      <main>
        <Game />
      </main>
    </div>
  );
}

export default App;
