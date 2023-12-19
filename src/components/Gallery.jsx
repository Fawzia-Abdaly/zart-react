import React from 'react';
import artworks from '../artworks';

const Gallery = () => {
  return (
    <section id="gallery" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', minHeight: '100vh' }}>
      <div style={{ margin: '0 500px' }}>
        {artworks.slice(0, 6).map(artwork => (
          <div className="category-item" key={artwork.id} style={{ margin: '10px' }}>
            <img src={artwork.image} alt={`Art ${artwork.id}`} style={{ width: '400px', height: 'auto' }} />
            <p>{`DESCRIPTION: ${artwork.description}`}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
