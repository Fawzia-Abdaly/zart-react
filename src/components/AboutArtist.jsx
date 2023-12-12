// Import necessary modules
import React from 'react';
import art7 from '../assets/art7.jpg'; // Import the image for Art 7 (replace with your actual path)

const AboutArtist = () => {
  return (
    <section id="about">
      <h2>About the Artist</h2>
      <p>
        Tefforiginally from ---- is a self-taught artist who discovered a passion for painting when she was around 10 years old. Her artwork focuses primarily on realism style, and then turns to other interesting styles and subjects like mixing of watercolor, oil color, acrylic, pen, color pencil, and more. Her work is an exploration of numerous details about feeling, social norms, concept, and more.
      </p>
      <img src={art7} alt="Art 7" style={{ width: '250px', height: 'auto', margin: '10px' }} />
    </section>
  );
};

export default AboutArtist;
