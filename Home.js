import React from 'react'
import { Carousel } from 'react-bootstrap';
import './App.css';
import { useState } from "react";
import { Modal, Button } from 'react-bootstrap';

export default function Home() {

  const [interval, setInterval] = useState(2000);

  const [activeSection, setActiveSection] = useState('breeds');

  const [showModal, setShowModal] = useState(false);
  const [modalDescription, setModalDescription] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const handleImageClick = (title, description) => {
    setModalTitle(title);
    const formattedDescription = description.replace(/\n/g, '<br><br>');
    setModalDescription(formattedDescription)
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setModalDescription('');
  };


  const handleToggle = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <div style={{ margin: 'auto', width: '100%' }}>
        <Carousel interval={interval} onMouseEnter={() => setInterval(null)}
          onMouseLeave={() => setInterval(2000)}>
          <Carousel.Item>
            <img id='carouselimg'
              className="d-block w-100"
              src={'Images/Image1.jpg'}
              alt="First Slide"

            />
            <Carousel.Caption id='captionfont'>
              <h1>Labrador Retriever</h1>
              <p>Labradors are outgoing, affectionate, and highly trainable dogs. With their friendly disposition <br /> and boundless energy, they make great companions for active families.</p>
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
              <h1>Welsh Corgi (Pembroke or Cardigan)</h1>
              <p> Welsh Corgis are sturdy, intelligent, and affectionate dogs known for their distinctive appearance <br /> Their wolf-like appearance and vibrant eyes make them distinctively captivating.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img id='carouselimg'
              className="d-block w-100"
              src={'Images/Image3.avif'}
              alt="Third Slide"
            />
            <Carousel.Caption id='captionfont2'>
              <h1>Golden Retriever: Family-Friendly & Loyal</h1>
              <p>Golden Retrievers are renowned for their friendly and tolerant attitude. <br /> Perfect for families, they are eager to please and highly sociable</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>


      {/* Staring of Toggle Section */}

      <div className='togglesection1 vh-20' style={{ backgroundColor: '#178582' }}>
        <div className="toggle-buttons" >
          <h1 style={{ color: 'gold' }}>Explore Dog Breeds and Their Care Essentials</h1>
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
          <div style={{ backgroundColor: '#F5F5DC' }} id='breedsection1'>
            <h1 id='breedsectionh1'>Dog Breeds</h1>
            <p id='breedsectionp'>A dog breed is a specific group of dogs that have similar appearances, behaviors, and other characteristics, which distinguish them from other groups of dogs. These traits are inherited and have been developed over many generations through selective breeding.

              Breeds were originally developed to perform specific tasks that required particular attributes, such as herding livestock, hunting game, guarding property, or providing companionship. As such, the physical structure, temperament, and instincts of each breed reflect the roles they were intended to fulfill. Here are Some Famous Examples of Breeds</p>

            <div className='breedimage' >
              <img style={{ height: '9rem', cursor: 'pointer' }} onClick={() => handleImageClick('Bordercollie', `<strong>- Origin: Border Collies originated in the border regions between Scotland and England, where they were bred for herding livestock, particularly sheep.
   - Intelligence: Border Collies are often considered one of the most intelligent dog breeds and are highly trainable. They excel in activities that challenge their minds, such as obedience trials and agility courses.
   - Health: While generally healthy, Border Collies may be prone to certain genetic health issues, including hip dysplasia and eye problems.</strong>`)} src={'Images/Bordercollie.jpg'} alt="Bordercollie" />
              <img style={{ height: '9rem', cursor: 'pointer' }} onClick={() => handleImageClick('Beagle', `<strong>- Origin: Beagles have a long history dating back to ancient times. They were originally bred for hunting small game, particularly rabbits, due to their excellent sense of smell.
   - Vocalization: Beagles are known for their distinctive baying and howling, which they use to communicate while hunting. This trait can sometimes carry over into the home environment.
   - Health: Beagles may be prone to obesity if their diet and exercise are not properly managed. They may also be susceptible to ear infections due to their floppy ears.</strong>`)} src={'Images/Beagle.jpg'} alt="Beagle" />
              <img style={{ height: '9rem', cursor: 'pointer' }} onClick={() => handleImageClick('Golden Retriever', `<strong>   - Origin: Golden Retrievers were developed in Scotland during the mid-19th century as hunting companions for retrieving waterfowl. They are descendants of various water spaniel breeds and the Tweed Water Spaniel.
   - Versatility: Golden Retrievers are highly versatile dogs and excel in various roles, including search and rescue, therapy work, and as service dogs for people with disabilities.
   - Health: While generally healthy, Golden Retrievers may be predisposed to certain health conditions, including hip dysplasia, elbow dysplasia, and certain heart disorders.</strong>`)} src={'Images/Golden Retriever.jpg'} alt="Golden Retriever" />
              <img style={{ height: '9rem', cursor: 'pointer' }} onClick={() => handleImageClick('Labrador Retriever', `<strong> - Origin: Labrador Retrievers originated in Newfoundland, Canada, where they were initially used as fishing and hunting dogs by fishermen. They were later refined in England.
   - Popularity: Labrador Retrievers consistently rank as one of the most popular dog breeds in the United States and many other countries due to their friendly nature and versatility.
   - Coat Colors: Labrador Retrievers come in three primary coat colors: black, yellow, and chocolate. Yellow Labs can range from pale cream to fox red.</strong>`)} src={'Images/Labrador retriever.jpg'} alt="Labrador retriever" />
              <img style={{ height: '9rem', cursor: 'pointer' }} onClick={() => handleImageClick('German Shepherd', `<strong>  - Origin: German Shepherds were developed in Germany in the late 19th and early 20th centuries as herding and working dogs. They were originally bred for their intelligence, strength, and versatility.
   - Working Roles: German Shepherds are widely used in various working roles, including police and military work, search and rescue, and as service dogs for people with disabilities.
   - Coat Variations: German Shepherds can have two different coat varieties: the standard double coat and the less common long-haired variety..</strong>`)} src={'Images/German Shep.jpg'} alt="German Shep" />
              <img style={{ height: '9rem', cursor: 'pointer' }} onClick={() => handleImageClick('Doberman', `<strong>   - Origin: Doberman Pinschers were developed in Germany by a tax collector named Karl Friedrich Louis Dobermann in the late 19th century. They were bred for protection and companionship.
   - Temperament: Despite their intimidating appearance, Dobermans are known for their loyalty and affection towards their families. They are often referred to as "velcro dogs" due to their tendency to stick close to their owners.
   - Health: Dobermans may be prone to certain health issues, including dilated cardiomyopathy (a heart condition), hip dysplasia, and von Willebrand's disease (a bleeding disorder).</strong>`)} src={'Images/Doberman.jpg'} alt="Doberman" /><br /><br />
              <img style={{ height: '9rem', cursor: 'pointer' }} onClick={() => handleImageClick('Pug', `<strong> - Origin: Pugs have a long history, dating back over 2,000 years to ancient China, where they were revered as companion dogs for royalty and nobility.
   - Breathing Issues: Pugs are a brachycephalic breed, meaning they have a flat, short muzzle. This structure can lead to respiratory issues and make them sensitive to heat and exertion.
   - Social Nature: Pugs are known for their friendly and sociable nature, getting along well with children, other pets, and strangers alike.</strong>`)} src={'Images/Pug.jpg'} alt="Pug" />
              <img style={{ height: '9rem', cursor: 'pointer' }} onClick={() => handleImageClick('Indian Spitz', `<strong> - Origin: The Indian Spitz is believed to have originated in India, although its exact ancestry is unclear. It bears a resemblance to the European Spitz breeds.
   - Adaptability: Indian Spitz dogs are highly adaptable and can thrive in various climates and living environments, including urban apartments and rural settings.
   - Grooming: Despite their fluffy appearance, Indian Spitz dogs are relatively low-maintenance in terms of grooming. They have a double coat that sheds seasonally, requiring occasional brushing.</strong>`)} src={'Images/indian spitz.jpg'} alt="indian spitz" />
              <img style={{ height: '9rem', cursor: 'pointer' }} onClick={() => handleImageClick('Pomeranian', `<strong>   - Origin: Pomeranians are named after the region of Pomerania, which is now part of Poland and Germany. They were originally larger sled-pulling dogs before being selectively bred down to their current size.
   - Intelligence: Pomeranians are intelligent and can be quick learners, but they may also have a stubborn streak. Positive reinforcement training methods work best with this breed.
   - Exercise Needs: Despite their small size, Pomeranians have moderate exercise needs and enjoy short walks and indoor playtime. They are well-suited to apartment living but still require mental stimulation.</strong>`)} src={'Images/Pomeranian.jpg'} alt="Pomeranian" />
              <img style={{ height: '9rem', cursor: 'pointer' }} onClick={() => handleImageClick('Rottweiler', `<strong> - Origin: Rottweilers are an ancient breed with a history dating back to the Roman Empire, where they were used as drover dogs to herd livestock and pull carts.
    - Protective Instincts: Rottweilers are naturally protective of their families and territories. Early socialization and training are essential to ensure they are well-adjusted and confident.
    - Temperament: When properly trained and socialized, Rottweilers are affectionate and loyal companions. They are known for their calm demeanor and stable temperament when properly bred and raised..</strong>`)} src={'Images/Rottweiler.jpg'} alt="Rottweiler" />

            </div>
          </div>
        )}

        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>{modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p dangerouslySetInnerHTML={{ __html: modalDescription }}></p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {activeSection === 'precautions' && (
          <div style={{ backgroundColor: '#F5F5DC' }} id='breedsection1'>
            <h1 id='breedsectionh1'>Precautions for the Breed</h1>
            <p id='breedsectionp' style={{ fontSize: '1.3rem' }}>Important precautions for dog owners to keep in mind.

              <span style={{ display: 'block', paddingTop: '20px' }} > <strong> 1  Health Awareness: </strong> Familiarize yourself with breed-specific health issues; ensure regular veterinary checkups. </span>

              <span style={{ display: 'block', paddingTop: '20px' }} ><strong> 2 Socialization: </strong> Introduce puppies to various environments early to prevent future behavioral problems.</span>

              <span style={{ display: 'block', paddingTop: '20px' }} >  <strong> 3 Training Needs: </strong> Adapt training methods to fit the breed’s characteristics, focusing on consistency and positive reinforcement. </span>

              <span style={{ display: 'block', paddingTop: '20px' }} > <strong> 4 Nutritional Care: </strong> Provide breed-appropriate diets to cater to unique needs based on size, age, and activity level. </span>

              <span style={{ display: 'block', paddingTop: '20px' }} > <strong> 5 Exercise Requirements: </strong> Match exercise routines to the breed’s energy level to prevent boredom and manage behavior. </span>

            </p>

            <Button style={{position:'absolute',left:'6.5rem'}} variant="primary" href="https://www.vetlive.in/" target="_blank">
              24/7 Vet Consultancy
            </Button>
          </div>
        )}
      </div>

    </>
  )
}
