import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';


export default function Footer() {

    return (
        <div className='footer' style={{ backgroundColor: "#EE6A50", fontSize: '1.5rem' }}>
            <p style={{ fontWeight: '800' }}>Unleashing the World of Breeds</p>
            <h6>We Helps you to Find the suitable breed for your Dog based on your selected location for the payment queries and Adjustment Contact Directly with the owner of the Dog for other details feel free to contact Us.</h6>

            
          
            <Link to="/">
                <button id='footerbtn' style={{ margin: '0 10px' }} >Home</button>
            </Link>
            <Link to="/Findbreed">
                <button id='footerbtn' style={{ margin: '0 10px' }}>Find Breed</button>
            </Link>
            <Link to="/Aboutus">
                <button id='footerbtn' style={{ margin: '0 10px' }}>About Us</button>
            </Link>
            <Link to="/Contactus">
                <button id='footerbtn' style={{ margin: '0 10px' }}>Contact Us</button>
            </Link>

            <p style={{ fontWeight: '800' , top:'30%', position:'relative' }}>© 2024 All rights reserved Dogbreeds.com </p>
        </div>
    )
}
