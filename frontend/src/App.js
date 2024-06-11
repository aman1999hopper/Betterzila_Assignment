import React from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import SignUpButton from './components/SignUpButton';
import SignInButton from './components/SignInButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>BetterZila Assignment</h1>
        <DarkModeToggle />
      </header>
      <main>
        <SignUpButton />
        <SignInButton />
      </main>
    </div>
  );
}

export default App;
