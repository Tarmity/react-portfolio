import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './Img';


const Bio = () => {
    return (
        <Container>
        <Card>
    <Card.Img variant="top" src="./Img/CartoonPic.png" />
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>

  </Container>
    )
};



export default Bio;