import React from 'react';
import { Card, } from 'react-bootstrap';
import './CardPort.css';


const CardPort = (props) => {

    return (

        <Card className="cardBody" style={{ width: '18rem', marginTop: '50px', marginBottom: "20px" }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body className="cardBody">
                <Card.Title className="cardTitle"><strong>{props.title}</strong></Card.Title>
                <Card.Text>
                    {props.about}
                </Card.Text>
            </Card.Body>
            <Card.Body className="cardBody">
                <Card.Text>
                    <strong>Languages:</strong>{props.languages}
                </Card.Text>
                <Card.Text>
                    <strong>Tech:</strong>{props.tech}
                </Card.Text>
            </Card.Body>
            <Card.Body className="cardBody">
                <Card.Link style={{ marginRight: '60px' }} href={props.github} target='blank'><strong>GitHub Repo</strong></Card.Link>
                <Card.Link href={props.website} target='blank'><strong>Website</strong></Card.Link>
            </Card.Body>
        </Card>

    )
}

export default CardPort;