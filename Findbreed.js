import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Row, Col, Card, Button, Modal , Image  } from 'react-bootstrap';

export default function Findbreed() {
  const [locations] = useState(['Select Location', 'Guwahati', 'Nagaon', 'Tezpur (Newly Added)', 'Dibrugarh (Available Soon)', 'Shillong (Available Soon)']); // Add more locations as needed
  const [selectedLocation, setSelectedLocation] = useState('Select Location');
  const [breeds, setBreeds] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);


  useEffect(() => {
    if (selectedLocation !== 'Select Location') {
      fetchBreeds();
    }
    // eslint-disable-next-line
  }, [selectedLocation]);

  const fetchBreeds = () => {
    fetch(`http://localhost:3001/dogbreed/${selectedLocation}`)
      .then(response => response.json())
      .then(data => setBreeds(data))
      .catch(error => console.log(error));
  };
  return (
    <div className='selectlocation' style={{ backgroundImage: 'url("https://w0.peakpx.com/wallpaper/325/61/HD-wallpaper-dogs-spitz-black-white-dog-puppy.jpg")', opacity:'0.8' , backgroundSize: 'cover'}}>
      <h3 style={{color:'white'}}>Find Breed Based on Location</h3>
      <select style={{position:'absolute', left:'44rem' , top:'7rem'}} value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)}>
        {locations.map(location => (
          <option key={location} value={location} disabled={['Tezpur (Available Soon)', 'Shillong (Available Soon)', 'Dibrugarh (Available Soon)'].includes(location)}>{location}</option>
        ))}
      </select>
      {selectedLocation === 'Select Location' ? (
        <h2 style={{ textAlign: 'center', left: '37rem', top: '17rem', position: 'absolute' , color:'white' }}>Please select location to get Breed Details</h2>
      ) : (
        <Container className='displaydata' >
          <Row xs={1} md={3} className="g-4">
            {breeds.length > 0 ? breeds.map((breed, idx) => (
              <Col key={idx}>
                <Card className='card' style={{ height: '35rem', width: '24rem' }}>
                  <Card.Img variant="top" src={breed.photoURL} alt="Dog Breed" style={{ height: '15rem', width: '24rem' }} />
                  <Card.Body>
                    <Card.Title style={{ fontFamily: 'Kanit, sans-serif', fontSize: '1.5rem' }}>{breed.BreedName}</Card.Title>
                    <Card.Text style={{ fontFamily: '"Lato", sans-serif', fontSize: '1rem', top: '1rem', position: 'relative' }}>
                      <strong> Age : </strong>{breed.Age}
                      <br />
                      <strong> Owner : </strong> {breed.ownerName}
                      <br />
                      <strong> Contact : </strong> {breed.contactNumber}
                      <br />
                      <strong> Location : </strong>{breed.Location}
                      <br />
                      <strong>Description :</strong> {breed.Description}
                    </Card.Text><br/>
                    <Button variant="primary" onClick={handleShow}>
                      Breed Details
                    </Button>
                  </Card.Body>
                  <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>{breed.BreedName} Medical Details and History</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <h5>History: </h5>
                      <p>{breed.History}</p>
                      <h5>Medical Details: Dog Certificate</h5>
                      <Image src={breed.certificate} style={{height:'400px', width:'400px', marginLeft:'35px' , marginTop:'15px' }} cover/>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>

                </Card>
              </Col>
            )) : (
              <h2 style={{ textAlign: 'center', left: '28rem', position: 'absolute', color:'white'}}>No breeds found for the selected location Try Again</h2>
            )}
          </Row>
        </Container>)}
    </div>
  );
}

