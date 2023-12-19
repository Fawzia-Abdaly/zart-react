import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import AboutArtist from './components/AboutArtist';
import Gallery from './components/Gallery';

console.log('App.jsx loaded');

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/art-catagories">Art Categories</a></li>
            <li><a href="/about">About the Artist</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="art-catagories" element={<Gallery />} />
          <Route path="about" element={<AboutArtist />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
