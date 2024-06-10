import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Loginform from './Loginform';
import Signupform from './Signupform';

export default function Topbar({ isLogged }) {
    const [show, setShow] = useState(false);
    const [showLogin, setShowLogin] = useState(null);
    const [username, setUsername] = useState('');
    const [password] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [errorMessage, setErrorMessage] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [successMessage, setSuccessMessage] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [showLogoutModal, setShowLogoutModal] = useState(false);


    const handleClose = () => {
        setShow(false);
        setShowLogin(null);
    }

    const handleShow = () => setShow(true);

    useEffect(() => {
        setIsLoggedIn(isLogged);
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }

    }, [isLogged]);


    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();
            if (response.ok) {
                setSuccessMessage('Login successful');
                window.dispatchEvent(new Event('login'));
                setIsLoggedIn(true);
                setTimeout(() => {
                    setShow(false);
                }, 200);
            } else {
                setErrorMessage(data.error || 'Login failed');
            }
        } catch (error) {
            console.error(error);
            setErrorMessage('An error occurred. Please try again later.');
        }
    };

    const handleSignup = async () => {
        try {
            const response = await fetch('http://localhost:3001/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            if (response.ok) {

                setErrorMessage('');
                setSuccessMessage('Signup successful');

            } else {
                const data = await response.json();
                setErrorMessage(data.error || 'Signup failed');
            }
        } catch (error) {
            console.error(error);
            setErrorMessage('An error occurred. Please try again later.');
        }
    };

    const Login = () => {
        setShowLogin(true);
        setShow(true);
    }

    const Signup = () => {
        setShowLogin(false);
        setShow(true);
    }

    const handleLogout = () => {
        setShowLogoutModal(true);

    };

    const confirmLogout = () => {
        setIsLoggedIn(false);
        window.dispatchEvent(new Event('logout'));
        localStorage.removeItem('username');
        setUsername('');
        setShowLogoutModal(false);
    };



    return (
        <div className="top-section">
            <img id='topimage' src={'Images/Logo.png'} alt="Logo" />
            <h4> Paw'z World </h4>
            <p>
            Connecting Hearts, One Paw at a Time: Discover Genuine Breeders Near You!
            </p>

            {isLoggedIn ? (
                <div>
                    <Button style={{ color: 'gold' }} variant="primary" id='btn1' onClick={handleLogout}>
                        Hello , {username} Logout
                    </Button>
                </div>
            ) : (
                <Button style={{ color: 'gold' }} variant="primary" id='btn1' onClick={handleShow}>
                    Login/Sign up
                </Button>
            )}



            <Modal show={showLogoutModal} onHide={() => setShowLogoutModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Logout</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to logout?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowLogoutModal(false)}>
                        No
                    </Button>
                    <Button variant="primary" onClick={confirmLogout}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>




            <Modal
                dialogClassName="custom-modal"
                id='font'
                show={show}
                onHide={handleClose}
                animation={true}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Login/Sign up</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ height: '23rem' }}>
                    Welcome User, Login into Existing Account or Create a New one Click on any button to continue <br />
                    {showLogin !== null && (showLogin ? <Loginform handleLogin={handleLogin} /> : <Signupform handleSignup={handleSignup} />)}
                </Modal.Body>
                <Modal.Footer style={{ margin: 'auto' }}>
                    <Button variant="primary" onClick={Login}>
                        Login
                    </Button>
                    <Button variant="primary" onClick={Signup}>
                        Create Account
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}
