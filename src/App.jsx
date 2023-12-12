// src/App.jsx
import React from 'react';
import Home from './components/Home';
import Gallery from './components/Gallery';

console.log('App.jsx loaded');

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About the Artist</a></li>
            <li><a href="#gallery">Art Categories</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      <Home />
      <Gallery />
    </>
  );
}

export default App;
