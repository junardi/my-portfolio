import { Fragment } from "react";
// import { Outlet } from "react-router-dom";
// import Header from "../../components/header/header.component";
import { Navbar, Nav, Container, Button, Col, ListGroup, Row, Card } from "react-bootstrap";

const Layout = () => {
    return (
       <Fragment>

            <Navbar bg="primary" variant="dark" fixed="top">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div id="home" className="bg-info">
                <Container className="text-center">
                    <h1 className="display-2">Portfolio</h1>
                    <p className="lead">
                    The name is Mark Boribor and I am a Freelance Web Developer and Web Designer.
                    </p>
                    <Button variant="primary" size="lg" href="#contact">
                        Contact Me
                    </Button>
                </Container>
            </div>

            <Container id="about" className="defaultSpacing">
                <Row>
                    <Col lg={4}>
                        <h3 className="mb-2">About Mark</h3>
                        <p>Mark Boribor is an information technology professional who graduated from West Visayas State University Janiuay Campus in 2012.</p>
                        <p>He is a competent, analytical, flexible, and eager to perform individual. He sees himself working with an IT company or any other companies embracing technological means.</p>        
                        <p>Likewise, he also aims to contribute to the possible organization's growth and development given his skills and competencies.</p>  
                    </Col>

                    <Col lg={4}>
                        <h3 className="mb-2">Location</h3>
                        <p>Mark lives in Don T. Lutero West Janiuay, Iloilo City, Philippines. He loves to work at home so that he can hang out with his friends and family frequently.</p>
                        <p>If you are interested with Mark, leave him a message by clicking the contact me button at the top or contact link in the navigation.</p>
                    </Col>

                    <Col lg={4}>
                        <h3 className="mb-2">Skills</h3>
                        <ListGroup>
                            <ListGroup.Item><strong>jQuery</strong>: JavaScript Library</ListGroup.Item>
                            <ListGroup.Item><strong>JavaScript</strong></ListGroup.Item>
                            <ListGroup.Item><strong>Ajax</strong></ListGroup.Item>
                            <ListGroup.Item><strong>Angular</strong>: JavaScript framework</ListGroup.Item>
                            <ListGroup.Item><strong>HTML</strong></ListGroup.Item>
                            <ListGroup.Item><strong>CSS</strong></ListGroup.Item>
                            <ListGroup.Item><strong>Bootstrap</strong>: Front-end development framework</ListGroup.Item>
                            <ListGroup.Item><strong>PHP</strong></ListGroup.Item>
                            <ListGroup.Item><strong>Codeigniter</strong>: PHP framework</ListGroup.Item>
                            <ListGroup.Item><strong>OOP</strong></ListGroup.Item>
                            <ListGroup.Item><strong>MySQL</strong></ListGroup.Item>
                            <ListGroup.Item><strong>Photoshop</strong></ListGroup.Item>
                        </ListGroup>
                    </Col>

                </Row>
            
            </Container>

            <Container id="portfolio" className="defaultSpacing">
                <h1 className="text-center display-4 mb-5 text-muted">Work Samples in Codepen</h1>

                <Row id="portfolioRow" className="justify-content-center">
            
                    <Col lg={4}>
                        <Card>
                            <Card.Img variant="top" src="https://res.cloudinary.com/panoy05/image/upload/v1462267454/tributePage_sa0b1c.png" alt="Bon Jovi Tribute Page" />
                            <Card.Body>
                            <Card.Title>Tribute Page</Card.Title>
                            <Card.Text>Tribute Page for my idol Jon Bon Jovi</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card>
                            <Card.Img variant="top" src="https://res.cloudinary.com/panoy05/image/upload/v1465021702/quoteGenerator_pg2hlm.png" alt="Random Quote Generator" />
                            <Card.Body>
                            <Card.Title>Random Quote Generator</Card.Title>
                            <Card.Text>Generate Quotes then you can tweet a quote on Twitter</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>

            <Container id="contact" className="defaultSpacing">
                <h1  className="text-center display-4 mb-5 text-muted">Contact Me</h1>
                <Row>
                    <Col md={12}>
                        <p className="text-center">Feel free to leave me a message in my email <strong>mark.boribor73@gmail.com</strong></p>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="py-2 mb-5">
                    <Col md={12}>
                        <hr />
                    </Col>
                    <Col md={7} className="text-muted">
                        <small>Powered by Jean Arcenal</small>
                    </Col>
                    <Col md={5} className="text-md-end text-muted">
                        <small>&copy; 2023. All Rights Reserved</small>
                    </Col>
                </Row>
            </Container>

       </Fragment>
    )
};

export default Layout;