import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import CardPort from '../CardPort/CardPort';
import works from './work.json';

class Portfolio extends Component {

    state = {
        works
    };

render() {
    return (
            <Container > 
                <Row>
                    {this.state.works.map(work => (
                        <CardPort 
                        key={work.id}
                        image={work.image}
                        title={work.title}
                        about={work.about}
                        languages={work.languages}
                        tech={work.tech}
                        github={work.github}
                        website={work.website}
                        /> 
                    ))}
                </Row>
            </Container>

    )
}
};

export default Portfolio;