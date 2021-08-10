import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navigation from '../Navigation/Navigation'
import './style.css'

function Header({  
    setAboutMeSelected,
    setPortfolioSelected,
    setContactSelected,
    setResumeSelected, 
    }) 
    {
    
    return (
        
            <Row id="hero">
                <Col className="header-center">
                    <h1 id="page-title">Chris Winters</h1>
                </Col>
                <Col className="header-center" id="nav-bar-position">
                    <Navigation
                        setAboutMeSelected={setAboutMeSelected}
                        setPortfolioSelected={setPortfolioSelected}
                        setContactSelected={setContactSelected}
                        setResumeSelected={setResumeSelected}
                    />
                </Col>
            </Row>            
        
    )
}

export default Header
