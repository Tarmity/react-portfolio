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
            <Card>
                <Card.Img variant="top"  src={require("./imgs/cartoonPic.png")}  />
                <Card.Body className="cardBody">
                    <Card.Text >
                        <h2>About Me</h2>
                      <p><strong>In high school and before technology was that big, I was that kid the teacher always seemed to signal out for not paying attention, pull stuff apart and making a mess. Seemingly in my own words I always had a fascination for how things were put together and worked, I also had a passion for travel and would find myself daydreaming on some remote beach somewhere in the world. After I finished year 12, I had already been accepted into the Royal Australian Navy as a Marine Technician (Engineering) and was waiting to start my initial training.</strong></p> 
                       <br />
                        <p>When I started my career in the Navy, the two dreams I had as child had come to fruition, I was traveling the world and as an engineer I was pulling about complex mechanical equipment from v12 engines, Gas turbines to basic equipment like tap fittings. Live was grand. During my 13 years in the Navy, technology was for ever evolving and I started to work with equipment that was run from advance computer software which blew my mind. I had found the next chapter in my life computer software.</p>
                       <br />
                        <p>Once I left my career in the Navy, I started doing my own research and developed a passion for web and software development. Coding has fuelled my passion in some many areas from find out how certain codes interact together, and the result is an amazing web page to playing around with code and figuring out how it works. I love how the are so many different solutions to the same problem, the satisfaction of working on a bug for hours sometimes days and finally figure out the solutions is beyond satisfying. I cannot wait to further my knowledge as a full stack developer, and I look forward to meeting new people along the way!</p>
                    </Card.Text>
                </Card.Body>
            </Card>

        </Container>
        </>
    )
};



export default Bio;