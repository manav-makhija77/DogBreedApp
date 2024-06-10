import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Loginform = ({ handleLogin }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');



  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!username || !password) {
        setErrorMessage('Enter valid credentials');
        setTimeout(() => {
          setErrorMessage(null);
        }, 1000);
      } else {
        const response = await fetch('http://localhost:3001/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });
        
        if (response.ok) {
          setSuccessMessage("Logged in successfully");
          // Store username in local storage
          localStorage.setItem('username', username);
          handleLogin();
          setUsername('');
          setPassword('');
        } else {
          const data = await response.json();
          setErrorMessage(data.error || 'Login failed');
          setTimeout(() => {
            setErrorMessage(null);
            
          }, 1000);
          setUsername('');
          setPassword('');
        }
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred. Please try again later.');
      setTimeout(() => {
        setErrorMessage(null);
      }, 1000);
    }
  }




  return (
    <Form className='loginform' onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Label>Login to your Account</Form.Label><br />
        <Form.Label>Enter Your Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group><br />
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group><br />
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default Loginform;
