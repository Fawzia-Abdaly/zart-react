import React from 'react';
import art7 from '../assets/art7.jpg.jpg'; // Import the image for Art 7 (replace with your actual path)

const AboutArtist = () => {
  return (
    <section id="about" style={{ margin: '190px' }}>
      <h2>About the Artist</h2>
      <p>
        Zainab Ahmadi originally from Afghanistan is a self-taught artist who discovered a passion for painting when she was around 10 years old. Her artwork focuses primarily on realism style, and then turns to other interesting styles and subjects like mixing of watercolor, oil color, acrylic, pen, color pencil, and more. Her work is an exploration of numerous details about feeling, social norms, concept, and more.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px' }}>
        <img src={art7} alt="Art 7" style={{ width: '250px', height: 'auto', margin: '10px' }} />
      </div>
    </section>
  );
};

export default AboutArtist;
