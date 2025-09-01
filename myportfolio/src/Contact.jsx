import React from "react";
import "./index.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram, FaVoicemail } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
     <h2 className="section-heading">Contact</h2> 
     <h4 className="title">Get In Touch</h4>
      <p className="subtitle"> </p>

      <div className="contact-container">
        <div className="contact-form">
          <h3>Send a Message</h3>
          <form>
            <div className="form-row">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message </button>
          </form>
        </div>

        {/* Right - Contact Info */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><FaPhoneAlt /> +91 9003179479</p>
          <p><FaEnvelope /> janani03mohan@gmail.com</p>
          <p><FaMapMarkerAlt /> Chennai, Tamil Nadu, India</p>

          <h3 className="social-title">Connect with Me</h3>
          <div className="social-links">
            <a href="https://github.com/janani03m"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/janani-m--aiml/"><FaLinkedin /></a>
            <a href="mailto:janani03mohan@gmail.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
