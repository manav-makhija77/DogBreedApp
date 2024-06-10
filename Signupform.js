import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Signupform = ({ handleSignup }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      if (response.ok) {
        setSuccessMessage('Account Created successful for this Attempt Now Please Login');
        handleSignup();
        setTimeout(() => {
          setSuccessMessage(null);
          setErrorMessage(null);
        }, 2000);
        setUsername('')
        setPassword('')
        handleSignup();
      } else {
        setErrorMessage('Username Already Exist or Try Again');
        handleSignup();
        setTimeout(() => {
          setSuccessMessage(null);
          setErrorMessage(null);
        }, 2000);
        setUsername('')
        setPassword('')
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred. Please try again later.');
      handleSignup();
        setTimeout(() => {
          setSuccessMessage(null);
          setErrorMessage(null);
        }, 2000);
      setUsername('')
      setPassword('')
    }
  };

  return (
    <Form className='loginform' onSubmit={handleSubmit}>
      <Form.Label>Don't have Account Create a New one</Form.Label><br />
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Select username"
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
        Signup
      </Button>
    </Form>
  );
}

export default Signupform;
