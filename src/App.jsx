import { useState } from 'react'
import './App.css'
import './styles.css'
import art1 from "./assets/art1.jpg.jpg"
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

    <section id="home">
      <h1>Explore Our Art Collection</h1>
      <div className="categories-container">
        <div className="category-item">
          <img src={art1} alt="Art 1" />
          <p>DESCRIPTION: I See You 2016, Abstract, Oil pastel painting. Size: A3</p>
        </div>
        <div className="category-item">
          <img src="./art2.jpg.jpg" alt="Art 2" />
          <p>DESCRIPTION: Nelson Mandela 2015 Realism with pen Size: 60* 30</p>
        </div>
        <div className="category-item">
          <img src="./art3.jpg.jpg" alt="Art 3" />
          <p>DESCRIPTION: Afghan Old Man 2012 – Super realism pencil color drawing Size: 70*50</p>
        </div>
        <div className="category-item">
          <img src="./art4.jpg.jpg" alt="Art 4" />
          <p>DESCRIPTION: Lost 2019 Conceptual Pen drawing with acrylic Size: A3</p>
        </div>
        <div className="category-item">
          <img src="./art5.jpg.jpg" alt="Art 5" />
          <p>DESCRIPTION: Afghan Kochi Women 2011 Super Realism pencil color drawing Size: 30* 15</p>
        </div>
        <div className="category-item">
          <img src="./art6.jpg.jpg" alt="Art 6" />
          <p>DESCRIPTION: Bud 2020 Conceptual Pen Drawing with Acrylic Size:A3</p>
        </div>
      </div>
    </section>

    <section id="about">
      <h2>About the Artist</h2>
      <p>
        Zainab Ahmadi originally from Afghanistan is a self-taught artist who
        discovered a passion for painting when she was around 10 years old. Her
        artwork focuses primarily on realism style, and then turns to other
        interesting styles and subjects like mixing of watercolor, oil color,
        acrylic, pen, color pencil, and more. Her work is an exploration of
        numerous details about feeling, social norms, concept, and more.
        </p>
        <img src="./art7.jpg" alt="Artist Picture" style={{width: "250px", height: "auto", margin: "10px",}} />
      </section>

    <section id="contact">
      <h2>Contact the Painting Shop</h2>
      <form>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" /><br />
        <label htmlFor="email">Email:</label><br />
        <input type="text" id="email" name="email" /><br />
        <label htmlFor="message">Message:</label><br />
        <textarea id="message" name="message" rows="4" cols="50"></textarea
        ><br /><br />
        <input type="submit" value="Submit" />
      </form>
    </section>
    </>
  )
}

export default App
