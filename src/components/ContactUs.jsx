import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../assets/styles/contact.css"; // Make sure to create and style this CSS file as needed

function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (formData.name && formData.email && formData.message) {
      // Display alert on successful form submission
      window.alert("Your message has been sent successfully.");
      
      // Reset form fields after submission
      setFormData({ name: '', email: '', message: '' });
    } else {
      // Alert user to fill out all fields
      window.alert("Please fill out all fields.");
    }
  };

  const homeHandle = () => {
    navigate('/'); // Navigates to the home page
  };

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <p>If you have any questions or need further assistance, please feel free to reach out to us. We're here to help!</p>
      
      <div className="contact-details">
        <div className="contact-info">
          <h3>Our Address</h3>
          <p>University of GSD</p>
          <p>Shollinganalur</p>
          <p>Chennai-25</p>
        </div>

        <div className="contact-info">
          <h3>Email Us</h3>
          <p><a href="mailto:info@college.edu">gsdinfo@college.edu</a></p>
        </div>

        <div className="contact-info">
          <h3>Call Us</h3>
          <p><a href="tel:+1234567890">+91 73583 73389</a></p>
        </div>
      </div>
      
      <div className="contact-form">
        <h3>Send Us a Message</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit</button>
          <button
          className='backtohomebtn'
          onClick={homeHandle}
          type="submit"
          >
            Back to Home</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
