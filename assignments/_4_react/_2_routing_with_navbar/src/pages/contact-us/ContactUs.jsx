import React, { useState } from 'react'

import './ContactUs.css'

const ContactUs = () => {

  const [query, setQuery] = useState({
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setQuery({...query, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert(`Email - ${query.email}\nMessage - ${query.message}\n\nSubmitted successfuly!!`)
  }

  return (
    <div className='page'>
      <div className="contact-us">
        <div className="contact-header">
              <h1>Contact Us</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id architecto voluptate fugit sunt ad quos nobis!</p>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <input required type="email" name="email" value={query.email} onChange={handleChange} placeholder='Enter your email' />
            </div>
            <div className="input-field">
              <textarea required name="message" value={query.message} onChange={handleChange} placeholder='Enter your message' rows={10}></textarea>
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>

        <h2>Reach us here</h2>

        {/* <div className="contact-wraper"> */}
          <div className="contact-info">
            <div className="map"> 
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.2655123833315!2d75.87720717387337!3d22.681157828985505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcc03e36712d%3A0xb6f3c2bf734a7c!2sInstitute%20of%20Engineering%20%26%20Technology%2C%20DAVV!5e0!3m2!1sen!2sin!4v1721477434087!5m2!1sen!2sin" width="600" height="300" style={{border: '0px', borderRadius: '1rem', height: '300px', width: '100%', minWidth: '20rem'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contact-details">
              <ul className="contact-list">
                <li className="mobile-no">Mobile no - 7040506070</li>
                <li className="email-id">Email id - dummy@gmail.com</li>
                <li className="address">Address - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, provident?</li>
              </ul>
            </div>
          </div>
        {/* </div> */}

      </div>
    </div>
  )
}

export default ContactUs