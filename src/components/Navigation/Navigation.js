
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './style.css'

function Navigation({ 
    setAboutMeSelected, 
    setPortfolioSelected, 
    setContactSelected, 
    setResumeSelected, 
    }) {

    return ( 
                <div id="nav-div" className="d-flex">
                <Navbar collapseOnSelect expand="lg">
                    <Container id="nav-div-container">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto justify-content-end" defaultActiveKey="link-1">
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2" onClick={function() {
                                        setAboutMeSelected(false)
                                        setPortfolioSelected(true)
                                        setContactSelected(false)
                                        setResumeSelected(false)
                                            }}><span className="navagation-links">My Work</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1" onClick={function() {
                                        setAboutMeSelected(true)
                                        setPortfolioSelected(false)
                                        setContactSelected(false)
                                        setResumeSelected(false)
                                            }}><span className="navagation-links">About Me</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-4" onClick={function() {
                                        setAboutMeSelected(false)
                                        setPortfolioSelected(false)
                                        setContactSelected(false)
                                        setResumeSelected(true)
                                            }}><span className="navagation-links">Resume</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-3" onClick={function() {
                                        setAboutMeSelected(false)
                                        setPortfolioSelected(false)
                                        setContactSelected(true)
                                        setResumeSelected(false)
                                            }}><span className="navagation-links">Contact</span>
                                    </Nav.Link>
                                </Nav.Item>                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                </div>






    )
}


export default Navigation
