import React from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';


export default function Topbar() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="top-section">
            <img id='topimage' src={'Images/topimage.jpeg'} alt="Dog" />
            <h1> Dog Breed Website</h1>
            <p>
                Discover and learn more about your favorite dog breeds
            </p>

            <Button variant="primary" id='btn1' onClick={handleShow}>
                Login/Sign up
            </Button>

            <Modal id='font' show={show} onHide={handleClose} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Login/Sign up</Modal.Title>
                </Modal.Header>
                <Modal.Body>Welcome User, Login into Exisiting Account or Create a New one </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Login
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Create Account
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}
