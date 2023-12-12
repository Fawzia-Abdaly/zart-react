// src/components/Home.jsx
import React from 'react';
import artworks from '../artworks'; // Updated import statement

const Home = () => {
  return (
    <section id="home">
      <h1>Find Art You Like</h1>
      <p>
        At Zart Art, our commitment is to facilitate your exploration and acquisition of exceptional artworks created by emerging talents globally. Whether your goal is to unearth a new artist, enhance your living space with a distinctive masterpiece, or commemorate a significant life milestone, Saatchi Art serves as your gateway to a vast collection of original creations crafted by today's foremost artists.
      </p>
      <div className="categories-container">
        {artworks.map(artwork => (
          <div className="category-item" key={artwork.id}>
            <img src={artwork.image} alt={`Art ${artwork.id}`} />
            <p>{`DESCRIPTION: ${artwork.description}`}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
