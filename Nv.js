// This is the Navigation Bar of this Web Application 

import Nav from 'react-bootstrap/Nav';
import React, { useState } from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

export default function Nv(Props) {

    const [active, setactive] = useState('/');

    const top = {
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        fontSize: '1.5rem',
        transition: 'all 0.3s ease-in-out',
        color: 'gold',
        fontFamily: 'Mukta, sans - serif',
        fontWeight: '500',
        fontStyle: 'normal'
    };

    const navStyle = {
        height: '5rem',

    }

    const handle = (key) => {
        setactive(key);
        console.log("Clicked key:", key);
    }

    return (
        <div style={{ backgroundColor: "#178582", fontSize: '1.2rem' }}>

            <Nav style={navStyle} className='nav3' active={active} onSelect={handle} fill variant="tabs">
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/" style={{ ...top, color: active === '/' ? 'gold' : 'navy ' , backgroundColor: active === '/' ? 'black' : '#178582' }} >Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/Findbreed" style={{ ...top, color: active === 'Findbreed' ? 'navy' : 'gold' , backgroundColor: active === '/Findbreed' ? 'black' : '#178582' }} >Find Breed</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/Caring" style={{ ...top, color: active === 'Caring' ? 'gold' : 'gold' , backgroundColor: active === '/Caring' ? 'black' : '#178582'  }} >Caring</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/Aboutus" style={{ ...top, color: active === 'about' ? 'gold' : 'gold' , backgroundColor: active === '/Aboutus' ? 'black' : '#178582'  }}>About Us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/Contactus" style={{ ...top, color: active === 'contact' ? 'gold' : 'gold' , backgroundColor: active === '/Contactus' ? 'black' : '#178582' }} >Contact Us</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}
