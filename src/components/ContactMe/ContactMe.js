import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import './style.css'

function ContactMe() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section id="contact-me-container">
      <h1 className="contact-title" data-testid="h1tag">Contact</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div id="name-div" className="contact-section-divs">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div id="email-div" className="contact-section-divs">
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div id="message-div" className="contact-section-divs">
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div id="error-div" className="contact-section-divs">
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button id="contact-btn" data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactMe;
