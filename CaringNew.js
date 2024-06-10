import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Card, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import './App.css';

const Caring = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [videos, setVideos] = useState([]);

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

    return (

        <Container>
            <Form onSubmit={handleSearch}>
                <Form.Group controlId="searchQuery">
                    <Form.Label>Search for Dog Breed Videos</Form.Label>
                    <Form.Control
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                        placeholder="Enter dog breed"
                        autoComplete="off"
                    />
                    {suggestions.length > 0 && (
                        <ListGroup>
                            {suggestions.map((suggestion, index) => (
                                <ListGroup.Item key={index} onClick={() => handleSuggestionClick(suggestion)} >
                                    {suggestion.word}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </Form.Group>
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
    );
};

export default Caring;
