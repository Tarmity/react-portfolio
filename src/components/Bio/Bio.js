import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './Bio.css';
import './imgs/cartoonPic.png';



const Bio = () => {
    return (
<>
        <Container>
            <br />
            <br />
            <Card style={{ marginTop: '50px' }}>
                <Card.Img variant="top"  src={require("./imgs/cartoonPic.png")}  />
                <Card.Body className="cardBody">
                    <Card.Text >
                    <h2>About Me</h2>
                            <p><strong>Full-Stack developer leveraging a background in project management with a passion to collaborate with industry professionals whilst pushing the boundaries in web development. Earned a certificate in Full Stack Web Development from the University of Sydney Coding Boot Camp. Innovative problem-solver who is passionate about developing apps with a focus on resources management and mobile-first development. Strengths in communication, teamwork and interpersonal, leadership, communication, and building projects from ideation to execution.
                            Proficient in HTML5, CSS, JavaScript, Reactjs, Nodejs, Express, MongoDB and MERN stack.
                            </strong></p>
                            <p> From an early age, I have always been fascinated by Technology and anything that was Technical.  I absolutely loved pulling things apart to see exactly how they worked and then trying to put it back to working order again.
                            Along with my passion for Technology, I also enjoyed traveling and exploring a new place. So after I finished my final year of school, I decided to join the Royal Australian Navy as a Marine Technician (Engineering). Not only was I fulfill my passions but also gaining a sense of pride and life skills along the journey.</p>
                            <br />
                            <p>During my thirteen and a half years in the Navy, technology was forever evolving and I started seeing more and more mechanical equipment being run by advanced computer software which blew my mind. It opened my eyes to new possibilities once I left the Navy. Once I left my career in the Navy, I started doing my own research and developed a passion for web and software development. Coding has fuelled my passion in so many areas. From figuring out how certain codes interact together, and the final result is an amazing web application, to just studying code blocks and figuring out how it works.</p>
                            <br />
                            <p>Besides my love of Technology, I  also have a keen passion for fitness and a variety of sports. I love everything about the ocean and enjoy surfing, diving, and fishing, when I'm not at the beach I enjoy going to the gym or watching sports on tv. 
I                               look forward to my journey as a Full-Stack Developer, and I look forward to meeting new people along the way!</p>
                    </Card.Text>
                </Card.Body>
            </Card>

        </Container>
        </>
    )
};



export default Bio;