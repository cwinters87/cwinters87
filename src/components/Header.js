import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navigation from './Navigation'

function Header({  
    setAboutMeSelected,
    setPortfolioSelected,
    setContactSelected,
    setResumeSelected, 
    }) 
    {
    
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Chris Winters</h1>
                </Col>
                <Col md="auto">
                    <Navigation
                        setAboutMeSelected={setAboutMeSelected}
                        setPortfolioSelected={setPortfolioSelected}
                        setContactSelected={setContactSelected}
                        setResumeSelected={setResumeSelected}
                    />
                </Col>
            </Row>            
        </Container>
    )
}

export default Header
