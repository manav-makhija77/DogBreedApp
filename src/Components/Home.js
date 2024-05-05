import React from 'react'
import { Carousel } from 'react-bootstrap';
import './App.css';
import { useState } from "react";

export default function Home() {

  const [interval, setInterval] = useState(2000);

  const [activeSection, setActiveSection] = useState('breeds');

  const handleToggle = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <div style={{margin:'auto', width:'95%'}}>
        <Carousel interval={interval} onMouseEnter={() => setInterval(null)}
          onMouseLeave={() => setInterval(2000)}>
          <Carousel.Item>
            <img id='carouselimg'
              className="d-block w-100"
              src={'Images/Image1.jpg'}
              alt="First Slide"

            />
            <Carousel.Caption id='captionfont'>
              <h1>Golden Retriever: Family-Friendly & Loyal</h1>
              <p>Golden Retrievers are renowned for their friendly and tolerant attitude. <br /> Perfect for families, they are eager to please and highly sociable</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img id='carouselimg'
              className="d-block w-100"
              src={'Images/Image2.webp'}
              alt="Second Slide"
              style={{ opacity: 0.9 }}
            />
            <Carousel.Caption id='captionfont1'>
              <h1>Siberian Husky: Born to Run</h1>
              <p>Siberian Huskies are known for their endurance and willingness to work. <br /> Their wolf-like appearance and vibrant eyes make them distinctively captivating.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img id='carouselimg'
              className="d-block w-100"
              src={'Images/Image3.avif'}
              alt="Third Slide"
            />
            <Carousel.Caption id='captionfont2'>
              <h1>Poodle: Exceptionally Smart & Active</h1>
              <p>Poodles stand out for their intelligence and grace. Highly trainable, they are great for competitive <br /> dog sports and a favorite for allergy sufferers due to their fur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>


      {/* Staring of Toggle Section */}

      <div className='togglesection vh-20'>
        <div className="toggle-buttons" >
          <h1>Explore Dog Breeds and Their Care Essentials</h1>
          <button id='custombtn' onClick={() => handleToggle('breeds')}
            className={activeSection === 'breeds' ? 'active' : ''}>
            Know About Breed
          </button>
          <button id='custombtn' onClick={() => handleToggle('precautions')}
            className={activeSection === 'precautions' ? 'active' : ''}>
            Precautions
          </button>
        </div>

        {activeSection === 'breeds' && (
          <div id='breedsection'>
            <h1 id='breedsectionh1'>Dog Breeds</h1>
            <p id='breedsectionp'>A dog breed is a specific group of dogs that have similar appearances, behaviors, and other characteristics, which distinguish them from other groups of dogs. These traits are inherited and have been developed over many generations through selective breeding.

              Breeds were originally developed to perform specific tasks that required particular attributes, such as herding livestock, hunting game, guarding property, or providing companionship. As such, the physical structure, temperament, and instincts of each breed reflect the roles they were intended to fulfill. Here are Some Famous Examples of Breeds</p>

            <div className='breedimage' >
              <img style={{ height: '9rem' }} src={'Images/breed1.jpg'} alt="Breed 1" />
              <img style={{ height: '9rem' }} src={'Images/breed2.jpg'} alt="Breed 2" />
              <img style={{ height: '9rem' }} src={'Images/breed3.jpg'} alt="Breed 3" />
              <img style={{ height: '9rem' }} src={'Images/breed4.jpg'} alt="Breed 4" />
              <img style={{ height: '9rem' }} src={'Images/breed5.webp'} alt="Breed 5" />
              <img style={{ height: '9rem' }} src={'Images/breed6.jpg'} alt="Breed 6" />

            </div>
          </div>
        )}

        {activeSection === 'precautions' && (
          <div id='breedsection'>
            <h1 id='breedsectionh1'>Precautions for the Breed</h1>
            <p id='breedsectionp' style={{fontSize:'1.3rem'}}>Important precautions for dog owners to keep in mind.

            <span style={{display:'block', paddingTop:'20px'}} > <strong> 1  Health Awareness: </strong> Familiarize yourself with breed-specific health issues; ensure regular veterinary checkups. </span>

             <span style={{display:'block', paddingTop:'20px'}} ><strong> 2 Socialization: </strong> Introduce puppies to various environments early to prevent future behavioral problems.</span>

             <span style={{display:'block', paddingTop:'20px'}} >  <strong> 3 Training Needs: </strong> Adapt training methods to fit the breed’s characteristics, focusing on consistency and positive reinforcement. </span>

             <span style={{display:'block', paddingTop:'20px'}} > <strong> 4 Nutritional Care: </strong> Provide breed-appropriate diets to cater to unique needs based on size, age, and activity level. </span>

             <span style={{display:'block', paddingTop:'20px'}} > <strong> 5 Exercise Requirements: </strong> Match exercise routines to the breed’s energy level to prevent boredom and manage behavior. </span>

            </p>
          </div>
        )}
      </div>

    </>
  )
}
