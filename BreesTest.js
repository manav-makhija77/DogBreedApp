
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Form,  Button, Dropdown, DropdownButton } from 'react-bootstrap';

const BreesTest = () => {
    const [breeds, setBreeds] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const locations = ['Guwahati','Indore'];
  
    const fetchBreeds = async (location) => {
      setIsLoading(true);
      setError(null);
  
      try {
        const response = await axios.get(`/Findbreed?location=${location}`);
        setBreeds(response.data);
      } catch (err) {
        console.error(err);
        setError('Error fetching breeds');
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      fetchBreeds(selectedLocation);
    }, [selectedLocation]);
  
    const handleLocationChange = (event) => {
      setSelectedLocation(event.target.value);
    };
    return (
            <div className="App container mt-3">
      <h1>Dog Breeds by Location</h1>
      <Form inline className="mb-3">
        <DropdownButton
          id="dropdown-basic-button"
          title={selectedLocation || 'Select Location'}
          onSelect={handleLocationChange}
        >
          {locations.map((location) => (
            <Dropdown.Item key={location} value={location}>
              {location}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <Button variant="primary" onClick={() => fetchBreeds(selectedLocation)}>
          Find Breeds
        </Button>
      </Form>
      {isLoading && <p>Loading breeds...</p>}
      {error && <p className="text-danger">{error}</p>}
      {breeds.length > 0 && ( 
        <div className="d-flex flex-wrap justify-content-between">
          {breeds.map((breed) => (
            <div key={breed.breeId} className="card mb-3" style={{ width: '18rem' }}>
              <img variant="top" src={breed.image_url || 'https://via.placeholder.com/150'} alt={breed.BreedName} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{breed.BreedName}</h5>
                <p className="card-text">{breed.location}</p>
                {breed.description && <p className="card-text">{breed.Description}</p>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    );
}

export default BreesTest;
