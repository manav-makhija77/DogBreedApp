import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';


export default function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

    return (
        <div className='footer' style={{ backgroundColor: "#178582", fontSize: '1.5rem' , color:'gold'}}>
            <p style={{ fontWeight: '800' }}>Unleashing the World of Breeds</p>
            <h6>We Help you to Find the suitable breed for your Dog based on your selected location, For payment queries and Adjustment Contact Directly with the owner of the Dog and for other details feel free to contact Us.</h6>

            
          
            <Link to="/">
                <button id='footerbtn' onClick={scrollToTop} style={{ margin: '0 10px' }} >Home</button>
            </Link>
            <Link to="/Findbreed">
                <button id='footerbtn' onClick={scrollToTop} style={{ margin: '0 10px' }}>Find Breed</button>
            </Link>
            <Link to="/Caring">
                <button id='footerbtn' onClick={scrollToTop} style={{ margin: '0 10px' }}>Caring</button>
            </Link>
            <Link to="/Aboutus">
                <button id='footerbtn' onClick={scrollToTop} style={{ margin: '0 10px' }}>About Us</button>
            </Link>
            <Link to="/Contactus">
                <button id='footerbtn' onClick={scrollToTop} style={{ margin: '0 10px' }}>Contact Us</button>
            </Link>

            <p style={{ fontWeight: '800' , top:'30%', position:'relative' }}>© 2024 All rights reserved Paw'z World.com </p>
        </div>
    )
}
