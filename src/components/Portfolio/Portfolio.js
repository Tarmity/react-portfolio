import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardPort from '../CardPort/CardPort';
import works from './work.json'

class Portfolio extends Component {

    state = {
        works
    };
// const Portfolio = (props) => {
render() {
    return (
            <Container > 
                <Row>
                    {/* <Col> */}
                    {this.state.works.map(work => (
                        <CardPort 
                        key={work.id}
                        image={work.image}
                        about={work.about}
                        languages={work.languages}
                        tech={work.tech}
                        github={work.github}
                        website={work.website}
                        /> 
                    ))}
                        
                    {/* </Col>  */}
                    {/* <Col>
                        <CardPort />
                    </Col>
                    <Col>
                        <CardPort />
                    </Col> */}
                </Row>
            </Container>

    )
}
};



export default Portfolio;