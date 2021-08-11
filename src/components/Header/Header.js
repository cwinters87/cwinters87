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

                <Col id="title-position" className="header-center" lg={true}>
                    <h1 id="page-title">Chris Winters</h1>
                </Col>
                
                <Col id="nav-bar-position" className="header-center" lg={true}>
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
