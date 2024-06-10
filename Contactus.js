import React, { useState } from 'react';
import './App.css';

export default function Contactus() {

  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('Thank you! for Reaching Out to us We will get back to you soon over the mail.');
    setFormData({ name: '', email: '', query: '' });
  };
  return (
    <div className='selectlocation' style={{height:'30rem'}} >
      <h3>For Any Queries connect with us by filling this form</h3>
      <div className='contact'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Enter Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your Name"
          />
        </div>
        <div>
          <label htmlFor="email">Enter Email</label>
          <input style={{left: '3.3rem'}}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter Email Address"
          />
        </div>
        <div>
          <label style={{bottom: '5rem' , position: 'relative'}} htmlFor="query">Enter your Query</label>
          <textarea
            id="query"
            name="query"
            rows={4}
            value={formData.query}
            onChange={handleChange}
            required
            placeholder="Please add your Query in detail"
          />
        </div>
        <button id='footerbtn1' type="submit">Submit</button>
      </form>
      </div>
    </div>
  )
}

