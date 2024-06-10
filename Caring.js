import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Card, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import './App.css';



const Caring = () => {
    const [activeSection, setActiveSection] = useState('Feeding Guidelines');
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [videos, setVideos] = useState([]);


    const handleToggle = (section) => {
        setActiveSection(section);

    };


    const fetchSuggestions = async (q) => {
        try {
            const response = await axios.get(`https://api.datamuse.com/sug?s=${q}`);
            setSuggestions(response.data);
        } catch (error) {
            console.error('Error fetching suggestions', error);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion.word);
        setSuggestions([]); // Clear suggestions after setting the query
    };

    const handleInputChange = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        if (newQuery) {
            fetchSuggestions(newQuery);
        } else {
            setSuggestions([]);   
        }
        setVideos([]);
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:3001/searchdata', {
                params: { q: query }
            });

            const videoData = response.data.map(video => ({
                title: video.title,
                description: video.snippet,
                url: video.link,
                thumbnail: video.pagemap?.cse_thumbnail[0]?.src || video.pagemap?.cse_image[0]?.src
            }));

            setVideos(videoData);
            console.log(response);
            setSuggestions([]);
        } catch (error) {
            console.error('Error fetching search results', error);
            console.log("Error from Frontend Axios ");
        }
    };


    const redirectToYouTube = () => {

        const searchQuery = encodeURIComponent('dog nutrition tutorial');
        window.open(`https://www.youtube.com/results?search_query=${searchQuery}`, '_blank');
    };

    const redirectToYouTube1 = () => {

        const searchQuery = encodeURIComponent('dog health care ');
        window.open(`https://www.youtube.com/results?search_query=${searchQuery}`, '_blank');
    };
    return (
        <div className='togglesection vh-20' style={{ backgroundColor: '#178582'  }}>
            <div style={{ left: '6rem', position: 'relative' }} className="toggle-buttons" >
                <h1 style={{ color: 'gold', left: '10rem' }}>Explore Dog Nutiriton and Health</h1>
                <button id='custombtn' onClick={() => handleToggle('Feeding Guidelines')}
                    className={activeSection === 'Feeding Guidelines' ? 'active' : ''}>
                    Breed Dog Nutrition
                </button>
                <button id='custombtn' onClick={() => handleToggle('Medical')}
                    className={activeSection === 'Medical' ? 'active' : ''}>
                    Dog Health
                </button>
            </div>



            {activeSection === 'Feeding Guidelines' && (
    <div style={{ backgroundColor: '#F5F5DC' }} id='breedsection'>
        <h1 id='breedsectionh1'>Learn About Dog Nutrition</h1>
        <div className='video'>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/RM5Lvfk39Dg"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
        <div style={{ position: 'relative', top: '5.4rem', left: '2rem' }}>
            <iframe
                width="500"
                height="305"
                src="https://www.youtube.com/embed/IVqY1kHa6Hg"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
        <div style={{ position: 'absolute', right: '0.5rem', top: '9rem' }}>
            <iframe
                width="500"
                height="305"
                src="https://www.youtube.com/embed/waGpipMMe3A"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>

        <div style={{ textAlign: 'center', marginTop: '10rem' }}>
            <Button variant="primary" onClick={redirectToYouTube}>Learn More</Button>
        </div>
                <br/>
        <Container>
            <Form onSubmit={handleSearch}>
                <Form.Group controlId="searchQuery">
                    <h1 id='breedsectionh1'>Search for Dog Nutrition</h1><br/><br/>
                    <Form.Control
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                        placeholder="Search for Dog Nutrition "
                        autoComplete="off"
                    />
                    {suggestions.length > 0 && (
                        <ListGroup>
                            {suggestions.map((suggestion, index) => (
                                <ListGroup.Item key={index} onClick={() => handleSuggestionClick(suggestion)}>
                                    {suggestion.word}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </Form.Group> <br/>
                <Button variant="primary" type="submit">Search</Button>
            </Form>
            <Row className="mt-4 g-4">
                {videos.map((video, index) => (
                    <Col key={index} md={5} sm={5} lg={3}>
                        <Card className="h-100">
                            <Card.Img variant="top" src={video.thumbnail} />
                            <Card.Body>
                                <Card.Title>{video.title}</Card.Title>
                                <Card.Text>{video.description}</Card.Text>
                                <Card.Link href={video.url} target="_blank">Watch Video</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
)}


            {activeSection === 'Medical' && (
                <div style={{ backgroundColor: '#F5F5DC' }} id='breedsection'>
                    <h1 id='breedsectionh1'>Learn About Dog Health</h1>
                    <div style={{ backgroundColor: '#F5F5DC' }} id='breedsection'>
                        <div className='video1' style={{ position: 'absolute' }}>

                            <iframe
                                width="450"
                                height="305"
                                src="https://www.youtube.com/embed/p_Xw_LaofEQ"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div style={{ position: 'relative', top: '-5rem' }}>
                            <iframe
                                width="500"
                                height="305"
                                src="https://www.youtube.com/embed/AvCvrwl4N5E"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div style={{ position: 'absolute', right: '2rem', top: '-5rem' }}>
                            <iframe
                                width="480"
                                height="305"
                                src="https://www.youtube.com/embed/ljH2cmgKLWQ"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <Button variant="primary" onClick={redirectToYouTube1}>Learn More </Button>
                            <br/><br/>
                        </div>
                        <Container>
            <Form onSubmit={handleSearch}>
                <Form.Group controlId="searchQuery">
                    <h1 id='breedsectionh1'>Search for Dog Health</h1><br/><br/>
                    <Form.Control
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                        placeholder="Search for Dog Health "
                        autoComplete="off"
                    />
                    {suggestions.length > 0 && (
                        <ListGroup>
                            {suggestions.map((suggestion, index) => (
                                <ListGroup.Item key={index} onClick={() => handleSuggestionClick(suggestion)}>
                                    {suggestion.word}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </Form.Group> <br/>
                <Button variant="primary" type="submit">Search</Button>
            </Form>
            <Row className="mt-4 g-4">
                {videos.map((video, index) => (
                    <Col key={index} md={5} sm={5} lg={3}>
                        <Card className="h-100">
                            <Card.Img variant="top" src={video.thumbnail} />
                            <Card.Body>
                                <Card.Title>{video.title}</Card.Title>
                                <Card.Text>{video.description}</Card.Text>
                                <Card.Link href={video.url} target="_blank">Watch Video</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Caring;
