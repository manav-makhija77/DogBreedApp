// This is the Navigation Bar of this Web Application 

import Nav from 'react-bootstrap/Nav';
import React, { useState } from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

export default function Nv(Props) {

    const [active, setactive] = useState(null);

    const top = {
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        fontSize: '1.5rem',
        transition: 'all 0.3s ease-in-out',
        color: 'black',
        fontFamily: 'Mukta, sans - serif',
        fontWeight: '800',
        fontStyle: 'normal'
    };

    const navStyle = {
        height: '5rem'
    }

    const handle = (key) => {
        setactive(key);
    }

    return (
        <div style={{ backgroundColor: "#EE6A50", fontSize: '1.2rem' }}>

            <Nav style={navStyle} className='nav3' active={active} onSelect={handle} fill variant="tabs">
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/" style={{ ...top, color: active === 'home' ? 'black' : 'navy' }} >Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/Findbreed" style={{ ...top, color: active === 'findbreed' ? 'black' : 'navy' }} >Find Breed</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/Aboutus" style={{ ...top, color: active === 'about' ? 'black' : 'navy' }}>About Us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/Contactus" style={{ ...top, color: active === 'contact' ? 'black' : 'navy' }} >Contact Us</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}
