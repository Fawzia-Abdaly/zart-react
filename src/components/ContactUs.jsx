import React from 'react';

const ContactUs = () => {
  const centerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 40px)', // Adjust as needed
  };

  return (
    <section id="contact" style={centerStyle}>
      <h2>Get in Touch with Our Art Gallery</h2>
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
