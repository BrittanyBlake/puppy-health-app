import React from 'react';
import './App.css';
import BottomNavbar from './components/bottomNav/BottomNav';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1> Puppy Health</h1>
      <BottomNavbar />
    </div>
  );
}

export default App;
