// src/components/Gallery.jsx
import React from 'react';
import artworks from '../artworks'; // Updated import statement

const Gallery = () => {
  return (
    <section id="gallery">
      {artworks.slice(0, 6).map(artwork => (
        <div className="category-item" key={artwork.id}>
          <img src={artwork.image} alt={`Art ${artwork.id}`} />
          <p>{`DESCRIPTION: ${artwork.description}`}</p>
        </div>
      ))}
    </section>
  );
};

export default Gallery;
