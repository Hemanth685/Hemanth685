import React, { useContext } from 'react';
import './App.css';
import ThemeButton from './ThemeButton';
import { ThemeContext } from './ThemeContext';

const App = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "canvas-dark" : "canvas"}>
      {/* <div className="App"> */}
      <h1>Light Theme Demo</h1>
      <ThemeButton />
    </div>
  );
}

export default App;
