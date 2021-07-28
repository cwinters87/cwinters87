
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function Navigation({ 
    setAboutMeSelected, 
    setPortfolioSelected, 
    setContactSelected, 
    setResumeSelected, 
    }) {

    return (
                // <Nav className="justify-content-end" variant="pills" defaultActiveKey="link-1">
                // <Nav.Item>
                //     <Nav.Link eventKey="link-1" onClick={function() {
                //         setAboutMeSelected(true)
                //         setPortfolioSelected(false)
                //         setContactSelected(false)
                //         setResumeSelected(false)
                //     }}>About Me</Nav.Link>
                // </Nav.Item>
                // <Nav.Item>
                //     <Nav.Link eventKey="link-2" onClick={function() {
                //         setAboutMeSelected(false)
                //         setPortfolioSelected(true)
                //         setContactSelected(false)
                //         setResumeSelected(false)
                //     }}>Portfolio</Nav.Link>
                // </Nav.Item>
                // <Nav.Item>
                //     <Nav.Link eventKey="link-3" onClick={function() {
                //         setAboutMeSelected(false)
                //         setPortfolioSelected(false)
                //         setContactSelected(true)
                //         setResumeSelected(false)
                //     }}>Contact</Nav.Link>
                // </Nav.Item>
                // <Nav.Item>
                //     <Nav.Link eventKey="link-4" onClick={function() {
                //         setAboutMeSelected(false)
                //         setPortfolioSelected(false)
                //         setContactSelected(false)
                //         setResumeSelected(true)
                //     }}>Resume</Nav.Link>
                // </Nav.Item>
                // </Nav>


                // For refernce...
                // <Nav className="justify-content-end" variant="pills" defaultActiveKey="link-1">
                // <Nav.Item>
                //     <Nav.Link eventKey="link-1" onClick={function() {

                <Navbar collapseOnSelect expand="lg">
                    <Container>
                        {/* <Navbar.Brand>Chris Winters</Navbar.Brand> */}
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto justify-content-end" variant="pills" defaultActiveKey="link-1">
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1" onClick={function() {
                                        setAboutMeSelected(true)
                                        setPortfolioSelected(false)
                                        setContactSelected(false)
                                        setResumeSelected(false)
                                            }}>About Me
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2" onClick={function() {
                                        setAboutMeSelected(false)
                                        setPortfolioSelected(true)
                                        setContactSelected(false)
                                        setResumeSelected(false)
                                            }}>Portfolio
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-3" onClick={function() {
                                        setAboutMeSelected(false)
                                        setPortfolioSelected(false)
                                        setContactSelected(true)
                                        setResumeSelected(false)
                                            }}>Contact
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-4" onClick={function() {
                                        setAboutMeSelected(false)
                                        setPortfolioSelected(false)
                                        setContactSelected(false)
                                        setResumeSelected(true)
                                            }}>Resume
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>






    )
}


export default Navigation
