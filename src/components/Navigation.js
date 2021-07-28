
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function Navigation({ 
    aboutMeSelected, 
    setAboutMeSelected, 
    portfolioSelected, 
    setPortfolioSelected, 
    contactSelected, 
    setContactSelected, 
    resumeSelected, 
    setResumeSelected, 
    testState, 
    setTestState 
    }) {

    // console.log(`testState is ${testState}`)

    return (

        
            <Container>
                <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home" onClick={function() {
                        setAboutMeSelected(true)
                        setPortfolioSelected(false)
                        setContactSelected(false)
                        setResumeSelected(false)
                    }}>About Me</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={function() {
                        setAboutMeSelected(false)
                        setPortfolioSelected(true)
                        setContactSelected(false)
                        setResumeSelected(false)
                    }}>Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={function() {
                        setAboutMeSelected(false)
                        setPortfolioSelected(false)
                        setContactSelected(true)
                        setResumeSelected(false)
                    }}>Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3" onClick={function() {
                        setAboutMeSelected(false)
                        setPortfolioSelected(false)
                        setContactSelected(false)
                        setResumeSelected(true)
                    }}>Resume</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                    Disabled
                    </Nav.Link>
                </Nav.Item> */}
                </Nav>
                            
            </Container>
        
        
        

        // <Navbar id='navbar'>
        //     <Container>
        //         <Navbar.Brand href="#home">This is the Navbar</Navbar.Brand>
        //         <Navbar.Toggle />
        //         <Navbar.Collapse className="justify-content-end">
        //         <Navbar.Text>
        //             Signed in as: <a href="#login" className="font-color-white">Chris Winters</a>
        //         </Navbar.Text>
        //         </Navbar.Collapse>
        //         <button className="btn btn-primary" onClick={() => setTestState(true)}>true button</button>{' '}
        //         <button className="btn btn-primary" onClick={() => setTestState(false)}>false button</button>{' '}
        //     </Container>
        // </Navbar>

    )
}


export default Navigation
