import React from 'react';
import './App.css';
import MainBox from './components/MainBox';
import NavBar from './components/NavBar';
import questions from './questions.js'; // Update the path based on your file structure

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainBox questions={questions} />
    </div>
  );
}

export default App;
