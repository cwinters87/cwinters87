
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
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                    Disabled
                    </Nav.Link>
                </Nav.Item>
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
