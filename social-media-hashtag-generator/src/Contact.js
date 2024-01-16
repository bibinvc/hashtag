// Contact.js

import React from 'react';
import './Contact.css';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted!');
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>You can reach us via email at: <a href="mailto:info@example.com">info@example.com</a></p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
