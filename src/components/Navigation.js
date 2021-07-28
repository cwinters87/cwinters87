
import Container from 'react-bootstrap/Container'

import Nav from 'react-bootstrap/Nav'

function Navigation({ 
    setAboutMeSelected, 
    setPortfolioSelected, 
    setContactSelected, 
    setResumeSelected, 
    }) {

    return (
            <Container>
                <Nav className="justify-content-end" variant="pills" defaultActiveKey="link-1">
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={function() {
                        setAboutMeSelected(true)
                        setPortfolioSelected(false)
                        setContactSelected(false)
                        setResumeSelected(false)
                    }}>About Me</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={function() {
                        setAboutMeSelected(false)
                        setPortfolioSelected(true)
                        setContactSelected(false)
                        setResumeSelected(false)
                    }}>Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3" onClick={function() {
                        setAboutMeSelected(false)
                        setPortfolioSelected(false)
                        setContactSelected(true)
                        setResumeSelected(false)
                    }}>Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4" onClick={function() {
                        setAboutMeSelected(false)
                        setPortfolioSelected(false)
                        setContactSelected(false)
                        setResumeSelected(true)
                    }}>Resume</Nav.Link>
                </Nav.Item>
                </Nav>                            
            </Container>
    )
}


export default Navigation
