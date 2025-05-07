import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-us">
      <h2>Contact Us</h2>
      <p>If you have any questions or want to get in touch with the Khayelitsha Youth Choir, please use the information below or send us a message.</p>
      <div className="contact-info">
        <p><strong>Email:</strong> khayelitshayouthchoir@gmail.com</p>
        <p><strong>Phone:</strong> +27 68 892 4694</p>
        <p><strong>Address:</strong> 35316 Luma Street Harare, Khayelitsha, Cape Town, South Africa, 7784</p>
      </div>
      <form className="contact-form" onSubmit={e => e.preventDefault()}>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactUs;
