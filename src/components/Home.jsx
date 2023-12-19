import React from 'react';
import artworks from '../artworks'; // Updated import statement

const Home = () => {
  return (
    <section id="home" style={{ margin: '0 150px' }}>
      <h1>Find Art You Like</h1>
      <p>
        At Zart, our commitment is to facilitate your exploration and acquisition of exceptional artworks created by emerging talents globally. Whether your goal is to unearth a new artist, enhance your living space with a distinctive masterpiece, or commemorate a significant life milestone, Saatchi Art serves as your gateway to a vast collection of original creations crafted by today's foremost artists.
      </p>
      <div className="categories-container">
        {artworks.map(artwork => (
          <div className="category-item" key={artwork.id}>
            <img src={artwork.image} alt={`Art ${artwork.id}`} />
            <p>{`DESCRIPTION: ${artwork.description}`}</p>
          </div>
        ))}
        {/* Additional images */}
        <div className="category-item">
          <img src="path/to/art8.jpg" alt="Art 8" />
          <p>DESCRIPTION: Description for Art 8</p>
        </div>
        <div className="category-item">
          <img src="path/to/art9.jpg" alt="Art 9" />
          <p>DESCRIPTION: Description for Art 9</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
