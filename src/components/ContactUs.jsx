// Import necessary modules
import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact">
      <h2>Contact the Painting Shop</h2>
      <form>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" /><br />
        <label htmlFor="email">Email:</label><br />
        <input type="text" id="email" name="email" /><br />
        <label htmlFor="message">Message:</label><br />
        <textarea id="message" name="message" rows="4" cols="50"></textarea><br /><br />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default ContactUs;
